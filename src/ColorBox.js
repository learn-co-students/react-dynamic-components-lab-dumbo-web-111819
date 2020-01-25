import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity = {parseFloat((this.props.opacity - 0.1).toFixed(1))} /> : null }        
      </div>
    )
  }

}

