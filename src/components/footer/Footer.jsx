import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer main-wrapper">
      <div className="footer__info main-component">
        <div className="footer__info-text">
          <h2>do you need more information?</h2>
          <p>
            Connect with us today. Our dedicated experts are here to provide you
            with exceptional support and prompt responses.
          </p>
        </div>
        <div className="footer__info-contacts">
          <div>
            <img src="../../../src/assets/img/envelope.svg" alt="" />
            <Link to="mailto:karimberganoff@gmail.com">
              Karmberganoff@gmail.com
            </Link>
          </div>
          <div>
            <img src="../../../src/assets/img/phone-ringing.svg" alt="" />
            <Link to="tel:998909039002">+998991234567</Link>
            
          </div>

          <Link className="support">connect to support</Link>
        </div>
        <div className="promo"><h3>Made By <Link className="arctiq" target='_blank' to='https://arctiq.uz'>Arctiq</Link></h3></div>
      </div>

      <div className="footer__info-social main-component">
        <div>
            <img src="../../../src/assets/img/logo3.svg" alt="" />
            <h2>Admission Counselling</h2>
        </div>
        <div>
            <p>Follow us on social media    |  </p>
            <Link><img src="../../../src/assets/img/instagram.svg" alt="" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
