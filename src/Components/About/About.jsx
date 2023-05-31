import './About.scss'
function About(){

    return(
        <section className='about'>
            <article className='about__about'>
                <h4 className='about__title'>Who am I</h4>
                <p className='about__text'>I am currently a student at Jensen YH education in 
                Göteborg. During my education we have worked with java script, html 5, CSS, 
                React etcetera. 
                I am new to the industry but I would like to learn more and develop in this 
                occupation. I got into programming by chance really but it has grown on 
                me and I think it's so fun. I see a future in programming and look forward to learning more 
                and develop in this profession.
                </p>
                <p>Check out my school projects on my github</p>
                <a className='about__link' href="https://github.com/MartinaSTV?tab=repositories">My GitHub Account</a>
            </article>
        </section>
    )
}
export default About