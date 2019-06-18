import React, { Component } from 'react';

import Header from './Components/Header';
import Body from './Components/Body';
import Skills from './Components/Skills';
import Education from './Components/Education';

const data = {
  headerInfo: {
    title: 'Israel Agustin',
    subtitle: 'Front End Developer',
  },
  iconTextData: [
    {
      icon: 'email',
      text: 'abc.def@gmail.com',
    },
    {
      icon: 'phone',
      text: '123-456-789' ,
    },
  ],
  skillsData: [
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
  ],
  educationData: {
    header: 'Education',
    description: 'Cal State Long Beach/ Long Beach, CA - B.S. in Computer Science  ',
  },
  company: [
    {
      title: 'Chrome River Technologies / Los Angeles, CA - Front End Developer',
      subtitle: '2018 - Present',
      description: `
      Building the Front End part of a client facing product with Javascript ES5 and
      ES6. I use React Javascript library to implement perfect pixel UI and
      Radium inline styles to manipulate CSS in Javascript. Javascript testing utilities,
      Enzyme and Jest, were used to unit test. Our middle tier was implemented in
      NodeJS. I use git version control to create a branch from master, test, create
      pull requests, get reviews then finally merge to master branch in github.
      `,
    },
    {
      title: 'Chrome River Technologies / Los Angeles, CA - ScrumMaster',
      subtitle: '6/2015 - 2017',
      description: `
      In charge of Scrum process for US and offshore teams. Help teams follow
      Scrum testing best practices. Able to setup features and its MySQL data to
      reproduce issues. Interacting and coordinating test activities across multiple
      teams including management.
      `,
    },
    {
      title: 'Chrome River Technologies / Los Angeles, CA - Lead Manual Tester',
      subtitle: '9/9/2013 - 6/2015',
      description: `
      Lead manual tester for flagship product. Wrote understandable test cases and
    provided detailed information such as HTML payload and log errors. I was able
    to reproduce issues in any environment (dev/staging/qa/production) that differ
    in configuration.
      `,
    },
    {
      title: 'Cornerstone OnDemand / Santa Monica - Software Integration Test Engineer Consultant',
      subtitle: '4/2013 - 9/2013',
      description: `
      Tested and automated APIs for E*trade, Texas Instrument, IBM and others
    using SoapUI and Apache JMeter tool. I was the only individual contributor to
    this project and created test cases from start to finish with minimal help.
      `,
    },
  ]
};


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      width: '40%',
    };

    this.myFunction = this.myFunction.bind(this);
  }

  componentDidMount () {
    let x = window.matchMedia("(max-width: 500px)")
    this.myFunction(x) // Call listener function at run time
    x.addListener(this.myFunction) // Attach listener function on state changes
  }

  myFunction(x) {
    if (x.matches) {
      this.setState({width: '80%'});
    }
  }

  render () {
    return (
      <div style={styles.container}>
        <div style={ {width: this.state.width} }>
          <Header data={ data } />
          <Skills data={ data } />
          <Education data={ data } />
          <h1>Experience</h1>
          <Body data={ data } />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
};

export default App;
