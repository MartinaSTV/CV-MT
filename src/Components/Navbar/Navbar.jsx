import './Navbar.scss'
import { useNavigate } from 'react-router-dom'

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

    return(
        <section className="navigation">
            <nav className="navigation__nav">
                <h1 onClick = { navigateToAbout } className="navigation__titles">About</h1>
                <h1 onClick = {navigateToWork } className="navigation__titles">Previous Work</h1>
                <h1 onClick = {navigateToEducation } className="navigation__titles">Education</h1>
                <h1 onClick = {navigateToContacts} className="navigation__titles">Contacts</h1>
            </nav>
        </section>
    )
}
export default Navbar