import './Header.scss'
import headshot from '../../assets/Martina Tornström-4567 s Bskärd.jpg'
function Header(){

    return(
        <section className="header">
            <img className='header__headshot' src={headshot} alt="Headshot" /> 
            <h4 className='header__textTop'>Hi my name is </h4>
            <h1 className='header__title'>Martina Tornström</h1>
            <h5 className='header__textBottom'>Frontend-developer</h5>
        </section>
    )
}
export default Header