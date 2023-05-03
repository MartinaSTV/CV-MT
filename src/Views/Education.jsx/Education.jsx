import Navbar from '../../Components/Navbar/Navbar'
import './education.scss'
import Header from '../../Components/Header/Header'
import NavBurger from '../../Components/Navbar/NavBurger'
function Education(){

    return(
        <section className="education">
            <article><NavBurger/></article>
            <article className='education__header'>
                <Header/>
            </article>
             <article className='education__navbar'>
                <Navbar/>
            </article>
            <h1 className="education__title">Education</h1>
            <article className='education__top'>
                <h4 className='education__headline'>Latest</h4>
                <p>Jensen Education - <span className='education__kursiv'>Ongoing</span></p>
                <p className='education__text'>Frontend-developer 2022-2024</p>
                <p>2 year education at Jensen Education in Göteborg. During our eduction we worked with Java script, CSS, HTML 5, React, figma etcetera.</p>
            </article>
           
            <article className='education__previous'>
                <h4 className='education__title'>Previous Educations</h4>
                <section className='education__top'>
                    <p>Skandinaviska osteopathögskolan <span className='education__kursiv'>2013-2017</span></p>
                    <p>Bsc, DO Osteopath</p>
                    <p>what does an osteopath do? read more on osteopatförbundet webpage</p>
                    <a className='education__link' href="https://www.osteopatforbundet.se/om-osteopati/"> Osteopatförbundet</a>
                </section>
                <section className='education__top'>
                    <p>Burgårdensgymnasium <span className='education__kursiv'>2001-2004</span></p>
                    <p>Hotel & Restaurant</p>
                    <p>Chef</p>
                </section>
            </article>
        </section>
    )
}
export default Education