import React from 'react';
import Nav from './Components/Nav';
import Post from './Components/Post';
import Footer from './Components/Footer';
import Home from './Components/Home'
import Contact from './Components/Contact';

import {BrowserRouter, Switch, Route} from  'react-router-dom';
var obj = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex nisl, condimentum a nunc vel, suscipit pretium ipsum.",
  author: "Jamie Hyland",
  tagline: "Aenean lacinia tempor laoreet. Fusce bibendum leo in justo ultrices scelerisque",
  articles : ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex nisl, condimentum a nunc vel, suscipit pretium ipsum. Proin ut nunc eros. Aenean lacinia tempor laoreet. Fusce bibendum leo in justo ultrices scelerisque. Donec nisi orci, consequat eget ornare at, lacinia id nulla. Pellentesque nisi ex, eleifend eu velit eget, euismod sollicitudin ante. Maecenas eget erat sit amet elit congue pellentesque. Donec tempus est erat, nec scelerisque arcu consectetur et. Sed fringilla sem dapibus diam laoreet fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ac lacus vitae nisl laoreet vulputate id non turpis. In quis imperdiet quam. Curabitur et pharetra ante. Vestibulum venenatis orci sit amet erat volutpat ultrices. Sed imperdiet magna a purus tristique, pellentesque elementum enim bibendum. Integer tristique eleifend ex, et lobortis quam scelerisque at. Proin dapibus libero at arcu iaculis, quis tempus nisl blandit. Sed placerat sed velit ac congue. Curabitur lorem nisi, tempor eget pellentesque sit amet, molestie sed urna. Vestibulum venenatis nec diam laoreet rhoncus. Nullam maximus nunc velit, a aliquet nulla bibendum nec. Etiam leo mauris, bibendum vel elit eget, commodo hendrerit ipsum. In bibendum eros et ultricies ullamcorper. Mauris at velit molestie, posuere ipsum quis, rutrum diam. Aenean at purus eu odio lacinia tempus. Pellentesque fringilla tellus ornare, egestas leo id, efficitur nulla. Vivamus ac eros id lorem rutrum porta. Praesent tincidunt, nulla eget imperdiet suscipit, risus mauris commodo dolor, at blandit est lorem et sem. Cras sodales ultrices ipsum sed vestibulum. Nullam consectetur enim nisi, nec convallis risus volutpat ut. Maecenas euismod sit amet elit ac ornare. Donec eget enim molestie nunc sagittis tincidunt quis in dolor. Curabitur cursus aliquam dui. Praesent hendrerit, urna at laoreet condimentum, magna ipsum iaculis turpis, non suscipit lectus libero at metus. Vestibulum sed ultrices justo, non euismod lorem. Vivamus pretium non purus vel malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porttitor tristique sapien, ut facilisis elit cursus ac. Proin lacinia gravida urna, a egestas enim auctor quis. Vestibulum urna diam, varius at consectetur et, dignissim at nulla. Donec eget nisi sed quam ullamcorper ultricies sit amet et augue. Curabitur a mollis urna. Aliquam rutrum at mi ut condimentum. Sed fringilla commodo scelerisque. Nulla pharetra nec diam vitae commodo. Vivamus dolor metus, mattis in vestibulum ac, finibus id turpis. Sed auctor lectus a sapien auctor eleifend. Pellentesque ullamcorper neque non ultrices convallis. In vitae laoreet mauris. Sed vel ex felis. Nunc congue eros risus, quis pretium magna venenatis vehicula. Pellentesque pulvinar, quam in pulvinar malesuada, quam sapien bibendum neque, congue iaculis diam nibh nec nunc. Cras pretium scelerisque varius. Donec justo felis, gravida vel urna a, vehicula laoreet arcu. Vestibulum libero sem, eleifend nec sollicitudin eget, blandit aliquet neque. Suspendisse ligula tortor, iaculis sed auctor in, ornare vel dui. Integer congue convallis arcu quis elementum. Phasellus posuere ultricies ex non dictum. Maecenas iaculis libero sit amet mollis dictum. Donec in felis semper, fringilla nibh et, posuere risus.","  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex nisl, condimentum a nunc vel, suscipit pretium ipsum. Proin ut nunc eros. Aenean lacinia tempor laoreet. Fusce bibendum leo in justo ultrices scelerisque. Donec nisi orci, consequat eget ornare at, lacinia id nulla. Pellentesque nisi ex, eleifend eu velit eget, euismod sollicitudin ante. Maecenas eget erat sit amet elit congue pellentesque. Donec tempus est erat, nec scelerisque arcu consectetur et. Sed fringilla sem dapibus diam laoreet fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ac lacus vitae nisl laoreet vulputate id non turpis. In quis imperdiet quam. Curabitur et pharetra ante. Vestibulum venenatis orci sit amet erat volutpat ultrices. Sed imperdiet magna a purus tristique, pellentesque elementum enim bibendum. Integer tristique eleifend ex, et lobortis quam scelerisque at. Proin dapibus libero at arcu iaculis, quis tempus nisl blandit. Sed placerat sed velit ac congue. Curabitur lorem nisi, tempor eget pellentesque sit amet, molestie sed urna. Vestibulum venenatis nec diam laoreet rhoncus. Nullam maximus nunc velit, a aliquet nulla bibendum nec. Etiam leo mauris, bibendum vel elit eget, commodo hendrerit ipsum. In bibendum eros et ultricies ullamcorper. Mauris at velit molestie, posuere ipsum quis, rutrum diam. Aenean at purus eu odio lacinia tempus. Pellentesque fringilla tellus ornare, egestas leo id, efficitur nulla. Vivamus ac eros id lorem rutrum porta. Praesent tincidunt, nulla eget imperdiet suscipit, risus mauris commodo dolor, at blandit est lorem et sem. Cras sodales ultrices ipsum sed vestibulum. Nullam consectetur enim nisi, nec convallis risus volutpat ut. Maecenas euismod sit amet elit ac ornare. Donec eget enim molestie nunc sagittis tincidunt quis in dolor. Curabitur cursus aliquam dui. Praesent hendrerit, urna at laoreet condimentum, magna ipsum iaculis turpis, non suscipit lectus libero at metus. Vestibulum sed ultrices justo, non euismod lorem. Vivamus pretium non purus vel malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porttitor tristique sapien, ut facilisis elit cursus ac. Proin lacinia gravida urna, a egestas enim auctor quis. Vestibulum urna diam, varius at consectetur et, dignissim at nulla. Donec eget nisi sed quam ullamcorper ultricies sit amet et augue. Curabitur a mollis urna. Aliquam rutrum at mi ut condimentum. Sed fringilla commodo scelerisque. Nulla pharetra nec diam vitae commodo. Vivamus dolor metus, mattis in vestibulum ac, finibus id turpis. Sed auctor lectus a sapien auctor eleifend. Pellentesque ullamcorper neque non ultrices convallis. In vitae laoreet mauris. Sed vel ex felis. Nunc congue eros risus, quis pretium magna venenatis vehicula. Pellentesque pulvinar, quam in pulvinar malesuada, quam sapien bibendum neque, congue iaculis diam nibh nec nunc. Cras pretium scelerisque varius. Donec justo felis, gravida vel urna a, vehicula laoreet arcu. Vestibulum libero sem, eleifend nec sollicitudin eget, blandit aliquet neque. Suspendisse ligula tortor, iaculis sed auctor in, ornare vel dui. Integer congue convallis arcu quis elementum. Phasellus posuere ultricies ex non dictum. Maecenas iaculis libero sit amet mollis dictum. Donec in felis semper, fringilla nibh et, posuere risus."],
}
class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
          <Nav/>       
          </div>
          <Switch>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Blog">
            <Post obj={obj}></Post>
          </Route>
        </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
