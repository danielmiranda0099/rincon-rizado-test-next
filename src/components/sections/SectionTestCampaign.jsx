import "./section-test-campaign.css";

export function SectionTest() {
  return (
    <section className="section-contained-lg  test-campaign">
      <h2>
        ¿No sabes cual es el producto ideal para cuidar tus rizos?
      </h2>
{/*
      <div className="test-campaign-cards-container">
        <div className="test-campaign-card campaign-card-left">
          <p>esta es la card con un mensaje que engancha Lorem ipsum  enim necessitatibus dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas illum delectus sapiente.</p>
        </div>
        <div className="test-campaign-card campaign-card-right">
          <p>esta es la card con un mensaje que engancha dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div> */}

      <p className="text-mdx">Respondiendo este test, identificaremos las necesidades especificas de tu cabello
        y te brindaremos una rutina de cuidado completo para lucir un cabello sano, hermoso y radiante
      </p>

      <button className="btn btn-primary">Hacer El Test</button>
    </section>
  );
}
