import '../Css/bootstrap/bootstrap.min.css';
import '../Css/Footer.css';

function Footer(){
    return(
        <div className="Footer">
            <div className="container Icons">
                <div className="row">
                    <div className="icons">
                        <div className=""><a href="https://www.instagram.com/jambob12/" target="_blank" rel="noopener noreferrer"><div className="insta"></div></a></div>
                        <div className=""><a href="https://twitter.com/KyubIchigo" target="_blank" rel="noopener noreferrer"><div className="twitter"></div></a></div>
                        <div className=""><a href="https://github.com/JamieHyland1" target="_blank" rel="noopener noreferrer"><div className="github"></div></a></div>
                        <div className=""><a href="https://www.linkedin.com/in/jamie-hyland-b31653159/" target="_blank" rel="noopener noreferrer"><div className="linkedin"></div></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;