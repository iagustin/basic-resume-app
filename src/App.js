import React, { Component } from 'react';

import Header from './Components/Header';
import Body from './Components/Body';
import Skills from './Components/Skills';
import Education from './Components/Education';

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
          <Header />
          <Skills />
          <Education />
          <h1>Experience</h1>
          <Body />
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
