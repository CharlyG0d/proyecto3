import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { BestSellerCard, TitleBestSellerCard, TextBestSellerCard, ImgBestSellerCard } from "./bestSellerStyled";
import ButtonAddHome from "../Buttons/buttons";

const CardHome = ({ product }) => {
  const dispatch = useDispatch();

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

  return (
    <BestSellerCard>
      <ImgBestSellerCard src={product.image} alt={product.title} />
      <TitleBestSellerCard>{product.title}</TitleBestSellerCard>
      <TextBestSellerCard>{formatPrice(product.price)}</TextBestSellerCard>
      <ButtonAddHome onClick={handleAddToCart} />
    </BestSellerCard>
  );
};

export default CardHome;
