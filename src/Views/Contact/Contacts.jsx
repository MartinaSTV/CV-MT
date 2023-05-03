import Navbar from '../../Components/Navbar/Navbar'
import './Contacts.scss'
import Header from '../../Components/Header/Header'
import NavBurger from '../../Components/Navbar/NavBurger'
function Contact(){

    return(
        <article className='contact'>
             <article className='contact__navBurger'><NavBurger/></article>
            <article className='contact__header'><Header/></article>
            <article className='contact__navbar'><Navbar/></article>
             <h4 className='contact__title'>Contacts</h4>
            <article className='contact__article'>    
                <p>E-Mail: foldermate@hotmail.com</p>
                <p>Mobile: 0704 665 456</p>
            </article>
           
            <article className='contact__article'>
                <p>I live in Lerum with my family, a suburb close to gothenburg.
                   if you have an question or want more details feel free to call or mail me. Have a nice day!</p>
                <p>Best Regards Martina</p>
            </article> 
        </article>  
    )
}
export default Contact