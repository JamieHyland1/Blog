import '../Css/bootstrap/bootstrap.min.css';
import '../Css/Footer.css';
import github from '../Images/github.png';
import twitter from '../Images/twitter.png';
import insta from '../Images/insta.png';
function Footer(){
    return(
        <div className="Footer">
            <div className="container Icons">
                <div className="row">
                    <div className="icons">
                        <div className=""><a href="https://www.instagram.com/jambob12/"><div className="insta"></div></a></div>
                        <div className=""><a href="https://twitter.com/KyubIchigo"><div className="twitter"></div></a></div>
                        <div className=""><a href="https://github.com/JamieHyland1"><div className="github"></div></a></div>
                        <div className=""><a href="https://www.linkedin.com/in/jamie-hyland-b31653159/"><div className="linkedin"></div></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;