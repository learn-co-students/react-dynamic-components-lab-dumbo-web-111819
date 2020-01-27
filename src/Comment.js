//your code here

import React, { Component } from 'react';
// import BlogPost from './BlogPost'

export default class Comment extends Component {
    render(){
        console.log(this.props.commentText)
        return(<div className="comment">
            {this.props.commentText}
        </div>
        );
    }
}

//Comment is the child of BlogPost can access all its attributes/props given from its parent using this.props.'name_of_attribute'