'use client'
import { IconWhatsApp } from "@/components/icons";
import "./styles.css";
import { useEffect, useState } from "react";

const TYPE_SERVICES = {
  color: "color",
  corte: "corte",
  ritual: "ritual",
  definicion: "definicion"
}

const BREAD = {
  all: "Todos los servicios",
  color: "Color",
  corte: "Cortes",
  ritual: "Rituales",
  definicion: "Definiciones"
}

const ALL_SERVICES = [
  {
    image: "./images/image5.jpg",
    service_name: "color base con aclaracion",
    type_service: TYPE_SERVICES.color,
    path: "#"
  },
  {
    image: "./images/image6.jpg",
    service_name: "ILUMINACIONES: HIGHLIGHT - BALAYAGE",
    type_service: TYPE_SERVICES.color,
    path: "#"
  },
  {
    image: "./images/image7.jpg",
    service_name: "Color base sin aclaracion",
    type_service: TYPE_SERVICES.color,
    path: "#"
  },
  {
    image: "./images/image8.jpg",
    service_name: "babylights",
    type_service: TYPE_SERVICES.color,
    path: "#"
  },
  {
    image: "./images/image9.jpg",
    service_name: "corte de forma",
    type_service: TYPE_SERVICES.corte,
    path: "#"
  },
  {
    image: "./images/image10.jpg",
    service_name: "corte de puntas",
    type_service: TYPE_SERVICES.corte,
    path: "#"
  },
  {
    image: "./images/image11.jpg",
    service_name: "Ritual Infantil",
    type_service: TYPE_SERVICES.ritual,
    path: "#"
  },
  {
    image: "./images/image12.jpg",
    service_name: "ritual EN TRANSICIÓN CAPILAR",
    type_service: TYPE_SERVICES.ritual,
    path: "#"
  },
  {
    image: "./images/image13.jpg",
    service_name: "RITUAL HIDRATANTE",
    type_service: TYPE_SERVICES.ritual,
    path: "#"
  },
  {
    image: "./images/image14.jpg",
    service_name: "Cita De Definición",
    type_service: TYPE_SERVICES.definicion,
    path: "#"
  },
  {
    image: "./images/image15.jpg",
    service_name: "Cita Definición Infantil",
    type_service: TYPE_SERVICES.definicion,
    path: "#"
  },
]

export default function AllServicesPage() {
  const [filterValue, setFilterValue] = useState("all");
  const [dataServices, setDataServices] = useState(ALL_SERVICES)


  useEffect( () => {
    if(filterValue === "all") return setDataServices(ALL_SERVICES)
    const filterServices = ALL_SERVICES.filter( (service) => {return service.type_service === filterValue})

    setDataServices(filterServices)
  }, [filterValue])

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
          {
            dataServices.map( (service) => (
              <div className="service-by-type-item">
              <div className="service-item-image">
                <img src={service.image} alt="" />
              </div>
              <div className="service-item-header">
                <h2>{service.service_name}</h2>
  
                <div className="service-item-header-buttons">
                  <a className="btn btn-outline">Ver Mas</a>{" "}
                  <a className="btn btn-primary service-item-header-button-whatsapp">
                    Agendar
                    <span>
                      <IconWhatsApp size="1.7rem" color="white" />
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
