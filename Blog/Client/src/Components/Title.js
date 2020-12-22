import '../Css/Title.css';
import react from 'react';
function Title(props){
    return(
        <div className="Title">
            <h1>{props.title}</h1>
            <div> <div className="author">{props.author} |</div>{props.tagline}</div>
        </div>
    )
}

export default Title;