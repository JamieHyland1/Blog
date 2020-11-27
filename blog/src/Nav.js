import './Css/nav.css';
function Nav(){
    return(
        <div className="Nav">
            <div className="title"><a>Jamie Hyland</a></div>
            <div className="navbar">
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;