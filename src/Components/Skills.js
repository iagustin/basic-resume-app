import React, { Component } from 'react';
import { PRIMARY_COLOR } from '../styles';

class Skills extends Component {
    render () {
        const data = this.props.data.skillsData;
    
        return (
            <div style={ styles.container }>
                <h1 style={ styles.h1 }>Skills</h1>
                <div>
                    {data.map(
                        (data) => (
                            <p key={data.title}>
                                <span
                                    style={{ color: PRIMARY_COLOR }}
                                >
                                    <strong>{data.title}: </strong>
                                </span>
                                {data.description}
                            </p>
                        )
                    )}
                </div>
            </div>
        );
    }
};

const styles = {
    container: {
        marginTop: 20, 
    },
    h1: { 
        textTransform: 'uppercase'
    },
};

export default Skills;