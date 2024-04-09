import { IconCheck } from "../icons";
import "./section-training.css";

export function SectionTraining() {
  return (
    <section className="section-contained-lg  training-course">
      <h2>¿Quieres Aprender Para Saber Como <span className="text-highlight text-bg-yellow">Cuidar</span> De Tu Cabello Rizado?</h2>
      <p>
        Parrafo alternativo, no es necesario, Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Optio commodi.
      </p>

      <div className="training-course-body">
        <div className="training-course-image">
        <img src="images/training-course.png" alt="" />
        </div>
        <div className="training-course-content">
         <div className="training-course-items">
          <span><IconCheck /> Asesoramiento 24/7</span>
          <span><IconCheck /> Horario Flexible</span>
          <span><IconCheck /> 100 Horas De Aprendizaje</span>
          <span><IconCheck /> Teoaria y practica</span>
          <span><IconCheck /> Practicas Reales en el salon</span>
         </div>

          <button className="btn btn-primary">Contactate Para Saber Mas</button>
        </div>
      </div>
    </section>
  );
}
