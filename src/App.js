import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}