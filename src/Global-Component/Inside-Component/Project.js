// University Projects

function Project(props){
    return(
        <div>
            <p>{props.history}</p>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <a href={props.link}>{props.link}</a>
        </div>
    )
}

export default Project;