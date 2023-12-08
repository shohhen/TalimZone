import "./header.scss";
import image from "../../assets/img/logo1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__logo">
        <img src={image} alt="" />
        {/* <h2>Adminssion Counselling</h2> */}
      </div>
      <nav className="navbar">
        <li>
          <AnchorLink href="#hero">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#courses">Courses</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#features">Features</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#testimonials">Testimonials</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#faq">FAQ</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
