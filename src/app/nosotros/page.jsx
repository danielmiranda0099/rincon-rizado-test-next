import "./styles.css";
export default function NosotrosPage() {
  return (
    <section className="section-contained-lg aboutus-container">
      <div className="our-history-container">
        <div className="our-history-content-container">
          <h2>Nuestra Historia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            doloribus architecto sint iusto deserunt dicta blanditiis quia
            explicabo eos, dolore atque sequi repellat aperiam odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            doloribus architecto sint iusto.
          </p>

          <div className="our-history-content-gallery">
            <div className="our-history-content-gallery-item">
              <img src="./images/group.jpg" alt="" />
              <img src="./images/group2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="our-history-line-time-container">
          <div className="our-history-line-time-item">
            <p className="line-time-year">2010</p>
            <div className="our-history-line-time-content">
              <h2>Nuestro Inicio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo consequuntur sapiente ratione temporibus? Dignissimos,
                incidunt.
              </p>

              <div className="our-history-gallery">
                <img src="./images/group.jpg" alt="" />
                <img src="./images/group2.jpg" alt="" />
                <img src="./images/group3.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="our-history-line-time-item">
            <p className="line-time-year">2010</p>
            <div className="our-history-line-time-content">
              <h2>Nuestro Inicio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo consequuntur sapiente ratione temporibus? Dignissimos,
                incidunt.
              </p>

              <div className="our-history-gallery">
                <img src="./images/group.jpg" alt="" />
                <img src="./images/group2.jpg" alt="" />
                <img src="./images/group3.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="line-time"></div>
        </div>
      </div>
    </section>
  );
}
