import React, { Component } from 'react';
import { H1_SIZE, H2_SIZE } from './styles';

class Content extends Component {
    render () {
        return (
            <div style={ styles.container }>
                <div style={ styles.title }>{this.props.title}</div>
                <div style={ styles.subtitle }>{this.props.subtitle}</div>
                <p style={ styles.description }>{this.props.description}</p>
            </div>
        );
    }
};

const styles = {
    title: {
        ...H1_SIZE,
    },
    subtitle: H2_SIZE,
    description: {
        lineHeight: 1.5,
    }
};

export default Content;