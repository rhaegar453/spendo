import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MainCard from './Components/MainCard';
import Slider from './Components/Sliders';
import Sidebar from './Components/Sidebar';
import SideItem from './Components/SideItem';
import {connect} from 'react-redux';
import {checkCache} from './Store/Actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      items:[1,2,3]
    }
  }
  componentDidMount(){
    console.log("Making the request");
    this.props.checkCache({amount:508, numMonths:8});
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-md-2 sidenav">
            <div style={{marginTop:'20px'}}>
              {this.state.items.map(item=>(
                    <SideItem loan={500} duration={6}/>
              ))}
            </div>
          </div>
          <div className="col-md-9">
            <MainCard />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
  return {

  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    checkCache:({amount, numMonths})=>dispatch(checkCache({amount, numMonths}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
