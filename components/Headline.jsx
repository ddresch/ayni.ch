import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Headline.module.css'

export const Headline = ({ line1, line2, ...props }) => {
    return (
        <h1 className={styles.headline}>{line1} <span>{line2}</span></h1>
    );
  };
  
  Headline.propTypes = {
    line1: PropTypes.string,    
    line2: PropTypes.string,
  }
  
  Headline.defaultProps = {
    line1: 'Headline',
    line2: 'Subline',
  }
    
