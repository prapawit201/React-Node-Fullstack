import React, { Component } from "react";
import { connect } from "react-redux";
import { link, Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} class="brand-logo">
            zBabEs
          </Link>
          <ul class="right">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
