import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import './Home.scss'
import About from "../../Components/About/About"

function Home(){

    return(
        <section className="home">
            <article className="home__header">
                <Header/>
            </article>
            <article className="home__navbar">
                <Navbar/>
            </article>
            <article className="home__about">
                <About/>
            </article>
        </section>
    )
} 

export default Home