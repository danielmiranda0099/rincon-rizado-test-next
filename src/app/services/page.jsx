"use client";
import { IconWhatsApp } from "@/components/icons";
import "./styles.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TYPE_SERVICES = {
  color: "color",
  corte: "corte",
  ritual: "ritual",
  definicion: "definicion",
  tratamiento: "tratamiento",
  cita: "cita",
};

const BREAD = {
  all: "Todos los servicios",
  color: "Color",
  corte: "Cortes",
  ritual: "Rituales",
  definicion: "Definiciones",
  tratamiento: "Tratamiento",
  cita: "Cita",
};

const ALL_SERVICES = [
  {
    image: "/images/image13.jpg",
    service_name: "Color base",
    type_service: TYPE_SERVICES.color,
    path: "/services/color-base",
  },
  {
    image: "/images/image6.jpg",
    service_name: "ILUMINACIONES: HIGHLIGHT - BALAYAGE",
    type_service: TYPE_SERVICES.color,
    path: "/services/iluminaciones-highlight-balayage",
  },
  {
    image: "/images/image8.jpg",
    service_name: "babylights",
    type_service: TYPE_SERVICES.color,
    path: "/services/babylights",
  },
  {
    image: "/images/image9.jpg",
    service_name: "corte de forma",
    type_service: TYPE_SERVICES.corte,
    path: "/services/corte-de-forma",
  },
  {
    image: "/images/image10.jpg",
    service_name: "corte de puntas",
    type_service: TYPE_SERVICES.corte,
    path: "services/corte-de-puntas",
  },
  {
    image: "/images/image11.jpg",
    service_name: "Corte de forma baby",
    type_service: TYPE_SERVICES.corte,
    path: "services/corte-de-forma-baby",
  },
  {
    image: "/images/image12.jpg",
    service_name: "cita en transición capilar",
    type_service: TYPE_SERVICES.cita,
    path: "/services/cita-en-transicion-capilar",
  },
  {
    image: "/images/image7.jpg",
    service_name: "Ritual hidratante",
    type_service: TYPE_SERVICES.ritual,
    path: "/services/ritual-hidratante",
  },
  {
    image: "/images/image14.jpg",
    service_name: "Cita De Definición",
    type_service: TYPE_SERVICES.definicion,
    path: "/services/cita-de-definicion",
  },
  {
    image: "/images/image15.jpg",
    service_name: "tratamiento profundo",
    type_service: TYPE_SERVICES.tratamiento,
    path: "services/tratamiento-profundo",
  },
  {
    image: "/images/image18.jpg",
    service_name: "cita en transición capilar",
    type_service: TYPE_SERVICES.tratamiento,
    path: "services/cita-en-transicion-capilar",
  },
  {
    image: "/images/image20.jpg",
    service_name: "cita definicion infantil",
    type_service: TYPE_SERVICES.definicion,
    path: "services/cita-definicion-infantil",
  },
  {
    image: "/images/image20.jpg",
    service_name: "Ritual infantil",
    type_service: TYPE_SERVICES.ritual,
    path: "services/ritual-infantil",
  },
  {
    image: "/images/image16.jpg",
    service_name: "Ritual reparador",
    type_service: TYPE_SERVICES.ritual,
    path: "services/ritual-reparador",
  },
];

export default function AllServicesPage() {
  const [filterValue, setFilterValue] = useState("all");
  const [dataServices, setDataServices] = useState(ALL_SERVICES);

  useEffect(() => {
    if (filterValue === "all") return setDataServices(ALL_SERVICES);
    const filterServices = ALL_SERVICES.filter((service) => {
      return service.type_service === filterValue;
    });

    setDataServices(filterServices);
  }, [filterValue]);

  return (
    <section className="section-contained-lg section-all-services-container">
      <div className="services-filter-container section-contained-sm">
        <label>Seleccione un tipo de servicio</label>

        <select onChange={(event) => setFilterValue(event.target.value)}>
          <option value="all">Todos los servicios</option>
          <option value="color">Color</option>
          <option value="ritual">Ritual</option>
          <option value="corte">Corte</option>
          <option value="definicion">Definicion</option>
        </select>
      </div>

      <div className="all-services-container">
        <h1>{BREAD[filterValue]}</h1>
        <div className="services-by-type-container">
          {dataServices.map((service) => (
            <Link href={service.path} is="div" className="service-by-type-item" key={service.service_name}>
              <div className="service-item-image">
                <Image height={300} width={300} src={service.image} alt="" />
              </div>
              <div className="service-item-header">
                <h2>{service.service_name}</h2>

                {/* <div className="service-item-header-buttons">
                  <Link className="btn btn-outline" href={service.path}>
                    Ver Mas
                  </Link>
                  <a className="btn btn-primary service-item-header-button-whatsapp">
                    Agendar
                    <span>
                      <IconWhatsApp size="1.7rem" color="white" />
                    </span>
                  </a>
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
