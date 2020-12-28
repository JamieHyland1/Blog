import { useQuery, gql } from '@apollo/client'
import {Link} from 'react-router-dom';
import '../Css/bootstrap/bootstrap.min.css';
import '../Css/bootstrap/bootstrap-grid.css';
import '../Css/Posts.css';
import temp from '../Images/temp.jpeg';

const GET_POSTS = gql`
    query posts {
        posts{
            _id
            Title
            Tagline
            paragraphs
            tags
            date
        }
}
`;

function Posts(){
    const { loading, error, data } = useQuery(GET_POSTS, {
        pollInterval:500
    });
    if(loading){
        return <div><p>loading...</p></div>
    }
    if(error)return <p>oops...there was an error</p>
    if(!error || !loading){console.log("DATA",data.posts[0])}

    return (
        <div className="container">
            {data.posts.map(post=>{
                return <Link to={        
                    {
                        pathname: "/Post/" + post._id,
                        id:post._id
                    }}>
                    <div className="PostBlock">
                        <div className="postImage">
                        </div>
                        <div key={post._id} className ="col-lg-12 ">
                            <h1>{post.Title}</h1>
                            <hr/>
                            <p>{post.Tagline}</p>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    )
}

export default Posts