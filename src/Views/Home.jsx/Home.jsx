import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import './Home.scss'
import About from "../../Components/About/About"
import NavBurger from "../../Components/Navbar/NavBurger"

function Home(){

    return(
        <section className="home">
            <article className="home__navBurger"><NavBurger/></article>
            <article className="home__header">
                <Header/>
            </article>
            <article className="home__navbar">
                <Navbar/>
            </article>
            <article className="home__about">
                <h4 className="home__title">About me</h4>
                <About/>
            </article>
        </section>
    )
} 

export default Home