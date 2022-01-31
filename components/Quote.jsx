import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Quote.module.css'

export const Quote = ({ text, ...props }) => {
    return (        
        <blockquote 
          className={styles.quote}>
            {text}
        </blockquote>
    );
  };
  
  Quote.propTypes = {
    text: PropTypes.string,
  }
  
  Quote.defaultProps = {
    text: 'Please add you custom quote text.',
  }
    
