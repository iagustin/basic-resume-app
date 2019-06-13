import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

class Skills extends Component {
    render () {
        return (
            <div style={ styles.container }>
                <div style={ styles.title }>Skills</div>
                <div>
                <p>
                    Stack: JavaScript (ES 5 & ES 6), HTML5, Javascript CSS inline styles
                </p>
                <p>
                    Framework : ReactJS, Redux, Radium
                </p>
                <p>
                    Tools : Git, Github, Jira (create bugs/stories even jira workflows), Linux
                </p>
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