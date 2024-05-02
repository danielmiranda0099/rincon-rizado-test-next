import "./styles.css";

export default function AllServicesPage() {
  return (
    <section className="section-contained-lg section-all-services-container">
      <div className="services-filter-container"></div>

      <div className="all-services-container">
        <h1>All services</h1>
        <div className="services-by-type-container">

          <div className="service-by-type-item">
            <div className="service-item-image">
              <img src="./images/group.jpg" alt="" />
            </div>
            <div className="service-item-header">
              <h2>Nombre Del Servicio</h2>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, enim tempore. Corrupti, dicta! Ea fugiat vero possimus,
                optio iure totam! Laudantium blanditiis laborum exercitationem
                doloremque?
              </p>

              <div className="service-item-header-buttons">
                <a className="btn btn-primary">Ver Mas</a> <a className="btn btn-primary">Agendar Servicio</a>
              </div>
            </div>
          </div>

          <div className="service-by-type-item">
            <div className="service-item-image">
              <img src="./images/group.jpg" alt="" />
            </div>
            <div className="service-item-header">
              <h2>Nombre Del Servicio</h2>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, enim tempore. Corrupti, dicta! Ea fugiat vero possimus,
                optio iure totam! Laudantium blanditiis laborum exercitationem
                doloremque?
              </p>

              <div className="service-item-header-buttons">
                <a className="btn btn-primary">Ver Mas</a> <a className="btn btn-primary">Agendar Servicio</a>
              </div>
            </div>
          </div>

          <div className="service-by-type-item">
            <div className="service-item-image">
              <img src="./images/group.jpg" alt="" />
            </div>
            <div className="service-item-header">
              <h2>Nombre Del Servicio</h2>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, enim tempore. Corrupti, dicta! Ea fugiat vero possimus,
                optio iure totam! Laudantium blanditiis laborum exercitationem
                doloremque?
              </p>

              <div className="service-item-header-buttons">
                <a className="btn btn-primary">Ver Mas</a> <a className="btn btn-primary">Agendar Servicio</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
