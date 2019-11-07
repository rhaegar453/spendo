import React from 'react';
import './sidenav.css';
import './style.css';
import Sliders from './Sliders';
import ResultRectangle from './ResultRectangle';
import { connect } from 'react-redux';


class Sidenav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>Spendo</h3>
                    </div>

                    <ul class="list-unstyled components">
                        <p>Dummy Heading</p>
                        <li class="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                    <ul class="list-unstyled CTAs">
                        <li>
                            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                        </li>
                        <li>
                            <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                        </li>
                    </ul>
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
                        <ResultRectangle interest={this.props.selectedItem.interestRate} duration={this.props.selectedItem.numMonths} montlyPayment={this.props.selectedItem.monthlyPayment.amount} />
                    </div>:<div className="centeredCss" style={{marginTop:"40px"}}>
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
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);