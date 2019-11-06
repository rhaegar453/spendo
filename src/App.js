import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MainCard from './Components/MainCard';
import Slider from './Components/Sliders';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Navbar/>
        <MainCard/>  
      </div>
    );
  }
}