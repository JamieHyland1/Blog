import '../Css/nav.css';
import '../Css/bootstrap/bootstrap.min.css'
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <div className="Nav fixed-top" id="Nav">
            <div className="title"><Link to="/">Jamie Hyland</Link></div>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;