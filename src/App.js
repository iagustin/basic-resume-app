import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Skills from './Components/Skills';

function App() {
  return (
    <div style={styles.container}>
      <div style={ styles.content }>
        <Header />
        <Skills />
        {/* <Content {...edu} /> */}
        <div style={ styles.h1 }>Experience</div>
        <Body />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    width: '40%',
  },
  h1: {
    fontSize: 35,
    fontWeight: 700,
    marginBottom: 20,
  },
};

export default App;
