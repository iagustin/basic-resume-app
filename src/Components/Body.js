import React, { Component } from 'react';
import Content from '../Content';

const co = [
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
  ];

class Body extends Component {
    render () {
        return (
            <div style={ styles.container }>
                { co.map(
                    (data) => <Content  { ...data } />
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