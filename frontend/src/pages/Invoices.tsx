import { type FC } from 'react'
import { useInvoiceContext } from '../context/InvoiceContext'
import { Invoice } from '../components/Invoice'
import type { InvoiceProps } from '../components/Invoice'
import AddNewInvoice from '../components/addNewInvoice'

export const Invoices: FC = () => {
    const {invoices} : {invoices: InvoiceProps[]} = useInvoiceContext()
  return (<div id='invoices-container'>
  <h1>Invoice Manager</h1>
  <h3>Manage your invoices!</h3>
  <AddNewInvoice/>
    <table id='invoices-list'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Client Name</th>
          <th>Amount</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice: InvoiceProps, index: number) => (
          <Invoice key={index} {...invoice}/>
          ))}
      </tbody>
    </table>
    </div>
  )
}
