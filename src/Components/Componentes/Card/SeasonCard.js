import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import ButtonAddSeason from "../Buttons/buttonSeason";
import { SeasonCardMain, SeasonCardArt, SeasonProductImg, SeasonProductTitle, SeasonProductPrice, } from "./seasonCardStyled";

const SeasonCard = ({ product }) => {
  
  const dispatch = useDispatch();

  if (!product) return null;


  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <SeasonCardMain>
      <SeasonCardArt>
        <SeasonProductImg src={product.image} alt={product.title} />
        <SeasonProductTitle>{product.title}</SeasonProductTitle>
        <SeasonProductPrice>{formatPrice(product.price)}</SeasonProductPrice>
        <ButtonAddSeason onClick={handleAddToCart} />
      </SeasonCardArt>
    </SeasonCardMain>
  );
};

export default SeasonCard;
