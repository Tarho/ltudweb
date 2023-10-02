import React, { Component } from 'react';
import "./NavbarStyles.css";
import logo from "../assets/icons8-react-native-34.png";

class Navbar extends Component {
    state ={clicked:false};
    handleClick = () =>
    {
        this.setState({clicked :! this.state.clicked});
    }
    render(){
  return (
    <div>
        <nav>
            <a href='index.html'>
            <img src={logo}/>
            </a>

            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className='active' href="index.html">Home</a></li>
                    <li><a href="https://www.facebook.com/marketplace/?ref=app_tab">Shop</a></li>
                    <li><a href="https://www.facebook.com/">Blog</a></li>
                    <li><a href="https://about.fb.com/company--info/">About Us</a></li>
                    <li><a href="https://www.facebook.com/help">Contact Us</a></li>
                </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </nav>
    </div>
  )
}
}
export default Navbar
