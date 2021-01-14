import "../Css/Article.css";
function Article(props){
   var text = props.text;
   if(text.includes("<IMAGE>"))text = text.replace("<IMAGE>","");
    return(
        <div className="Article">
          {text}
        </div>
    );
}
export default Article;