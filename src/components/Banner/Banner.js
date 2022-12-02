import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <p className="banner__text">
        The EA App is replacing Origin. Download now to recieve your free game,
        on us and start playing now!
      </p>
      <a target={'blank'}
            href="https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe"
            className="banner__cta"
          >Download</a>
    </div>
  );
}
