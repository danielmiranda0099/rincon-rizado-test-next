import "./section-test-campaign.css";

export function SectionTest() {
  return (
    <section className="section-contained-lg  test-campaign">
      <h2>
        ¿Quieres Hacer Un <span className="bg-pink-100 text-highlight">Test</span> Para Saber Que Tipo De Productos Son Para Ti?
      </h2>

      <div className="test-campaign-cards-container">
        <div className="test-campaign-card campaign-card-left">
          <p>esta es la card con un mensaje que engancha Lorem ipsum  enim necessitatibus dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas illum delectus sapiente.</p>
        </div>
        <div className="test-campaign-card campaign-card-right">
          <p>esta es la card con un mensaje que engancha dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>

      <button className="btn btn-primary">Hacer El Test</button>
    </section>
  );
}
