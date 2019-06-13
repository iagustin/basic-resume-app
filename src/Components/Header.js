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
    text: 'i@gmail.com',
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
                    (data) => <IconWithText data={ data }/>
                )}
            </div>
        );
    }
};

const styles = {
    container: {
    }
};

export default Header;