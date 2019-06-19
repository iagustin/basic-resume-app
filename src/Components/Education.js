import React, { Fragment } from 'react';
import { PRIMARY_COLOR, H1_SIZE } from '../styles';

const Education = ( props ) => {
    const { header, description } = props.data.educationData;
    const data = description.split('-');
    const companyName = data[0];
    const position = data[1] || '';
    return (
      <Fragment>
          <h1 style={ styles.header }>{ header }</h1>
          <span style={ styles.title }>{companyName}</span>
          {position && <span>-</span>}
          <span style={ styles.position }>{position}</span>
      </Fragment>
    );

};

const styles = {
  header: { textTransform: 'uppercase' },
  title: {
    ...H1_SIZE,
  },
  position: {
      fontSize: 25,
      fontWeight: 500,
      marginBottom: 0,
      color: 'orange',
  },
};

export default Education;