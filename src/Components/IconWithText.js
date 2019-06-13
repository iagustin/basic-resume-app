import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

class IconWithText extends Component {
    render () {
        return (
            <div style={ styles.container }>
                <MaterialIcon icon={this.props.data.icon} size='tiny' />
                <div style={ styles.text }>{this.props.data.text}</div>
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
    }
};

export default IconWithText;