import { useState, useEffect } from 'react'
import  commerce  from '../Utils/libs/commerce'
import Product from './Product'


const ProductList = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await commerce.products.list();
        setProducts((response && response.data ) || [])

        console.log(products)
    
    }

    useEffect(() => {
        getProducts()
    }, [getProducts])
    return ( 
        <>
        <div>
            <h1 className='text-center lg:text-4xl sm:text-2xl font-bold mt-24 mb-10'>Featured Products</h1>
            <div className='grid gap-4 lg:grid-cols-3 sm:grid-cols-1 lg:grid-rows-3 sm:grid-rows-1 lg:pr-32 lg:pl-32 mb-10 '>
                {products.map(item => (
                    <Product  key={item.id} product={item}/>
                ))}
            </div>
        </div>
        </> 
    );
}
 
export default ProductList;