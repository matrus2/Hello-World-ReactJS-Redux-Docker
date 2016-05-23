import React from 'react';

export default class PageFooter extends React.Component {
    render() {
        return(
            <footer>{this.props.children}</footer>
        )
    }
}