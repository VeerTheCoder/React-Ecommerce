import "./App.css";
import Header from "./components/Headers";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
