import React from 'react'
import PropTypes from 'prop-types'
import { Shape, getDataUri } from './Shape'
import styles from '../styles/ContentContainer.module.css'

export const ContentContainer = ({ shapeType, ...props }) => {
    return (
        <div
            className={styles.contentContainer + ' ' + styles[shapeType]}
            style={{
                background: getDataUri(<Shape shapeType={shapeType} />),
            }}
        >
          {props.children}            
        </div>
    );
  };
  
  ContentContainer.propTypes = {
    /**
     * Do we show a shifted outline?
     */
    shapeType: PropTypes.string,    
  }
  
  ContentContainer.defaultProps = {
    shapeType: "quads1",
  }
    
