import './WorkInfo.scss'
function WorkInfo(props){
    return(
        <section className="workInfo">
            <h4 className='workInfo__title'>{props.job.title}</h4>
            <p className='workInfo__year'>{props.job.year}</p>
            <p className='workInfo__text'>{props.job.worktitle}</p>
        </section>
    )
}
export default WorkInfo