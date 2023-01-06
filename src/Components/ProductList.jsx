import { useState, useEffect, CSSProperties } from 'react'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux'
import commerce from '../Utils/libs/commerce'
import { ADD_TO_CART } from '../redux/cartSlice'
import { toast } from 'react-toastify'
import { SyncLoader } from 'react-spinners'


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };


const ProductList = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [color, setColor] = useState('#fff')

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
        setIsLoading(true)
        getProducts()
        setIsLoading(false)
    }, [getProducts])
    return ( 
        <>
        <div>
            <h1 className='text-center lg:text-4xl sm:text-2xl font-bold mt-24 mb-10'>Featured Products</h1>
            <div className='grid gap-4 lg:grid-cols-3 sm:grid-cols-1 lg:grid-rows-3 sm:grid-rows-1 lg:pr-32 lg:pl-32 mb-10 '>
                {isLoading ? <SyncLoader color={color}
                    loading={isLoading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"/> : products.map(item => (
                     <Product  key={item.id} product={item} addToCart={addToCart}/>
                ))}
            </div>
        </div>
        </> 
    );
}
 
export default ProductList;