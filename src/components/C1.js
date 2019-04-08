import React, { Component } from 'react'

export default class C1 extends Component {
  render() {
    console.log('C1 :: start');
    console.log(this.props.user);
    return (
      <div>
        <p>C1</p>
        {this.props.mail}
      </div>
    )
  }
}
