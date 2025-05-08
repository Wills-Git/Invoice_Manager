import { Invoices } from './pages/Invoices'
import { InvoiceProvider } from './context/InvoiceContext'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import InvoiceDetail from './pages/InvoiceDetail';
import './App.css'
import type { FC } from 'react'

const App: FC = () => {
  return (
    
    <Router>
      <InvoiceProvider>
      <Routes>
          <Route path="/" element={<Invoices />} />
          <Route path="/invoices/:id" element={<InvoiceDetail />} />
        </Routes>
      </InvoiceProvider>
    </Router>
  );
};

export default App
