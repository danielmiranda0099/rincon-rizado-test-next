import { IconCheck } from "../icons";
import "./section-training.css";

export function SectionTraining() {
  return (
    <section className="section-contained-lg  training-course">
      <h2>¿Quieres Aprender Para Saber Como <span className="text-highlight bg-purple-100">Cuidar</span> De Tu Cabello Rizado?</h2>
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
          <span><IconCheck size="2.5rem" color="#bc9fd3" /> Asesoramiento 24/7</span>
          <span><IconCheck size="2.5rem" color="#bc9fd3" /> Horario Flexible</span>
          <span><IconCheck size="2.5rem" color="#bc9fd3" /> 100 Horas De Aprendizaje</span>
          <span><IconCheck size="2.5rem" color="#bc9fd3" /> Teoaria y practica</span>
          <span><IconCheck size="2.5rem" color="#bc9fd3" /> Practicas Reales en el salon</span>
         </div>

          <button className="btn btn-primary">Contactate Para Saber Mas</button>
        </div>
      </div>
    </section>
  );
}
