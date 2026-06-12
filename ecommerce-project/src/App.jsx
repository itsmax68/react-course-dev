import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HpmePage';
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'
import { OrdersPage } from './pages/OrdersPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="Orders" element={<OrdersPage />}></Route>
    </Routes>
   
  )
}

export default App
