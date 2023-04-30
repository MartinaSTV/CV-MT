import './Navbar.scss'
import { useNavigate } from 'react-router-dom'
import hamburger from '../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg'

function Navbar(){ 

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
    
    function getValue(e){
       let option = e.target.value

       if (option === 'About'){
        navigate('/')
       }
       if (option === 'Prevoius Work'){
        navigate('/Work')
       }
       if(option === 'Education'){
        navigate('/Education')
       }
       if (option === 'Contacts'){
        navigate('/Contact')
       }
       if (option === ''){
       }
    }

    return(
        <section className="navigation">
            <nav className="navigation__nav">
                <h1 onClick = { navigateToAbout } className="navigation__titles">About</h1>
                <h1 onClick = {navigateToWork } className="navigation__titles">Previous Work</h1>
                <h1 onClick = {navigateToEducation } className="navigation__titles">Education</h1>
                <h1 onClick = {navigateToContacts} className="navigation__titles">Contacts</h1>
            </nav>
            <nav className='navigation__mobile'>
                <select name="Menu" id="Menu" className='navigation__droplist' onChange={ getValue }>
                    <option  value="Menu" className='navigation__titles option'>Menu</option>
                    <option className="navigation__titles option" value="About">About</option>
                    <option className="navigation__titles option" value="Prevoius Work">Previous Work</option>
                    <option  className="navigation__titles option"value="Education">Education</option>
                    <option  className="navigation__titles option" value="Contacts">Contacts</option>
                </select>
            </nav>
        </section>
    )
}
export default Navbar