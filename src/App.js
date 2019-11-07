import React, {Component} from 'react';
import Sidenav from './Components/Sidenav';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Sidenav/>
      </div>
    );
  }
}