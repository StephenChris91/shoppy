import Header from '../Assets/shoppy-header.jpg'

const Hero = () => {
    return ( 
        <>
            <div className="hero h-96" style={{ backgroundImage: `url(${Header})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold text-white">PIZZA EXPRESS</h1>
                    <p className="mb-5 text-gray-100">Eat anything, anywhere, anytime. Biggest deals anywhere in the world</p>
                    <button className="btn btn-black text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Hero;