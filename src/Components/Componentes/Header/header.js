import logo from "../../../assets/logo.png";
import { MainHeader, StyledNavLink, NavHeader, ImgNavBar, CartIconWrapper, CartCount, IconText } from "./styled";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../redux/slices/cartSlice";
import { TbBrandMinecraft } from 'react-icons/tb';
import { RiHome2Line } from 'react-icons/ri';
import { BiSolidOffer } from 'react-icons/bi';
import { MdOutlineContacts } from 'react-icons/md';


const Header = () => {

    const cartItems = useSelector(selectCartItems);

    const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0)


  return (
    <MainHeader>
      <NavHeader>

        <CartIconWrapper>
        <StyledNavLink to="/">
        <RiHome2Line size={30} />
        <IconText>Inicio</IconText>
        </StyledNavLink>
        </CartIconWrapper> 
        
        <CartIconWrapper>
        <StyledNavLink to="/src/Components/Offers/offers.js">
        <BiSolidOffer size={30} />
        <IconText>Ofertas</IconText>
        </StyledNavLink>
        </CartIconWrapper>

        <ImgNavBar src={logo} alt="Logo" />
        
        <CartIconWrapper>
        <StyledNavLink to="/src/Components/Contact/contact.js">
        <MdOutlineContacts size={25} />
        <IconText>Contacto</IconText>
        </StyledNavLink>
        </CartIconWrapper>

        <CartIconWrapper> 
        <StyledNavLink to="/src/Components/Cart/cart.js">
        <TbBrandMinecraft size={30} />
        <IconText>Carrito</IconText>
        </StyledNavLink>
        {totalItems > 0 && <CartCount> {totalItems} </CartCount>}
        </CartIconWrapper>
      
      </NavHeader>
    </MainHeader>
  );
};

export default Header;