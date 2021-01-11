import React from 'react';
import Nav from './Nav';
import '../Css/bootstrap/bootstrap.min.css';
import '../Css/bootstrap/bootstrap-grid.css';
import '../Css/Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            border:null,
            red: "#EB746C",
            blue:  "#76AFEB"
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        document.getElementById('Nav').style.backgroundColor = this.state.blue;
        if(this.state.border == null){
            var b = document.getElementById('Timeline').offsetTop;
            this.setState({border : b});
        }
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        var nav = document.getElementById('Nav');
        
        if(window.scrollY >= this.state.border){
            nav.style.backgroundColor = this.state.red; 
        }else{
            nav.style.backgroundColor = this.state.blue;
        }
        if(window.screen.width < 600){
            var mobile = document.getElementById("icon")
            if(window.scrollY >= this.state.border){
                // mobile.style.backgroundColor = this.state.red; 
                console.log("red")
            }else{
                // mobile.style.backgroundColor = this.state.blue;
                console.log("blue");
            }
        }
      
    }
    render(){
        return(
            <div>
            <div className="Banner" id="banner"> 
                <div className="BannerText">Jamie Hyland</div>
                <div className="BannerTagline">Software Developer</div>
            </div>
            <div className="Home container">
                <div className="row About">
                <div className="AboutImage col-lg-4 col-md-6 col-sm-12"></div>
                <div className="AboutContent  col-lg-8 col-md-6 col-sm-12">
                    <div>
                        Hi there I'm Jamie Hyland a Software engineer from Dublin Ireland. 
                        Thanks for visiting my site! The purpose of this site is to tell you a little bit about my self, my education, skills and hobbies. 
                        I find that CV's can be a little lacking in conveying a person fully so hopefully this website will give you the full an idea of who I am! 
                        I am skilled in the areas of Web Development with my final year Project in IADT and my third Year project both consisting of web based apps that utilized real time streaming using websockets and front end frameworks like React.js. 
                        I have worked for companies like Logitech, where I worked on a small team with designers and 3D modellers to incoorporate Logitechs brand of wireless speakers with AR/VR experiences using the Unity Game Engine. 
                        In my third year of DCU I worked in SAP Dublins design team which focues on open source technologies on a small proof of concept called Smart Collab, a web based application that was made to improve business meetings using WebRTC, Socket.io and Angularjs. 
                        My main role was implementing UI/UX changes by the design team, incorporating core features into the systems backend and implementing key bug fixes to get the application ready for its alpha launch. 
                        In my final Year of studying in DCU I tutored two different modules Computability and Complexity and Web Design. 
                    </div>
                </div>
                </div>
            
                <div className="row HobbyBanner"><div className="TimeLineText">My Hobbies</div></div>
            
                <div className="row Hobbies">
                    <div className="Hobby col-lg-4 col-md-12 col-sm-12">
                        <div className="Code"></div>
                        <h3>Code</h3>
                        <div className="HobbyText">
                            I love anything related to code, its usually at the core of all my other hobbies. 
                            I love learning new languages, and new ways to complete tasks effeciently. My favorite languages are JavaScript and C#! 
                            You can check out any of the work I do on my github <a href="https://github.com/JamieHyland1">here</a>.
                        </div>
                    </div>
                    <div className="Hobby col-lg-4 col-md-12 col-sm-12">
                        <div className="Games"></div>
                        <h3>Games</h3>
                        <div className="HobbyText">
                            Gaming is the original inspiration for me learning programming! It's something I one day hope to find a career in! 
                            Until then, however, I like to compete in various game jams, you can play those games <a href="https://jambohylando.itch.io/">here</a> and read about my dev process on my blog section!
                        </div>
                    </div>
                    <div className="Hobby col-lg-4 col-md-12 col-sm-12">
                        <div className="Art"></div>
                        <h3>Art</h3>
                        <div className="HobbyText">
                            Creative coding became my outlet to explore how to make art and to further my knowledge of programming through visualizing certain algorithims and just experimenting.
                            I mainly use Processing, a java based framework and P5.js the web version of Processing you can find my webart <a href="https://www.openprocessing.org/user/215362">here</a> and some of my processing sketches on my github!
                        </div>
                    </div>
                </div>
            
                <div className="row TimeLine" id="Timeline"><div className="col-lg-12 col-md-12 col-sm-12 TimeLineText">My TimeLine</div></div>
            
                <div className="row Arrow"></div>
            
                <div className="row IADT" id="IADT">
                    
                    <div className="row CollegeTitle">2014-2017</div>
                    <div className="row CollegeContent">
                        <div className="Column col-lg-4 col-md-12 col-sm-12">
                            <h3>How it started</h3>
                            <hr/>
                            <div className="text">
                                In 2014 I started studying IADT's Creative Computing Course.
                                This course taught me the basics of programming, and focused on using code in many creative mediums from web apps to java C.R.U.D apps to android applications and games built in Unity. 
                                To that end I also studied the basics of web design, typography, data visualization 3D modelling and how to use 
                                the various tools in the Adobe Creative suite. This gave me a unique insight into the many aspects of developing software, not just how software was developed with code but how it was designed to function.
                            </div>
                        </div>
                        <div className="Column CollegeDegree  col-lg-4 col-md-12 col-sm-12"> </div>
                        <div className="Column  col-lg-4 col-md-12 col-sm-12">
                            <h3>My outcomes</h3>
                            <hr></hr>
                            <div className="text">
                                This course was heavily focused on practical projects. 
                                My most notable project was my third year project where I built a real time streaming stock watch app that would allow users to see stocks they traded change in real time, 
                                the tech stack was Node.js, bootsrap, socket.io and d3.js. I also took part in a research project between IADT and Logitech in which I worked on a small team of 3D modellers
                                visual communication designers and software engineers on how to incorporate AR/VR wtih logitechs line of bluetooth speakers.
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="row Arrow"></div>
            
                <div className="row DCU">
                    <div className="row CollegeTitle">2017-2020</div>
                    <div className="row CollegeContent">
                        <div className="Column col-lg-4 col-md-12 col-sm-12">
                            <h3>How it started</h3>
                            <hr/>
                            <div className="text">
                            In 2017 I transferred into DCU's Computer Applications & Software Engineering program in order to further improve my programming skills 
                            by focusing on the more theoretical aspects of Computer Science. I further improved my knowledge of Algorithims & Data Structures and learned low level
                            programming with Assembly and C. This was greatly benificial to me in preparing myself for developing software in the industry. In my Third year I also undertook a 5 month internship
                            where I gained key insight into how software is designed, specced, developed and maintained, by working in an agile environment.
                            </div>
                        </div>
                        <div className="Column CollegeDegree DCU  col-lg-4 col-md-12 col-sm-12"> </div>
                        <div className="Column  col-lg-4 col-md-12 col-sm-12">
                            <h3>My outcomes</h3>
                            <hr></hr>
                            <div className="text">
                                My time at DCU was invaluable to me as someone trying to further their Software Development skills.
                                Through it internship program I gained key insight into how software is developed in the industry. 
                                My introduction to lower level programming in Assembly and C taught me about memory managment and made me a safer programmer overall. 
                                I was also introduced to other aspects of programming which were foreign to me such as Genetic Algorithims, Graphics Programming, Concurrency & Multithreading. 
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="row Arrow"></div>
            
                <div className="row DCU">
                    <div className="row CollegeTitle">Present</div>
                    <div className="row CollegeContent">
                        <div className="Column col-lg-4 col-md-12 col-sm-12">
                            <h3>What now?</h3>
                            <hr/>
                            <div className="text">
                                Well right now I'm currently looking for work, I have interests in web developement (this website was designed and built by me in React ;)..) and game development.
                                I'm also profficient in Java, C# and javascript.
                                Until I find work however, I'm going to be working on some projects I've been wanting to pursue but didn't have time for due to college. 
                                You can keep up to date with those various projects on the blog section of this website!
                            </div>
                        </div>
                        <div className="Column Present  col-lg-4 col-md-12 col-sm-12"> </div>
                        <div className="Column  col-lg-4 col-md-12 col-sm-12">
                            <h3>My Hopes</h3>
                            <hr></hr>
                            <div className="text">
                                My hopes is that this website gives you a better insight into who I am that a normal CV wouldn't if you're a recruiter! 
                                (Also, if you are thanks for reading this!) If you aren't a recruiter, I hope this website gives you some inspiration to work on your own projects.
                                I definitely find it hard to stay motivated at times, this website was my way of keeping my accountable for my projects so I hope you do too!    
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>  
        );
    }
}

export default Home;