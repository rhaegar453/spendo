import React from  'react';
import Slider from 'react-rangeslider';
import '../../node_modules/react-rangeslider/lib/index.css';



export default class Sliders extends React.Component{
    constructor(props){
        super(props);
        let {min, max}=this.props;
        this.state={
            labels:{
                [min]:min,
                [max]:max
            }, 
            value:null
        }
    }
    changeSlider=(value)=>{
        this.setState({value});
    }
    render(){
        let {min, max, step}=this.props;
        return(
            <div>
                <Slider step={step} min={min} max={max} value={this.state.value} labels={this.state.labels} onChange={this.changeSlider}/>
            </div>
        );
    }
}