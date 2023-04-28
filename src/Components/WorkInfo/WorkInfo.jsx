
function WorkInfo(props){
    return(
        <section className="workInfo">
            <h4>{props.job.title}</h4>
            <p>{props.job.year}</p>
            <p>{props.job.worktitle}</p>
        </section>
    )
}
export default WorkInfo