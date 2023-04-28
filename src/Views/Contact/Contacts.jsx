import Navbar from '../../Components/Navbar/Navbar'
import './Contacts.scss'
function Contact(){

    return(
        <article className='contact'>
             <h4 className='contact__title'>Contacts</h4>
            <article className='contact__article'>    
                <p>Mail: foldermate@hotmail.com</p>
                <p>Mobile: 0704 665 456</p>
            </article>
            <Navbar/>  
            <article className='contact__article'>
                <p>I live in Lerum, a suburb close to gothenburg. If you have an question or want more details feel free to call or mail me. Have a nice day!</p>
                <p>Best Regards Martina</p>
            </article> 
        </article>  
    )
}
export default Contact