import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavMobile.scss";

class NavMobile extends Component {
  state = {
    condition: true
  };
  handleClick = () => {
    this.setState({
      condition: !this.state.condition
    });
  };
  render() {
    return (
      <div className="NavMobile">
        <div className="burger">
          {this.state.condition ? (
            <FontAwesomeIcon icon={faBars} onClick={this.handleClick} />
          ) : (
            <FontAwesomeIcon icon={faTimes} onClick={this.handleClick} />
          )}
        </div>
        {this.state.condition ? null : (
          <div className="navContentMobile">
            <div>
              Aneta Jagla - <strong>Grafik Designer</strong>
            </div>
            <ul>{this.props.menu}</ul>
          </div>
        )}
      </div>
    );
  }
}

export default NavMobile;
