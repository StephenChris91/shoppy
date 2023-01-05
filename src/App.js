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
      </Layout>
      <Hero />
      <ProductList />
    </div>
  );
}

export default App;
