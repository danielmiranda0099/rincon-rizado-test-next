import { BannerSlider, CardCarrouselSwiper } from "@/components";
import {
  SectionFavoriteProducts,
  SectionImageDiff,
  SectionReels,
  SectionTest,
  SectionTraining,
} from "@/components/sections";
import { SectionCategoriesGrid } from "@/components/sections/SectionCategoriesGrid";
import Link from "next/link";


const SERVICES_MAIN = [
  {
    title: "Color Base",
    path: "/services/color-base",
    image: "/images/image11.jpg",
  },
  {
    title: "CORTE DE FORMA",
    path: "/services/corte-de-forma",
    image: "/images/services/corte-forma/unnamed-5.jpg",
  },
  {
    title: "ILUMINACIONES: HIGHLIGHT - BALAYAGE",
    path: "/services/iluminaciones-highlight-balayage",
    image: "/images/image13.jpg",
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
    image:
      "https://images.pexels.com/photos/17547816/pexels-photo-17547816/free-photo-of-mujer-en-pie-de-pie-retrato.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <BannerSlider />

      <CardCarrouselSwiper
        headerCarrousel="SERVICIOS PRINCIPALES"
        data={SERVICES_MAIN}
      />

      <Link className="btn btn-primary center-x" href="/services">
        Ver Todos Los Servicios
      </Link>

      <SectionFavoriteProducts />

      <SectionCategoriesGrid />

      <SectionTest />

      <SectionImageDiff /> 

      <SectionTraining />

      <SectionReels />
    </>
  );
}
