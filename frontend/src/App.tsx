import { Invoices } from './pages/Invoices'
import { InvoiceProvider } from './context/InvoiceContext'
import AddNewInvoice from './components/addNewInvoice'
import './App.css'
import type { FC } from 'react'

const App: FC = () => {
  return (
    <InvoiceProvider>
      <AddNewInvoice/>
      <Invoices/>
    </InvoiceProvider>
  );
};

export default App
