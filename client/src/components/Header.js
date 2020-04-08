import React, { Component } from "react";
import { connect } from "react-redux";
class Header extends Component {

  renderContent(){
    switch (this.props.auth){
      case null:
        return 'still deciding'
      case false:
        return 'im loggedout'
      default:
        return 'im loggedin'
    }
  }

  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a class="brand-logo">zBabEs</a>
          <ul class="right">
          <li>
          {this.renderContent()}
          </li>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}){
  return {auth};
}

export default connect(mapStateToProps)(Header)
