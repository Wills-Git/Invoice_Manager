import React from 'react'
import { useNavigate } from 'react-router-dom'

export type InvoiceProps = {
    id? : string
    clientName: string,
    amount: number,
    dueDate: Date
}




export function Invoice(invoice: InvoiceProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (invoice.id) {
          navigate(`/invoices/${invoice.id}`);
        }
      };

  return (
    <tr onClick={handleClick} style={{ cursor: 'pointer' }} >
        <td>{invoice.id}</td>
        <td>{invoice.clientName}</td>
        <td>{invoice.amount}</td>
        <td>{invoice.dueDate.toLocaleDateString()}</td>
    </tr>
  )
}

