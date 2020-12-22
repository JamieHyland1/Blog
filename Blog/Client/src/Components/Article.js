import "../Css/Article.css";
function Article(props){
    return(
        <div className="Article">
          {props.text}
        </div>
    );
}
export default Article;