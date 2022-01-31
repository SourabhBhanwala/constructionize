import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class BottomBar extends Component {
  render() {
    return (
      <div id="bottom" className="clearfix has-spacer">
        <div id="bottom-bar-inner" className="container">
          <div className="bottom-bar-inner-wrap">
            <div className="bottom-bar-content">
              <div id="copyright">
                <span className="text">
                  <Link to="#" className="text-accent">
                    © Constructionize @2021 All Right Reserved.
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

export default withRouter(BottomBar);
