import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CardHome from "../../Componentes/Card/bestSellerCard";
import { MainHome, SeasonSection, TitleHome, SeasonCardTitle, } from "./styled";
import SeasonCard from "../../Componentes/Card/SeasonCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts, selectProductsStatus, } from "../../../redux/slices/productsSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  if (status === "loading") return <p>Cargando productos...</p>;
  if (status === "failed") return <p>Error al cargar productos.</p>;

  return (
    <MainHome>
      <TitleHome>Lo más vendido</TitleHome>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 20 },
          720: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        style={{ width: "100%", padding: "2rem 0" }}
      >
        {products.slice(0, 8).map((product) => (
          <SwiperSlide key={product.id}>
            <CardHome product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SeasonCardTitle>Temporada Otoño</SeasonCardTitle>
      <SeasonSection>
        {products
          .filter((p) => p.category.includes("women"))
          .slice(0, 4)
          .map((product) => (
            <SeasonCard key={product.id} product={product} />
          ))}
      </SeasonSection>

    </MainHome>

  );
};

export default Home;
