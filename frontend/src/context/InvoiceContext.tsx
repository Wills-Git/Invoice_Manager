import { createContext, useContext, useState, type ReactNode, type FC } from 'react';
import { type InvoiceProps } from '../components/Invoice';

type InvoiceContextType = {
  invoices: InvoiceProps[];
  addInvoice: (invoice: InvoiceProps) => void;
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

const addInvoice = (invoice: InvoiceProps) => {
    setInvoices((prevInvoices) => [...prevInvoices, invoice]);
};

return (
    <InvoiceContext.Provider value={{ invoices, addInvoice }}>
    {children}
    </InvoiceContext.Provider>
);
};