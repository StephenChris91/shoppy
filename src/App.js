import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

//styles

function App() {
  return (
    <div className="">
      <Layout>
        <Navbar />
        <Hero />
        <ProductList />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
