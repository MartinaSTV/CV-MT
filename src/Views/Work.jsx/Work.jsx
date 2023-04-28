import Navbar from "../../Components/Navbar/Navbar"
import './Work.scss'
import work from '../../assets/info.json'
import WorkInfo from "../../Components/WorkInfo/WorkInfo"
import { useState } from "react"

function Work(){

    let [showWork, setshowWork] = useState(false)
    
    function showPreviousWork(){
        setshowWork(!showWork)
    }

    let allWork = work.map((job)=>{
        return <WorkInfo job = { job } key = { job.id}/> 
    })

    return(
        <section className="work">
            <h1 className="work__headline work__title">Work</h1>
            <h4 className="work__headline">Latest</h4>
            <article className="work__summary">
                <h4 className="work__headline">Osteopath</h4>
                <p>Self employed. Martina Osteopath, Lerum. As an osteopath, you work with manual treatment methods to help with various problems such as back pain, etc. As an Osteopath, I have run an individual company. I worked there for the past 6 years. During this time, I have had extra work on the side.</p>
            </article>
            <Navbar/>
            <h4 className="work__headline work__title">Previous Work</h4>
            <article className="work__summary">
                <h4 className="work__headline" >Summary</h4>
                <p>Most of my former workplaces are in various jobs whitin restaurant such as cook, waitress, conference hostess etc. with the exception of some workplaces where i workd on a tomato farm and another where i sold tickets for Västtrafik</p>
                <button onClick = { showPreviousWork } className="work__button">Show Previous Workplaces</button>
                {showWork? allWork: null}
            </article>
        </section>
    )
}
export default Work