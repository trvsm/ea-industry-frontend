import "./Features.scss";
import FeaturesData from "../../data/FeaturesData.json";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="features">
      <div className="features__wrap">
        {FeaturesData.map((obj) => {
          return <Feature key={obj.id} data={obj} />;
        })}
      </div>
    </div>
  );
};

export default Features;
