import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    // console.log(this.props.opacity)
  //  ÷const newOpacity=this.props.opacity
    return this.props.opacity <0.2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={this.props.opacity-0.1}/>
        </div>
    )
  }

}

/* your conditional code here! */
// ColorBox component calls itself, it pass down the opacity
//but when itselt using this.props.opacity
