import { useState} from 'react'
import type { FC, FormEvent } from 'react'

import type { InvoiceProps } from './Invoice'
import { useInvoiceContext } from '../context/InvoiceContext'

const AddNewInvoice: FC = () => {
    const [clientName,setClientName] = useState<string | null>(null)
    const [dueDate, setDueDate] = useState<Date | null> (null)
    const [amount, setAmount] = useState<number | null>(null)

    const {addInvoice} = useInvoiceContext()

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        if (dueDate && clientName && amount ){
        const body: InvoiceProps = {
            clientName,
            dueDate,
            amount
        }
        addInvoice(body)
        console.log("invoice added")
    } else {
        console.error("invoice is invalid")
    }
       
    }

  return (
    <form onSubmit={handleSubmit}>
    <table>
        <tbody>
            <tr>
                <td>
                <input
                    type="text"
                    placeholder="Client Name"
                    onChange={(e) => setClientName(e.target.value || null)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Amount"
                    onChange={(e) =>
                      setAmount(e.target.value ? parseFloat(e.target.value) : null)
                    }
                  />
                </td>
                <td>
                  <input
                    type="date"
                    onChange={(e) =>
                      setDueDate(e.target.value ? new Date(e.target.value) : null)
                    }
                  />
                </td>
                <td>
                  <button type="submit">Add Invoice</button>
                </td>
            </tr>
        </tbody>
    </table>
    </form>
  )
}


export default AddNewInvoice
