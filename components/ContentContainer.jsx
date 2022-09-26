import React from 'react'
import PropTypes from 'prop-types'
import { Shape, getDataUri } from './Shape'
import styles from '../styles/ContentContainer.module.css'

export const ContentContainer = ({ shapeType, primaryColor, secondaryColor, ...props }) => {
    return (
        <div
            className={styles.contentContainer + ' ' + styles[shapeType]}
            style={{
                background: getDataUri(<Shape 
                  shapeType={shapeType} 
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                />),
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
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string, 
  }
  
  ContentContainer.defaultProps = {
    shapeType: "quads1",
    primaryColor: '#fffec7',
    secondaryColor: '#ffffff',
  }
    
