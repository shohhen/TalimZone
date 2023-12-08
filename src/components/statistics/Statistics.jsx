import "./statistics.scss";
import { useEffect, useState } from "react";

const Statistics = ({ finalNumber }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (count < finalNumber) {
          setCount(prevCount => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 100); 
      return () => clearInterval(interval);
  }, [count, finalNumber]);
  return (
    <div className=" statistics main-component" id="statistics">
      <div  className="statistics__block main-wrapper">
        <div className="statistics__block-info">
            <div className="statistics__single">
                <h3>+{count}</h3>
                <p>hours</p>
            </div>
            <div className="statistics__single">
                <h3>+{count}</h3>
                <p>hours</p>
            </div>
            <div className="statistics__single">
                <h3>+5000</h3>
                <p>hours</p>
            </div>
        </div>
        <div className="statistics__block-text">
            <h2>Elevate Your Skills with Skill Up</h2>
            <div>
                <h3>Diverse Course Catalog:</h3>
                <p>Skill Up offers a diverse range of courses covering various subjects and industries, ensuring that you can find the perfect course to meet your learning goals.</p>
            </div>
            <div>
                <h3>Diverse Course Catalog:</h3>
                <p>Skill Up offers a diverse range of courses covering various subjects and industries, ensuring that you can find the perfect course to meet your learning goals.</p>
            </div>
            <div>
                <h3>Diverse Course Catalog:</h3>
                <p>Skill Up offers a diverse range of courses covering various subjects and industries, ensuring that you can find the perfect course to meet your learning goals.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
