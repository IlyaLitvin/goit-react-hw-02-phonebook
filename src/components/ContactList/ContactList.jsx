import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactList extends Component {
  render() {
    return (
      <li>
        {this.props.list.name}: {this.props.list.number}
      </li>
    );
  }
}
