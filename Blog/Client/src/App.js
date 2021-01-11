import React from 'react';
import "react-router-dom/";
import Nav from './Components/Nav';
import Post from './Components/Post';
import Footer from './Components/Footer';
import Home from './Components/Home'
import Contact from './Components/Contact';
import Posts from './Components/Posts';
import {Switch, Route, useLocation} from  'react-router-dom';
function App (){
  return (
    <div>
        <div>
        <Nav/>       
        </div>
            <Switch>
                <Route exact path="/contact" children={<Contact/>}/>
                <Route exact path="/" children={<Home/>}/>
                <Route exact path="/Blog" children={<Posts/>}/>
                <Route exact path="/Post/:id" children={<Post/>}/>
            </Switch>
      <Footer/>
    </div>
  )
}

export default App;
