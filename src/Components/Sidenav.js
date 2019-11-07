import React from 'react';
import { connect } from 'react-redux';
import ResultRectangle from './ResultRectangle';
import './sidenav.css';
import Sliders from './Sliders';
import './style.css';
import {selectItem} from '../Store/Actions';


class Sidenav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNavItems: []
        }
    }
    render() {
        let items = { ...localStorage };
        let sidenavitems = [];
        Object.keys(items).map(item => {
            sidenavitems.push(JSON.parse(localStorage.getItem(item)))
        })
        console.log(sidenavitems);
        return (
            <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>Spendo</h3>
                    </div>
                    <div style={{position:'relative', overflow:'scroll', height:'400px'}}>
                    <ul class="list-unstyled components">
                        <p><b><u>History</u></b></p>
                        {sidenavitems.map((item, index) => (
                            <li onClick={()=>this.props.selectItem(item)} key={index}>
                                <a href="#">Amount:{item.amount} Duration:{item.numMonths}</a>
                            </li>
                        ))}
                    </ul>
                    </div>
                </nav>

                <div id="content">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">

                            <button type="button" id="sidebarCollapse" class="btn btn-info">
                                <i class="fas fa-align-left"></i>
                                <span>History</span>
                            </button>
                        </div>
                    </nav>
                    <Sliders />
                    {console.log(this.props.selectedItem)}
                    {this.props.selectedItem ? <div className="centeredCss" style={{ marginTop: "40px" }}>
                        <ResultRectangle interest={this.props.selectedItem.interestRate} duration={this.props.selectedItem.numMonths} montlyPayment={this.props.selectedItem.monthlyPayment.amount} loanAmount={this.props.selectedItem.amount} />
                    </div> : <div className="centeredCss" style={{ marginTop: "40px" }}>
                            Please select the loan amount and duration
                        </div>}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        selectedItem: state.selectedItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem:(data)=>dispatch(selectItem(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);