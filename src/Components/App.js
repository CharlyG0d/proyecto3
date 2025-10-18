
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Offers from "./Pages/Offers/offers"
import Contacto from "./Pages/Contact/contact";
import Cart from "./Pages/Cart/cart";
import Header from "./Componentes/Header/header";
import Footer from "./Pages/Footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/Components/Offers/offers.js" element={<Offers />} />
        <Route path="/src/Components/Contact/contact.js" element={<Contacto />} />
        <Route path="/src/Components/Cart/cart.js" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
