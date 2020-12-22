import '../Css/Post.css'
import React from 'react';
import Title from './Title';
import Article from './Article';
import image from '../Images/web.jpg';
import temp from '../Images/temp.jpeg';
class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title : "",
            author : "",
            tagline : "",
            articles : []
        } 
    }
    componentDidMount(){
        this.setState({
            title : this.props.obj.title,
            author : this.props.obj.author,
            tagline : this.props.obj.tagline,
            articles : this.props.obj.articles
        });
    }
    render(){
        if(this.state.articles == undefined){
            return(<div>no posts DX</div>)
        }else{
        return(
            <div className="Post">
                <div className="HeaderImage"><img src={image} alt="header image" /></div>
                <div className="titleDiv"><Title title={this.state.title} author={this.state.author} tagline={this.state.tagline}/></div>
                {this.state.articles.map(articleText =>(
                    <div>
                        <br></br>
                        <Article text={articleText}/>
                        <br></br>
                        <div className="temp"><img src={temp}/></div>
                    </div>
                ))}
            </div>
        );}
    }
}
export default Post;