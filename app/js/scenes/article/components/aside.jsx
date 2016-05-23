import React from 'react';

export default class Aside extends React.Component {
    render() {
        return(<aside>{this.props.children}</aside>)
    }
}