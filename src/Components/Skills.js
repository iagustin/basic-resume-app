import React, { Component } from 'react';
import { PRIMARY_COLOR } from '../styles';

const data = [
    {
        title: 'Stack',
        description: 'JavaScript (ES 5 & ES 6), HTML5, Javascript CSS inline styles',
    },
    {
        title: 'Framework',
        description: 'ReactJS, Redux, Radium',
    },
    {
        title: 'Tools',
        description: 'Git, Github, Jira (create bugs/stories even jira workflows), Linux',
    },
]
class Skills extends Component {
    render () {
        return (
            <div style={ styles.container }>
                <div style={ styles.title }>Skills</div>
                <div>
                    {data.map(
                        (data) => (
                            <p>
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
    title: {
        fontSize: 35,
        fontWeight: 700,
    },
};

export default Skills;