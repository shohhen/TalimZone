import "./features.scss";
import image from "../../assets/img/clock.svg";

const Features = () => {
  return (
    <div className=" features main-component" id="features">
      <div className="main-wrapper">
        <div className="features__single ">
          <img src={image} alt="" />
          <h3>Time Saving</h3>
          <p>A Smart Investment in Your Future</p>
        </div>
        <div className="features__single">
          <img src={image} alt="" />
          <h3>Time Saving</h3>
          <p>A Smart Investment in Your Future</p>
        </div>
        <div className="features__single">
          <img src={image} alt="" />
          <h3>Time Saving</h3>
          <p>A Smart Investment in Your Future</p>
        </div>
        <div className="features__single">
          <img src={image} alt="" />
          <h3>Time Saving</h3>
          <p>A Smart Investment in Your Future</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
