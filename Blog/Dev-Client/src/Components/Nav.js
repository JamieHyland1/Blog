import '../Css/nav.css';
import '../Css/bootstrap/bootstrap.min.css'
import {Link} from  'react-router-dom';
import {useState} from 'react';
function Nav(){
    
    const [buttonOpen, buttonPressed] = useState(false);
    const navClick = ()=>{
        buttonPressed(false);
    }
    return(
        <div className="Nav fixed-top" id="Nav">
            <div className="title"><Link to="/">Jamie Hyland</Link></div>
            <div>
            <div className="icon" onClick={()=>buttonPressed(!buttonOpen)}>&#9776;</div>
                <div className={buttonOpen ? 'mobile fade-in': 'navbar'}>
                    <ul>
                        <li><Link to="/" onClick={navClick}>Home</Link></li>
                        <li><Link to="/Blog" onClick={navClick}>Blog</Link></li>
                        <li><Link to="/Contact" onClick={navClick}>Contact</Link></li> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;