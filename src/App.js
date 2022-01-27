import React from 'react';
import './App.css';
import Main from './Components/Main-Page'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer"

const App = ()=>{
  return (
    <div className="App">
       <Header/>
       <Navbar/>
       <Main/>
       <Footer/>
    </div>
  );
}

export default App;
