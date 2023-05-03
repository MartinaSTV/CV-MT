import hamburger from '../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './NavBurger.scss'
function NavBurger(){

    const [show, setShow] = useState(false)
    
    function showMenu(){
        setShow(!show)
    }
    const navigate = useNavigate()
    function navigateToAbout(){
        navigate('/')
    }
    function navigateToWork(){
        navigate('/Work') 
    }
    function navigateToEducation(){
        navigate('/Education')
    }
    function navigateToContacts(){
        navigate('/Contact')
    }

    return(
        <section className='NavBurger'>
            <img onClick={ showMenu} src={hamburger} alt="hamburger Icon" className='NavBurger__img'/>
            {show? <nav className='NavBurger__nav'>
                <article onClick={navigateToAbout} className='nav__title'>About Me</article>
                <article onClick={navigateToWork} className='nav__title'>Previous Work</article>
                <article onClick={navigateToEducation} className='nav__title'>Education</article>
                <article onClick={navigateToContacts} className='nav__title'>Contacts</article>
            </nav>: null}
        </section>
    )
}
export default NavBurger