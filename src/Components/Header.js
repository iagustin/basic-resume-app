import React, { Component } from 'react';
import Content from '../Content';
import IconWithText from './IconWithText';

class Header extends Component {
    render () {
        const { headerInfo, iconTextData } = this.props.data;
        
        return (
            <div style={ styles.container }>
                <Content {...headerInfo} />
                {iconTextData.map(
                    (data) => <div key={data.icon} style={ styles.text }><IconWithText data={ data } /></div>
                )}
            </div>
        );
    }
};

const styles = {
    text: {
        marginBottom: 5,
    }
};

export default Header;