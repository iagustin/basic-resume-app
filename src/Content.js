import React, { Component } from 'react';
import { PRIMARY_COLOR } from './styles';

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
    container: {
    },
    title: {
        marginBottom: 0,
        fontSize: 25,
        fontWeight: 700,
        color: PRIMARY_COLOR,
    },
    subtitle: {
        marginTop: 0,
        fontSize: 16,
        fontWeight: 500,
        color: 'lightblue',
    },
    description: {
        lineHeight: 1.5,
    }
};

export default Content;