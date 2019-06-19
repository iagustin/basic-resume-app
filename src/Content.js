import React, { Component } from 'react';
import { H1_SIZE, H2_SIZE } from './styles';

class Content extends Component {
    render () {
        const title = this.props.title.split('-');
        const companyName = title[0];
        const position = title[1] || '';

        return (
            <div style={ styles.container }>
                <span style={ styles.title }>{companyName}</span>
                {position && <span>-</span>}
                <span style={ styles.position }>{position}</span>
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
    position: {
        fontSize: 25,
        fontWeight: 500,
        marginBottom: 0,
        color: 'orange',
    },
    subtitle: H2_SIZE,
    description: {
        lineHeight: 1.5,
    },
};

export default Content;