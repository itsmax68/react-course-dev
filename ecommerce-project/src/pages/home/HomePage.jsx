import axios from 'axios'
import {useEffect, useState} from 'react'
import {Header} from '../../components/Header';
import {ProductGrid} from './ProductsGrid'
import './HomePage.css'

export function HomePage({cart}) {
    const [products , setProducts] = useState([]);


    useEffect(() => {
        axios.get('/api/products')
        .then((response) => {
            setProducts(response.data);
        });


    },[]);

    return(
        <>
        <Header  cart={cart} />

            <title>Ecommerce project</title>
            
        
            <div className="home-page">
                <ProductGrid products={products} />
            </div>
      </>
    );
}