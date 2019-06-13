import React from 'react';
import Content from './Content';
import Header from './Components/Header';
import Body from './Components/Body';
import Skills from './Components/Skills';

  const edu =
  {
    title: 'Education',
    subtitle: 'BS Computer Science - CSULB',
    description: '',
  }

function App() {
  return (
    <div style={styles.container}>
      <div style={ styles.content }>
        <Header />
        <Skills />
        <Content {...edu} />
        <h1>Experience</h1>
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
  body: {
  },
};

export default App;
