import "./Banner.scss";

export default function Banner({content}) {
  return (
    <div className="banner">
      <span className="banner__text">{content.text}</span>
      <a target={'blank'}
            href={content.target}
            className="banner__cta"
          >{content.button}</a>
    </div>
  );
}
