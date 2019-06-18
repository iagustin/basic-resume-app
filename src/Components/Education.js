import React, { Fragment } from 'react';
import { PRIMARY_COLOR } from '../styles';

const Education = ( props ) => {
    const { header, description } = props.data.educationData;

    return (
      <Fragment>
          <h1>{ header }</h1>
          <h2 style={styles.description}>
            { description }
          </h2>
      </Fragment>
    );

};

const styles = {
  description: { color: PRIMARY_COLOR },
};

export default Education;