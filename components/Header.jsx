import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Header.module.css'
import { Squash as Hamburger } from 'hamburger-react'
import { Logo } from './Logo';
import { Shape, getDataUri } from './Shape';

export const Header = ({}) => {
  const [isOpen, setOpen] = useState(false)

  const navClass = isOpen ? styles.navOpen : styles.navClosed

  return (
    <header>        
        <Logo />        

        <div className={navClass} style={{
          position: 'fixed', top: 0, right: 0, zIndex: 10,
          backgroundImage: getDataUri(<Shape shapeType="burger" shiftedOutline={false} primaryColor="white" secondaryColor="white" />),
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}>
          <div style={{position: 'absolute', right: '40px', top: '25px'}}>
            <Hamburger duration={0.8} toggled={isOpen} toggle={setOpen} />
          </div>
          {isOpen &&         
            <ul className={styles.navList}>
              <li className={styles.selected}>Angebot
                <ul className={styles.navList}>
                  <li>ayni - wellbeing</li>
                  <li>ayni - balance</li>
                  <li>ayni - leadership</li>
                  <li>ayni - corporate</li>
                  <li>ayni - beratung</li>
                </ul>
              </li>
              <li>Informationen
                <ul className={styles.navList}>
                  <li>Ayurveda</li>
                  <li>Leadership Circle Profile</li>
                  <li>Coaching und psychologische Beratung</li>
                  <li>Resilienz-, und Mentaltraining</li>
                  <li>Testimonials</li>
                </ul>
              </li>
              <li>Ayni Prinzip

              </li>
              <li>Aktuelles</li>
              <li>Kontakt</li>
            </ul>
          }
        </div>
    </header>
  )
};

Header.propTypes = {
};

Header.defaultProps = {
};
