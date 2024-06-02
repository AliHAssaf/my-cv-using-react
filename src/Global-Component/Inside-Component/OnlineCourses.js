// watched online courses

function Online(props){
    return(
        <div className="onlineCourses">
            <h3>{props.title} Online Courses</h3>
            <p>{props.content}</p>
            <p>{props.description}</p>
            <p>{props.typeLink}</p>
            <a href={props.link}>{props.link}</a>
        </div>
    )
}

export default Online;