import React from 'react'

export type InvoiceProps = {
    id? : string
    clientName: string,
    amount: number,
    dueDate: Date
}

export function Invoice(invoice: InvoiceProps) {
  return (
    <tr>
        <td>{invoice.clientName}</td>
        <td>{invoice.amount}</td>
        <td>{invoice.dueDate.toLocaleDateString()}</td>
    </tr>
  )
}

