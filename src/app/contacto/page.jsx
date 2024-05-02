import { IconClock, IconFacebook, IconMap, IconPhone } from "@/components/icons";
import "./styles.css";

export default function page() {
  return (
    <div className="section-contained-sm contact-section-container">
      <div className="contact-info-container margin-bottom-mdx2">
        <div className="contact-info-container-column">
          <div className="contact-info-items-container">
            <h3>Horario</h3>
            <div className="contact-info-item">
              <IconClock size="1.7rem" /> <p>Lunes a Viernes de 9:00 a.m a 6:00 p.m </p>
            </div>
            <div className="contact-info-item">
              <IconClock size="1.7rem" /> <p>Sabado de 9:00 a.m a 3:00 p.m</p>
            </div>
          </div>

          <div className="contact-info-items-container">
            <h3>Contacto</h3>
            <div className="contact-info-item">
              <IconPhone size="1.7rem" /> <p>+57 3008891708</p>
            </div>
            <div className="contact-info-item">
              <IconPhone size="1.7rem" /> <p>+57 3008891708</p>
            </div>
          </div>
        </div>

        <div className="contact-info-container-column">
          <div className="contact-info-items-container">
            <h3>Redes Sociales</h3>
            <div className="contact-info-item">
              <IconFacebook size="1.7rem" />
              <p>@RinconRizado</p>
            </div>
            <div className="contact-info-item">
              <IconFacebook size="1.7rem" />
              <p>@RinconRizado</p>
            </div>
            <div className="contact-info-item">
              <IconFacebook size="1.7rem" />
              <p>@RinconRizado</p>
            </div>
          </div>
          <div className="contact-info-items-container">
            <h3>Dirección</h3>
            <div className="contact-info-item">
              <IconMap size="1.7rem" />
              <p>Centro Comercial Las Palmas</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4703591851153!2d-74.19945872516199!3d11.226768788950693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f51a511c68a3%3A0x7e042fe291c5ff47!2sRinc%C3%B3n%20Rizado!5e0!3m2!1ses-419!2sco!4v1714606205712!5m2!1ses-419!2sco"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
