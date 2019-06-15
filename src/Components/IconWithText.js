import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import { PRIMARY_COLOR } from '../styles';

class IconWithText extends Component {
    render () {
        return (
            <div style={ styles.container }>
                <MaterialIcon icon={this.props.data.icon} size='tiny' color={ `${PRIMARY_COLOR}` }/>
                <div style={ styles.text }>
                  {this.props.data.text}
                </div>
            </div>
        );
    }
};

const styles = {
    container: {
        display: 'flex',
    },
    text: {
        paddingLeft: 10,
        lineHeight: .8,
    }
};

export default IconWithText;