import React, { Component } from 'react';
import Content from '../Content';
import IconWithText from './IconWithText';

const info = {
    title: 'Israel Agustin',
    subtitle: 'Front End Developer',
};

const iconTextData = [
{
    icon: 'email',
    text: 'abc.def@gmail.com',
},
{
    icon: 'phone',
    text: '123-456-789' ,
},
];

class Header extends Component {
    render () {
        return (
            <div style={ styles.container }>
                <Content {...info} />
                {iconTextData.map(
                    (data) => <div style={ styles.text }><IconWithText data={ data } /></div>
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