import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useInvoiceContext } from '../context/InvoiceContext';
import type { InvoiceProps } from '../components/Invoice';

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { invoices, updateInvoice } = useInvoiceContext();

  const invoice = invoices.find(inv => inv.id === id);

  const [clientName, setClientName] = useState(invoice?.clientName || '');
  const [amount, setAmount] = useState(invoice?.amount || 0);
  const [dueDate, setDueDate] = useState(() =>
    invoice ? invoice.dueDate.toISOString().split('T')[0] : ''
  );

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedInvoice: InvoiceProps = {
      ...invoice,
      clientName,
      amount,
      dueDate: new Date(dueDate)
    };
    updateInvoice(updatedInvoice);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Invoice</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Client Name:
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
        <br />
        <button onClick={() => navigate("/")}>Back</button>
      </form>
    </div>
  );
};

export default InvoiceDetail;