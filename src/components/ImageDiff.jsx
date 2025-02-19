"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import "./image-diff.css";

const TwoUpElement = dynamic(() => import("two-up-element"), { ssr: false });

export function ImageDiff({ images }) {
  useEffect(() => {
    import("two-up-element").then((module) => {
      // Asegúrate de que el componente se registra correctamente
      customElements.define("two-up", module.default);
    });
  }, []);

  return (
    <section className="app-slider-carousel-container">
      <div className="carousel-container">
        <div className="slider-container">
          <two-up>
            <div className="item">
              <img className="c-compare__left" src={images[0]} alt="Color" />
            </div>
            <div className="item">
              <img className="c-compare__right" src={images[1]} alt="B/W" />
            </div>
          </two-up>
        </div>
      </div>
    </section>
  );
}