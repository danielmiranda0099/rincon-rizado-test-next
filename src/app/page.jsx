import { BannerSlider, CardCarrouselSwiper } from "@/components";
import { SectionFavoriteProducts, SectionImageDiff, SectionReels, SectionTest, SectionTraining } from "@/components/sections";
import { SectionCategoriesGrid } from "@/components/sections/SectionCategoriesGrid";

const SERVICES_CORTES = [
  {
    title: "CORTE DE FORMA",
    path: "#",
    image: "https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg",
  },
  {
    title: "CORTE DE PUNTAS",
    path: "#",
    image: "https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg",
  },
  {
    title: "CORTE DE FORMA BABY",
    path: "#",
    image: "https://images.pexels.com/photos/17547816/pexels-photo-17547816/free-photo-of-mujer-en-pie-de-pie-retrato.jpeg",
  },
]
const SERVICES_RITUALS = [
  {
    title: "RITUAL INFANTIL",
    path: "#",
    image: "https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg",
  },
  {
    title: "ritual EN TRANSICIÓN CAPILAR",
    path: "#",
    image: "https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg",
  },
  {
    title: "RITUAL HIDRATANTE",
    path: "#",
    image: "https://images.pexels.com/photos/17547816/pexels-photo-17547816/free-photo-of-mujer-en-pie-de-pie-retrato.jpeg",
  },
  {
    title: "RITUAL REPARADOR",
    path: "#",
    image: "https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg",
  },
  {
    title: "ritual SERVICIO CELULAS MADRES",
    path: "#",
    image: "https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg",
  }
]
const SERVICES_OTHERS = [
  {
    title: "CITA DE DEFINICION",
    path: "#",
    image: "https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg",
  },
  {
    title: "CITA DEFINICIÓN INFANTIL",
    path: "#",
    image: "https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg",
  },
  {
    title: "DETOX CAPILAR",
    path: "#",
    image: "https://images.pexels.com/photos/17547816/pexels-photo-17547816/free-photo-of-mujer-en-pie-de-pie-retrato.jpeg",
  },
  {
    title: "SERVICIO FIBRE CLINIX",
    path: "#",
    image: "https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg",
  },
  {
    title: "Rizos al instante",
    path: "#",
    image: "https://images.pexels.com/photos/4668537/pexels-photo-4668537.jpeg",
  }
]
export default function Home() {
  return (
    <>
      <BannerSlider />

      <CardCarrouselSwiper headerCarrousel="SERVICIOS DE CORTE" data={SERVICES_CORTES} />

      <CardCarrouselSwiper headerCarrousel="Rituales" data={SERVICES_RITUALS} />

      <CardCarrouselSwiper headerCarrousel="OTROS SERVICIOS" data={SERVICES_OTHERS} />

      <SectionTest />
      
      <SectionImageDiff />

      <SectionTraining />

      <SectionFavoriteProducts />

      <SectionCategoriesGrid />

      <SectionReels />

    </>
  );
}
