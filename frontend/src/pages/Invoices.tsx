import React, { type FC } from 'react'
import { useInvoiceContext } from '../context/InvoiceContext'
import { Invoice } from '../components/Invoice'
import type { InvoiceProps } from '../components/Invoice'

export const Invoices: FC = () => {
    const {invoices} : {invoices: InvoiceProps[]} = useInvoiceContext()
  return (
    <table>
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
  )
}
