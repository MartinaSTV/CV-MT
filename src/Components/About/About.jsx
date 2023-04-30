import './About.scss'
function About(){

    return(
        <section className='about'>
            <article className='about__about'>
                <h4 className='about__title'>Who am i</h4>
                <p className='about__text'>I am currently a student at Jensen YH education in Göteborg. During my education we have worked with java script, html 5, CSS, react etcetera. I see a future in programming and look forward to learning more and develop in this profession. I work alongside school as an Osteopath and think it's a fun and rewarding job but programming has grown on me and taken a bigger place in my life lately. Who knew programing was so much fun</p>
                <p>Check out my school projects on my github</p>
                <a className='about__link' href="https://github.com/MartinaSTV?tab=repositories">My GitHub Account</a>
            </article>
        </section>
    )
}
export default About