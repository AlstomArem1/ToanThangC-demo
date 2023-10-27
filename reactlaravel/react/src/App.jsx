import { AppProvider } from "./AppContext";
import Header from "./compenentes/header/Header";
import Home from "./compenentes/home/Home";
import { Route, Routes } from "react-router-dom"
import Product from "./compenentes/product/Product";
import Footer from "./compenentes/footer/Footer";
import Cart from "./compenentes/cart/Cart";
import Blog from "./compenentes/blog/Blog";
import SignIn from "./compenentes/Login/signin/SignIn";
import SignUp from "./compenentes/Login/signup/SignUp";
import Order from "./compenentes/order/Order";
import Scrolltop from "./compenentes/boostrap/scrolltotop/Scrolltotop";
import Contact from "./compenentes/contact/Contact";
import Proteced from "./Proteced";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/shop" element={<Product />}></Route>
          <Route path="/blog" element={<Proteced Cmp={Blog}/>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/tracuu" element={< Order/>}></Route>
          <Route path="/contact" element={< Contact/>}></Route>
        </Routes>
        <Scrolltop/>
        <Footer />
      </AppProvider>

    </div>
  );
}
export default App;
