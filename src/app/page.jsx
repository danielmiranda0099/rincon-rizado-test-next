import { BannerSlider, CardCarrouselSwiper } from "@/components";
import { SectionFavoriteProducts, SectionImageDiff, SectionReels, SectionTest, SectionTraining } from "@/components/sections";
import { SectionCategoriesGrid } from "@/components/sections/SectionCategoriesGrid";
// Color Base con Aclaración
// Color Base Sin Aclaración (cobertura oscura)
// Prueba de coloración
// REFLEJOS Y CONTRASTES:
//   ILUMINACIONES: HIGHLIGHT - BALAYAGE
//   BABYLIGHTS.
const SERVICES_MAIN = [
  
  {
    title: "Color Base con Aclaración",
    path: "#",
    image: "/images/image11.jpg",
  },
  {
    title: "CORTE DE FORMA",
    path: "#",
    image: "/images/image9.jpg",
  },
  {
    title: "ILUMINACIONES: HIGHLIGHT - BALAYAGE",
    path: "#",
    image: "/images/image13.jpg",
  },
  {
    title: "Prueba de coloración",
    path: "#",
    image: "https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg",
  },
  {
    title: "Color Base Sin Aclaración (cobertura oscura)",
    path: "#",
    image: "/images/image19.jpg",
  },
  {
    title: "BABYLIGHTS",
    path: "#",
    image: "/images/image20.jpg",
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
