import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <div id="top-bar">
        <div id="top-bar-inner" className="container">
          <div className="top-bar-inner-wrap">
            <div className="top-bar-content">
              <div className="inner">
                <span className="address content">
                  {" "}
                  36 Berkley close walsall ws20nx
                </span>
                <span className="phone content">+44 7455 069069</span>
                <span className="time content">Mon-Sat: 8am - 6pm</span>
              </div>
            </div>
            <div className="top-bar-socials">
              <div className="inner">
                <span className="text">Follow us:</span>
                <span className="icons">
                  <Link to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-pinterest-p" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-rss" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
