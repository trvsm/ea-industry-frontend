import './CallToAction.scss'

export default function CallToAction(){
    return(

        <div className="cta">
      <span className="cta__copy">What are you waiting for? Try out our new and improved app now!</span>
      <a href="https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe"
      target={'blank'}
      className='cta__button'>Download the EA App</a>
    </div>
      )
}