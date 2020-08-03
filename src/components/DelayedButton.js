// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  render() {
    return (
      <button
        onClick={this.handleClick}
      ></button>
    )
  }

  handleClick = event => {
    event.persist()
    setTimeout( () => {this.props.onDelayedClick(event)}, this.props.delay )
  }
}