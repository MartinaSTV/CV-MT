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
            <nav className='navigation__mobile'>
                <select name="Menu" id="" className='navigation__droplist'>
                    <option  value="Menu">Menu</option>
                    <option onClick = {navigateToAbout } className="navigation__titles" value="">About</option>
                    <option onClick = {navigateToWork } className="navigation__titles" value="">Prevoius Work</option>
                    <option  onClick = {navigateToEducation } className="navigation__titles"value="">Education</option>
                    <option  onClick = {navigateToContacts} className="navigation__titles" value="">Contacts</option>
                </select>
            </nav>
        </section>
    )
}
export default Navbar