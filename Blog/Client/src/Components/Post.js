import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import '../Css/bootstrap/bootstrap.min.css';
import '../Css/bootstrap/bootstrap-grid.css';
import '../Css/Post.css';
import React from 'react';
import Title from './Title';
import Article from './Article';
import image from '../Images/web.jpg';
import temp from '../Images/temp.jpeg';



const GET_POST = gql`
query Query($postId: ObjectId!) {
  post(_id: $postId) {
    Title
    Tagline
    date
    paragraphs
    tags
    _id
  }
}
`;

function Post(){
  var {id} = useParams();
  console.log(id)
    const {loading, err, data} = useQuery(GET_POST,{
        variables: {postId: id},
        pollInterval:1500,
    });
    if(loading)return<p>loading....</p>
    if(err)return<p>error.... :(</p>;
    if(!err && !loading)console.log("DATA",data)
    return (
          <div className="container">
            <div className="Post col-lg-12">
            <div className="HeaderImage"><img src={image} alt="header image" /></div>
            <div className="titleDiv"><Title title={data.post.Title} author={data.post.date} tagline={data.post.Tagline}/></div>
            {data.post.paragraphs.map(articleText =>(
                    <div>
                        <br></br>
                        <Article text={articleText}/>
                        <br></br>
                        <div className="temp"><img src={temp}/></div>
                    </div>
                ))}
                </div>
            </div>
    );

}








// class Post extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             title : "",
//             author : "",
//             tagline : "",
//             articles : []
//         } 
//     }
//     componentDidMount(){
//         this.setState({
//             title : this.props.obj.title,
//             author : this.props.obj.author,
//             tagline : this.props.obj.tagline,
//             articles : this.props.obj.articles
//         });
//     }
//     render(){
//         if(this.state.articles == undefined){
//             return(<div>no posts DX</div>)
//         }else{
//         return(
//             <div className="Post">
//                 <div className="HeaderImage"><img src={image} alt="header image" /></div>
//                 <div className="titleDiv"><Title title={this.state.title} author={this.state.author} tagline={this.state.tagline}/></div>
//                 {this.state.articles.map(articleText =>(
//                     <div>
//                         <br></br>
//                         <Article text={articleText}/>
//                         <br></br>
//                         <div className="temp"><img src={temp}/></div>
//                     </div>
//                 ))}
//             </div>
//         );}
//     }
// }
export default Post;