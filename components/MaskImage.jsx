import React from 'react';
import PropTypes from 'prop-types';
import { renderToStaticMarkup } from 'react-dom/server';
import { Shape } from './Shape';
import styles from '../styles/MaskImage.module.css'

const getDataUri = (shape) => {
  const svgString = encodeURIComponent(renderToStaticMarkup(shape));
  const dataUri = `url("data:image/svg+xml,${svgString}")`;
  return dataUri;
}

export const MaskImage = ({ url, shapeType, maskPos, rightPos, topPos, width, ...props }) => {
    return (
        <div    className={styles.dropshadow}
                style={{
                    position: 'relative',
                    right: rightPos,
                    top: topPos,
                }}
        >
            <img src={url} style={{ 
                maskImage: getDataUri(<Shape shiftedOutline={false} shapeType={shapeType} />),
                width: width,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: maskPos,
            }} />
        </div>
    )
  }
  
  MaskImage.propTypes = {
    /**
     * Which shape do we use?
     */
    shapeType: PropTypes.string,   
    /**
     * Which shape do we use?
     */
    maskPos: PropTypes.string,
    rightPos: PropTypes.string,
    topPos: PropTypes.string,
  }
  
  MaskImage.defaultProps = {
    shapeType: 'quads1',
    maskPos: '100%',
    rightPos: '-330px',
    topPos: '-200px',
  }
    
