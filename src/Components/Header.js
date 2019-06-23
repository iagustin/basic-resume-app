import React, { Component } from 'react';
import Content from '../Content';
import IconWithText from './IconWithText';
import img from '../profile-pic.png';

class Header extends Component {
    render () {
        const { headerInfo, iconTextData } = this.props.data;
        
        return (
            <div style={ styles.container }>
                <div style={ styles.leftContainer }>
                    <Content {...headerInfo} />
                    {iconTextData.map(
                        (data) => <div key={data.icon} style={ styles.text }><IconWithText data={ data } /></div>
                    )}
                </div>
                <div style={ styles.rightContainer } >
                    <img style={ styles.img } alt='Profile' src={img} />
                </div>
            </div>
        );
    }
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    text: {
        marginBottom: 5,
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: '50%',
    }
};

export default Header;