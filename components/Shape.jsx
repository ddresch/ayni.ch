import React from 'react'
import PropTypes from 'prop-types'
import { renderToStaticMarkup } from 'react-dom/server'

export const getDataUri = (shape) => {
  const svgString = encodeURIComponent(renderToStaticMarkup(shape))
  const dataUri = `url("data:image/svg+xml,${svgString}")`
  return dataUri
}

export const Shape = ({ shiftedOutline, shapeType, primaryColor, secondaryColor, outlineColor, ...props }) => {
  const paths = { 
    tripple: {
      width: 800, height: 600,
      path: 'm395.37276,59.18738c-333.15722,-150.64809 -345.36973,34.51381 -375.16825,141.32003c-11.72401,69.0276 -73.27505,321.3515 171.46361,353.99969l435.25379,29.38337c185.14162,12.59287 220.80215,-288.2369 90.86106,-365.19335c-102.58507,-63.89718 -167.06711,-88.61652 -322.41021,-159.50974z',
    },
    quads1: {
      width: 800, height: 915,
      path: 'm67.71829,319.31515c-63.09518,75.60669 -70.19138,103.47846 -46.75518,188.63214c23.4362,85.17755 77.40408,227.61529 113.32863,305.62645c35.9014,78.01116 53.75804,91.57332 118.838,89.14569c65.05609,-2.42762 177.31092,-20.8682 243.16079,-38.21181c65.84987,-17.36677 85.29477,-33.63658 129.80901,-107.65645c44.49108,-74.01987 114.0761,-205.76664 146.21847,-284.75825c32.1431,-78.99162 25.42027,-103.17456 -34.31313,-175.91078c-59.71097,-72.7355 -177.45203,-186.95125 -249.13688,-242.95095c-71.68559,-56.02214 -96.05593,-55.71895 -167.57798,5.7894c-71.52205,61.50763 -190.47656,184.68715 -253.57173,260.29457'
    },
    quads2: {
      width: 780, height: 740,
      path: 'm726.48793,458.5238c55.489,-62.394 60.003,-84.274 29.297,-147.992c-30.709,-63.736 -96.636,-169.293 -139.023,-226.664c-42.363,-57.372 -61.185,-66.54 -125.155,-60.163c-63.947,6.376 -173.018,28.313 -236.418,46.19c-63.397,17.894 -81.125,31.728 -118.429,91.615c-37.281,59.886 -94.165,165.81 -118.825,228.654c-24.659,62.845 -15.872,80.936 49.527,132.607c65.376,51.672 191.684,131.15 267.379,169.149c75.696,38.016 99.705,36.093 164.762,-16.067c65.057,-52.16 171.397,-154.934 226.885,-217.329'
    },
    quads3: {
      width: 750, height: 680,
      path: 'm113.06227,72.4412c-21.258,19.967 -27.639,39.747 -43.762,134.535c-16.101,94.795 -41.942,264.598 -46.019,356.149c-4.05,91.537 13.638,104.837 116.412,89.367c102.773,-15.47 290.633,-59.71 395.221,-88.013c104.593,-28.324 125.936,-40.705 146.734,-85.219c20.797,-44.514 41.071,-121.155 44.983,-167.575c3.897,-46.448 -9.207,-61.527 -87.983,-105.207c-78.776,-43.68 -225.408,-111.928 -308.932,-147.976c-83.516,-36.07 -103.408,-40.985 -131.388,-33.518c-27.973,7.446 -64.007,27.49 -85.266,47.457'
    },
    burger: {
      width: 145, height: 195,
      path: 'M144.896,0l-130.751,0c-0.119,0.161 -0.228,0.326 -0.326,0.493c-17.31,29.529 -16.929,45.44 -6.726,66.617c16.237,33.678 57.37,80.717 89.897,105.991c14.387,11.168 27.095,18.083 45.7,21.648c0.783,0.15 1.518,0.071 2.206,-0.222l0,-194.527Z',
    },
    footer: {
      width: 396, height: 118,
      path: 'm0,48.02l0,69.78l395.386,0c-74.968,-37.371 -159.179,-75.94 -218.093,-97.846c-84.077,-31.263 -116.458,-28.577 -177.293,28.066z'
    }
  }

  return (
    <svg width={paths[shapeType].width} height={paths[shapeType].height} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="linearGradient" x1="0.26953" y1="0.34063" x2="0.26953" y2="1">
          <stop stopColor={primaryColor} offset="0"/>
          <stop stopColor={secondaryColor} offset="1"/>
        </linearGradient>
        {/* <radialGradient id="radialGradient" gradientTransform="matrix(547.119,-1270.53,1446.25,622.785,223.502,1323.79)" gradientUnits="userSpaceOnUse" r="1" cy="0" cx="0">
          <stop stopColor="#fff" offset="0"/>
          <stop stopColor="#d2edde" offset="0.55"/>
          <stop stopColor="#bfe5d0" offset="1"/>
        </radialGradient> */}
      </defs>
      <g>
        <g>
          <path fill="url(#linearGradient)" d={paths[shapeType].path} />
          {shiftedOutline && 
            <>
              <path fill="none" d={paths[shapeType].path} stroke={outlineColor} transform="rotate(-3, 414.164, 316.363)" />
            </>
          }
        </g>
      </g>
    </svg>
  );
};


Shape.propTypes = {
  /**
   * Do we show a shifted outline?
   */
  shiftedOutline: PropTypes.bool,
  /**
   * The outline color
   */
  shapeType: PropTypes.string,
  /**
   * The outline color
   */
  outlineColor: PropTypes.string,
  /**
  * Which colors build the gradient?
  */
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
}

Shape.defaultProps = {
  primaryColor: '#fffec7',  
  secondaryColor: '#ffffff',
  shiftedOutline: true,
  shapeType: 'quads1',
  outlineColor: '#9d9d9d',
  onClick: undefined,
}
  