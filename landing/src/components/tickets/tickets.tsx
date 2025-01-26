import qr from "@assets/qr.svg";
import ticket from "@assets/ticket.png";

import "./tickets.css";

const Tickets = () => {
  return (
    <section className="tickets">
      <div className="left-content">
        <div className="header">
          <span className="logo isotipo">LAREIRA CONF</span>
          <a className="web" href="https://www.lareiraconf.es" target="_blank">
            lareiraconf.es
          </a>
        </div>
        <div className="event-info">
          <span className="event-date">12.05.2025</span>
          <span>|</span>
          <span className="event-place">A Coruña</span>
        </div>

        <div className="ticket-info">
          <div className="ticket-container">
            <h1 className="main-title">¡Entradas a la venta!</h1>
            <img src={ticket} alt="ticket" className="ticket" />
          </div>
          <ul className="features">
            <div className="column">
              <li>🎟️ Acceso al evento completo.</li>
              <li>🎁 Welcome pack.</li>
              <li>🗣️ Más de 10 charlas con ponentes top.</li>
              <li>⏰ 12h de evento non stop.</li>
            </div>
            <div className="column">
              <li>☕ Coffee breaks y comida.</li>
              <li>🎉 Sorteos y merchan.</li>
              <li>💼 Conexión con empresas del sector.</li>
              <li>🎊 ¡Y muchas sorpresas más!</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="qr-container">
        <img src={qr} alt="qr" className="qr" />
        <span>Escanéame para comprar tu entrada</span>
      </div>
    </section>
  );
};

export default Tickets;
