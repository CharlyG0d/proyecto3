
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts, selectProductsStatus,
} from "../../../redux/slices/productsSlice";

import CardOffer from "../../Componentes/Card/offersCard";
import { ArtOffers, MainOffers } from "./styled";

const Offers = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  if (status === "loading") return <p>Cargando ofertas...</p>;
  if (status === "failed") return <p>Error al cargar las ofertas.</p>;

  const offerProducts = products.filter((p) => p.price < 50);

  return (
    <MainOffers>
      <h1>Ofertas</h1>
      <ArtOffers>
        {offerProducts.slice(0, 8).map((product) => (
            <CardOffer key={product.id} product={product}  />
          
        ))}
      </ArtOffers>
      
    </MainOffers>
  );
};

export default Offers;
