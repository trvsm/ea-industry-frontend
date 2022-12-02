import "./Feature.scss";
import image from "../../assets/images/audi-r8.jpeg";
import { Link } from "react-router-dom";

const Feature = ({ data }) => {
  return (
    <>
      <div className={`feature ${data.reverse && "feature--reverse"}`}>
        <div className="feature__image">
          <img src={image} alt={data.alt} className="feature__img" />
        </div>
        <div className="feature__text">
          <div className={`${data.reverse && "feature__text--reverse"}`}>
            <h2 className="feature__text-title">{data.title}</h2>
            <p className="feature__text-description">{data.description}</p>
            {data.button && (
              <Link className="feature__button" to="/faq">
                {data.buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
