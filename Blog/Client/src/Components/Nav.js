import '../Css/nav.css';
import '../Css/bootstrap/bootstrap.min.css'
import {TransitionGroup,CSSTransition} from "react-transition-group";
import {Link, Switch, Route, useLocation} from  'react-router-dom';
import {useState} from 'react';
function Nav(){
    
    const [buttonOpen, buttonPressed] = useState(false);
    const [color, checkColor] = useState("#76AFEB");
    return(
        <div className="Nav fixed-top" id="Nav">
            <div className="title"><Link to="/">Jamie Hyland</Link></div>
            <div>
            <div className="icon" onClick={()=>buttonPressed(!buttonOpen)}>&#9776;</div>
                <div className={buttonOpen ? 'mobile fade-in': 'navbar'}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Contact">Contact</Link></li> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;