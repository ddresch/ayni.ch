import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Headline.module.css'

export const Headline = ({ line1, line2, sublevel, ...props }) => {

  console.log('Headline: sublevel: ', sublevel)

    return (
        (sublevel)
        ? <h2 className={styles.headline}>{line1} <span>{line2}</span></h2> 
        : <h1 className={styles.headline}>{line1} <span>{line2}</span></h1>
    )
  }
  
  Headline.propTypes = {
    line1: PropTypes.string,    
    line2: PropTypes.string,
    sublevel: PropTypes.bool,
  }
  
  Headline.defaultProps = {
    line1: 'Headline',
    line2: 'Subline',
    sublevel: true,
  }
    
