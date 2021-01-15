import '../Css/Title.css';
function Title(props){
    return(
        <div className="Title">
            <h1>{props.title}</h1>
           <p>{props.Date}</p>
        </div>
        
    )
}

export default Title;