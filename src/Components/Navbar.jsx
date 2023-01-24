import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { elastic as Menu } from 'react-burger-menu'
import { FaRegTrashAlt } from 'react-icons/fa'
import commerce from '../Utils/libs/commerce'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

//styles 
import './Navbar.css'

const Navbar = ( ) => {

    const [toggled, setToggled] = useState(false)
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState()

    const navigate = useNavigate()

    const showMenu = (event) => {
        event.preventDefault()
        setToggled(true)
    }

   
    const getCartItems = async () => {
        const cartItems = await commerce.cart.contents()
        setCart(cartItems)
    }

    const getTotal = async () => {
        const { subtotal } = await commerce.cart.retrieve()
        setCartTotal(subtotal.formatted_with_symbol)
        console.log(cartTotal)
    }

    const removeFromCart = async (id) => {
        const removeItem = await commerce.cart.remove(id).then(rmvItem => console.log(rmvItem))
    }
    
    useEffect(() => {        
        getCartItems()
        getTotal()
        
    }, [cart, cartTotal, getTotal])
    return ( 
        <div id='outer-container'>
            { toggled ? 
            
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                <a id="home" className="menu-item" href="/">Profile</a>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item text-white">{cart.length}</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                        <span className="font-bold text-lg">{cart.length}</span>
                        <span className="text-info">{`Subtotal: `}</span>
                        <div className="card-actions">
                            <button className="btn bg-black btn-block text-white" onClick={() => navigate('/cart')}>View cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Menu> : null
            }
            
            <FaBars className='font-bold text-white text-2xl bm-burger-button lg:invisible sm:visible' onClick={showMenu}/>
            <div id='page-wrap' className="navbar bg-black lg:pr-20 lg:pl-20">
                <div className="flex-1">
                    <Link to='/'>
                        <h1 id='logo' className="normal-case text-bold text-xl text-white">PIZZA EXPRESS</h1>
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item text-white">{cart.length}</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-72 bg-base-100 shadow">
                        <div className="card-body">
                        <span className="font-bold text-lg">{`${cart.length} items`}</span>
                        <div className='flex-col gap-1'>
                            {cart && cart.map(cart=> (
                                <div className='flex items-start justify-between mx-auto mb-4 shadow-sm bg-gray-100 rounded-sm p-2' key={cart.id}>
                                    <img src={cart.image.url} alt={cart.name} className='w-24 rounded-sm'/>
                                    <div className='flex flex-col items-end'>
                                        <h2 className='font-bold'>{cart.name}</h2>
                                        <h3>{cart.price.formatted_with_symbol}</h3>
                                        <h3>{`Qty: ${cart.quantity}`}</h3>
                                    </div>
                                    <FaRegTrashAlt className='cursor-pointer' onClick={() => {removeFromCart(cart.id)}}/>
                                </div>
                            ))}
                            <span className="text-danger">{`Subtotal: ${cartTotal}`}</span>
                        </div>
                        <div className="card-actions">
                            <button className="btn bg-black btn-block text-white" onClick={() => navigate('/cart')}>View cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;