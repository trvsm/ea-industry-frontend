import "./Feature.scss";
// import image from "../../assets/images/audi-r8.jpeg";
import img1 from "../../assets/images/ea-convention.png";
import img2 from "../../assets/images/app-dashboard.png";
import img3 from "../../assets/images/airplane.png";
import img4 from "../../assets/images/speed.png";
import img5 from "../../assets/images/catalogue.png";
import { Link } from "react-router-dom";

const Feature = ({ data }) => {
  console.log(data.image);
  const imgObj = [
    {
      id: "one",
      img: img1,
    },
    {
      id: "two",
      img: img2,
    },
    {
      id: "three",
      img: img3,
    },
    {
      id: "four",
      img: img4,
    },
    {
      id: "five",
      img: img5,
    },
  ];

  const getImg = (id) => {
    const obj = imgObj.find((img) => img.id === id);
    return obj.img;
  };

  return (
    <>
      <div className={`feature ${data.reverse && "feature--reverse"}`}>
        <div className="feature__image">
          <img src={getImg(data.id)} alt={data.alt} className="feature__img" />
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
