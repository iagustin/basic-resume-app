import React, { Component } from 'react';
import Content from '../Content';
import IconWithText from './IconWithText';
import img from '../profile-pic.png';

class Header extends Component {
    render () {
        const { headerInfo, iconTextData, mobile } = this.props.data;
        const containerStyle = !mobile && styles.container;
        
        return (
            <div style={ containerStyle }>
                <div style={ styles.rightContainer } >
                    <img style={ styles.img } alt='Profile' src={img} />
                </div>
                <div style={ styles.leftContainer }>
                    <Content {...headerInfo} />
                    {iconTextData.map(
                        (data) => <div key={data.icon} style={ styles.text }><IconWithText data={ data } /></div>
                    )}
                </div>
            </div>
        );
    }
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row-reverse',
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