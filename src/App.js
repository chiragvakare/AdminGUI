import './App.css';
import HeaderComponent from './components/HeaderComponent';
import SidebarComponent from './components/SideBarComponent';
import FooterComponent from './components/FooterComponent';

import { Component } from 'react';

import HomeComponent from './components/HomeComponent';
import { Route, Routes } from 'react-router-dom';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div id="layoutSidenav">
          <SidebarComponent />
          <div id="layoutSidenav_content">
            <Routes>
                <Route path='/' element={<HomeComponent />} />
                <Route path='/about' element={<AboutComponent/>} />
                <Route path='/contact' element ={<ContactComponent/>}/>
              </Routes>
              <br/> 
            <FooterComponent />
          </div>
        </div >
      </div >
    );
  }
}

export default App;
