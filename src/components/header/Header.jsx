import "./header.scss";
import image from "/img/logo2.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Sidebar from "../menu/Menu";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header " id="header">
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
            <AnchorLink href="#faq">FAQ</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </nav>

          <Sidebar
            className="sidebar"
            pageWrapId="page-wrap"
            outerContainerId="outer-container"
          />
      </header>
    </>
  );
};

export default Header;
