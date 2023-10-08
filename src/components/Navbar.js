import React, { Component } from "react";
import "./NavbarStyles.css";
import logo from "../assets/icons8-react-native-34.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLinkClick = () => {
    // Đặt clicked về false khi link được click
    this.setState({ clicked: false });
  };

  render() {
    return (
      <div>
        <nav>
          <a>
            <Link to="/Home" onClick={this.handleLinkClick}>
              <img src={logo} alt="Logo" />
            </Link>
          </a>
          <div>
            <ul id="navbar" className={this.state.clicked ? "active" : ""}>
              <li>
                <a>
                  <Link to="/Home" onClick={this.handleLinkClick}>
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/marketplace/?ref=app_tab">
                  Shop
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">Blog</a>
              </li>
              <li>
                <a href="https://about.fb.com/company--info/">About Us</a>
              </li>
              <li>
                <Link to="/contactus" onClick={this.handleLinkClick}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
