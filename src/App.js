import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './components/header/Head';
import Footer from './components/footer/Footer';
import Features from './components/content/features/Features';
import GoWorks from './components/content/GoWorks/GoWorks';
import Timeline from './components/content/timeline/Timeline';
import Faqs from './components/content/faqs/Faqs';
import Mobileapp from './components/content/Mobileapp/Mobileapp';


class App extends Component{
  render(){
    return(
    <div className="container-fluid  bg-white">
      <Head />
      <Features />
      <br></br>
      <GoWorks />
      <br></br>
      <Timeline />
      <br></br>
      <Faqs />
      <br></br>
      <Mobileapp />
      <br></br>
      <Footer />

    </div> 
    );
  }
}

export default App;
