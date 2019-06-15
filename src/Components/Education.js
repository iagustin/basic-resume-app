import React, { Fragment } from 'react';
import { PRIMARY_COLOR } from '../styles';

const Education = () => (
    <Fragment>
        <h1>Education</h1>
        <h2 style={styles.description}>
          Cal State Long Beach/ Long Beach, CA - B.S. in Computer Science  
        </h2>
    </Fragment>
);

const styles = {
  description: { color: PRIMARY_COLOR },
};

export default Education;