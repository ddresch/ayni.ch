import React from 'react'
import { Shape, getDataUri } from './Shape'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export const Footer = ({ ...props }) => {
  return (
    <footer className={styles.footer}>
      <div  className={styles.footerNavBackground}
            style={{background: getDataUri(<Shape shapeType='footer' shiftedOutline={false} primaryColor='#ffffff' secondaryColor='#ffffff' />)}}>
        <ul className={styles.footerNav}>
          <li>
            <Link href="ueber-mich"
                  className={[styles.link, styles.linkMetis].join(' ')}>
              &Uuml;ber mich
            </Link>
          </li>
          <li>
            <Link href="kontakt"
                  className={[styles.link, styles.linkMetis].join(' ')}>
              Kontakt
            </Link>
          </li>          
          {/* <li>
            <a href="" className={[styles.link, styles.linkMetis].join(' ')}>Datenschutz</a>
          </li> */}
        </ul>
      </div>
    </footer>
  )
}
  
  
    
