import { BannerSlider, CardCarrouselSwiper } from "@/components";
import { SectionFavoriteProducts, SectionImageDiff, SectionReels, SectionTest, SectionTraining } from "@/components/sections";
import { SectionCategoriesGrid } from "@/components/sections/SectionCategoriesGrid";

const SERVICES_MAIN = [
  
  {
    title: "Color Base con Aclaración",
    path: "/services/color-base-con-aclaracion",
    image: "/images/image11.jpg",
  },
  {
    title: "CORTE DE FORMA",
    path: "/services/corte-de-forma",
    image: "/images/image9.jpg",
  },
  {
    title: "ILUMINACIONES: HIGHLIGHT - BALAYAGE",
    path: "/services/iluminaciones-highlight-balayage",
    image: "/images/image13.jpg",
  },
  {
    title: "Prueba de coloración",
    path: "/services/slug",
    image: "https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg",
  },
  {
    title: "Color Base Sin Aclaración (cobertura oscura)",
    path: "/services/color-base-sin-aclaracion",
    image: "/images/image19.jpg",
  },
  {
    title: "BABYLIGHTS",
    path: "/services/babylights",
    image: "/images/image20.jpg",
  },
  {
    title: "CORTE DE PUNTAS",
    path: "/services/corte-de-puntas",
    image: "https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg",
  },
  {
    title: "CORTE DE FORMA BABY",
    path: "/services/corte-de-forma-baby",
    image: "https://images.pexels.com/photos/17547816/pexels-photo-17547816/free-photo-of-mujer-en-pie-de-pie-retrato.jpeg",
  },
]

export default function Home() {
  return (
    <>
      <BannerSlider />

      <CardCarrouselSwiper headerCarrousel="SERVICIOS PRINCIPALES" data={SERVICES_MAIN} />

      <button className="btn btn-primary center-x">Ver Todos Los Servicios</button>

      <SectionFavoriteProducts />

      <SectionCategoriesGrid />

      <SectionTest />
      
      <SectionImageDiff />

      <SectionTraining />



      <SectionReels />

    </>
  );
}
