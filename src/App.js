import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";

//styles

function App() {
  return (
    <div className="">
      <Layout>
        <Navbar />
      </Layout>
      <Hero />
    </div>
  );
}

export default App;
