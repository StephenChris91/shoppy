import { useState, useEffect } from 'react'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux'
import commerce from '../Utils/libs/commerce'
import { ADD_TO_CART } from '../redux/cartSlice'
import { toast } from 'react-toastify'


const ProductList = () => {
    const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    const state = useSelector(state => state.cart.value)

    const getProducts = async () => {
        const response = await commerce.products.list();
        setProducts((response && response.data ) || [])
    }

    const addToCart = async (id) => {
        const addItem = await commerce.cart.add(id)
        console.log(addItem)
        dispatch(ADD_TO_CART(addItem))
        toast.success("Product Added to Cart!", {
            position: toast.POSITION.TOP_CENTER
          });
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
                    <Product  key={item.id} product={item} addToCart={addToCart}/>
                ))}
            </div>
        </div>
        </> 
    );
}
 
export default ProductList;