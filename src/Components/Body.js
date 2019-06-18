import React, { Component } from 'react';
import Content from '../Content';

class Body extends Component {
    render () {
      const {company} = this.props.data;
        return (
            <div style={ styles.container }>
                { company.map(
                    (data) => <Content key={data.subtitle} { ...data } />
                )}
            </div>
        );
    }
};

const styles = {
    container: {
    },
};

export default Body;