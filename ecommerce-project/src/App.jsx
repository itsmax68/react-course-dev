import axios from 'axios';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import './App.css'
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);


  const loadCart = async() => {
    const response = await axios.get('/api/cart-items?expand=product');
        setCart(response.data);
  };

  useEffect(() => {
    loadCart();

  }, []);


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="Orders" element={<OrdersPage cart={cart} />}></Route>
      <Route path="Tracking" element={<TrackingPage />}></Route>
    </Routes>
   
  )
}

export default App
