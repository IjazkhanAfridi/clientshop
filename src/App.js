import './App.css';
import Catalog from './pages/Catalog';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import AboutProduct from './components/AboutProduct';
import Products from './components/Products';
import CartModel from './components/CartModel';
import BuyNow from './components/BuyNow';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import {CartProvider} from "./context/CartContext"

function App() {
  return (
    <>
    <CartProvider >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productdetail' element={<ProductDetail />} />
          <Route path='/aboutproduct' element={<AboutProduct />} />
          <Route path='/cartmodel' element={<CartModel />} />
          <Route path='/checkout' element={<BuyNow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
