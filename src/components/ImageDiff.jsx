'use client'
import { useRef, useState } from 'react'
import './image-diff.css'


export function ImageDiff({images}) {
  const [value, setValue] = useState(50)

  return (
    <section className="app-slider-carousel-container">
    <div className="carousel-container">
      <div className="slider-container">
        <div className="c-compare item" style={{"--value": `${value}%`}}>
          <img className="c-compare__left" src={images[0]} alt="Color" />
          <img className="c-compare__right" src={images[1]} alt="B/W" />
          <input
            type="range"
            className="c-rng c-compare__range"
            min="0"
            max="100"
            onChange={ (event) => setValue(event.target.value)}
          />
        </div>
    </div>
    </div>
    {/* <div className="arrow arrow-left">
      <svg
        width="100%"
        viewBox="0 0 24 24"
        style={{fill: 'rgba(255, 255, 255, 1)'}}
      >
        <path
          d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
        ></path>
      </svg>
    </div>

    <div className="arrow arrow-right">
      <svg
        width="100%"
        viewBox="0 0 24 24"
        style={{fill: 'rgba(255, 255, 255, 1)'}}
      >
        <path
          d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
        ></path>
      </svg>
    </div> */}
  </section>
  )
}