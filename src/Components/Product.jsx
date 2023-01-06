import { FaShoppingCart  } from 'react-icons/fa'


const Product = ( { product } ) => {

    const { id, image, name, price, description } = product

    const desc1 = description.slice(3)
    const desc2 = description.slice(-3)
    const joined = desc1.concat(desc2)
    const describe = joined.slice(0, joined.length -7)
    
    return ( 
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image.url} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <h4 className='card-description'>{describe}</h4>
                <div className="card-actions justify-end">
                <div className="badge badge-outline mt-3">{price.formatted_with_symbol}</div>
                <FaShoppingCart className='text-2xl mt-3 cursor-pointer' onClick={() => console.log('clicked cart')}/>
                </div>
            </div>
        </div>
     );
}
 
export default Product;