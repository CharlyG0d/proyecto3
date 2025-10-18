
import { useDispatch } from "react-redux";
import ButtonAddSeason from "../Buttons/buttonSeason";
import { addToCart } from "../../../redux/slices/cartSlice";
import { OffersArt, OffersImg, OffersMain, OffersTitle, OffersText} from "./offersCardStyled";

const CardOffer = ({ product }) => {
  const dispatch = useDispatch();
 
  const handleAddToCart = () =>{
      dispatch (addToCart(product));
    };
    if (!product) return null;

  

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

   

  return (
    <OffersMain>
      <OffersImg src={product.image} alt={product.title} />
      <OffersArt>
        <OffersTitle>{product.title}</OffersTitle>
        <OffersText><strong>{formatPrice(product.price)}</strong></OffersText>
        <ButtonAddSeason onClick={handleAddToCart} />
      </OffersArt>
    </OffersMain>
  );
};

export default CardOffer;
