import { createContext, useContext, useState, type ReactNode, type FC } from 'react';
import { type InvoiceProps } from '../components/Invoice';

type InvoiceContextType = {
  invoices: InvoiceProps[];
  addInvoice: (invoice: InvoiceProps) => void;
  updateInvoice: (updatedInvoice: InvoiceProps) => void;
};

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export const useInvoiceContext = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error('useInvoiceContext must be used within an InvoiceProvider');
  }
  return context;
};

type InvoiceProviderProps = {
    children: ReactNode;
  };
  
export const InvoiceProvider: FC<InvoiceProviderProps> = ({ children }) => {
const [invoices, setInvoices] = useState<InvoiceProps[]>([]);
const [nextId, setNextId] = useState<number>(1);

const addInvoice = (invoice: InvoiceProps) => {
    const newInvoice = {...invoice, id: nextId.toString()};
    setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
      setNextId(nextId + 1); //temp solution
};

const updateInvoice = (updatedInvoice: InvoiceProps) => {
    setInvoices((prevInvoices) =>
      prevInvoices.map((invoice) =>
        invoice.id === updatedInvoice.id ? updatedInvoice : invoice
      )
    );
  };

return (
    <InvoiceContext.Provider value={{ invoices, addInvoice, updateInvoice }}>
    {children}
    </InvoiceContext.Provider>
);
};