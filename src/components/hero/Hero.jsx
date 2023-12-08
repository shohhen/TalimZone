import "./hero.scss";
import image from "../../assets/img/heroimg.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="main-wrapper" id="hero">
      <div className="hero main-component">
        <div className="hero__text">
          <h2>Admission Counselling</h2>
          <span>Platform for </span>
          <span>skill and Learning</span>
          <div className="hero__text-button">
            <AnchorLink>Start Learning</AnchorLink>
            <AnchorLink href="#courses">Explore Courses</AnchorLink>
          </div>
        </div>
        <div className="hero__img">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
