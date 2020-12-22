import React from 'react';
import '../Css/bootstrap/bootstrap.min.css';
import '../Css/Contact.css';
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {navColor:"#EB746C"}
        this.copyEmail = this.copyEmail.bind(this);
    }
    componentDidMount(){
        var nav = document.getElementById('Nav');
        nav.style.backgroundColor = this.state.navColor;
    }
    copyEmail(){
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = "Jamiehyland01@gmail.com";
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        var sp = document.getElementById('email');
        sp.innerHTML="Copied to clipboard!";
    }
    render(){
        return(
            <div className="container Contact">
                <div className="row">
                    <div className=" col-lg-12 col-md-12 col-sm-12">
                        <div className="ContactHeader">How to contact me!</div>
                    </div>
                </div>
                <div className="row"> 
                    <div className=" Text">If you'd to contact me for job opportunities or to inquire about any projects I'm working on you can contact me via my Email by clicking the button below to copy my email address to your clipboard. Alternatively you can follow me on various social media outlets, listed below in the footer! </div>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="ContactEmail col-lg-3 col-md-12 col-sm-12" id="email"onClick={this.copyEmail}>Email <span id="confirmation"></span></div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        );
    }
}
export default Contact;