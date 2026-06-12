import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HpmePage';
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="Orders" element={<OrdersPage />}></Route>
      <Route path="Tracking" element={<TrackingPage />}></Route>
    </Routes>
   
  )
}

export default App
