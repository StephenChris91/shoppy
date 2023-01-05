import { useState, useEffect } from 'react'
import  commerce  from '../Utils/libs/commerce'


const ProductList = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await commerce.products.list();
        setProducts((response && response.data ) || [])

        console.log(products)
    
    }

    useEffect(() => {
        getProducts()
    }, [])
    return ( 
        <>
        <div>
            <h1>Featured Products</h1>
            <div>
                {products.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <img src={item.image.url} alt={item.id} />
                    </div>
                ))}
            </div>
        </div>
        </> 
    );
}
 
export default ProductList;