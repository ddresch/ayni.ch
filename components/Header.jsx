import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Header.module.css'
import { Squash as Hamburger } from 'hamburger-react'
import { Logo } from './Logo';
import { Shape, getDataUri } from './Shape';

export const Header = ({}) => {
  const [isOpen, setOpen] = useState(false)
  const [selectedSubtree, setSubtree] = useState(null)
  const router = useRouter()

  const navClass = isOpen ? styles.navOpen : styles.navClosed
  
  const isSlug = (slug) => {
    console.log(router.query)
    if(router.query && router.query.catchall) {
      return router.query.catchall.join('/') === slug
    }
    return false
  }

  const NavLink = ({url, label}) => {
    return (
      <Link href={'/' + url} scroll={false}>
        <a className={`${(isSlug(url)) ? styles.selected : ''}`} onClick={() => setOpen(!isOpen)}>
          {label}
        </a>
      </Link>
    )
  }

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
              <li className={(selectedSubtree === 'Angebot') ? styles.selected : ''}
                  onClick={() => setSubtree('Angebot')}>
                Angebot
                <ul className={styles.navList}>
                  <li>
                    <Link href="/angebot/wellbeing"><a>ayni - wellbeing</a></Link>
                  </li>
                  <li>
                    <Link href="/angebot/balance"><a>ayni - balance</a></Link>
                  </li>
                  <li>
                    <Link href="/angebot/leadership"><a>ayni - leadership</a></Link>
                  </li>
                  <li>
                    <Link href="/angebot/corporate"><a>ayni - corporate</a></Link>
                  </li>
                  <li>
                    <Link href="/angebot/beratung"><a>ayni - beratung</a></Link>
                  </li>
                </ul>
              </li>
              <li className={(selectedSubtree === 'Informationen') ? styles.selected : ''}
                  onClick={() => setSubtree('Informationen')}>
                Informationen
                <ul className={styles.navList}>
                  <li>
                    <NavLink url="informationen/ayurveda" label="Ayurveda" />
                  </li>
                  <li>
                    <NavLink url="informationen/leadership-circle-profile" label="Leadership Circle Profile" />
                  </li>
                  <li>
                    <NavLink url="informationen/coaching-psychologische-beratung" label="Coaching und psychologische Beratung"/>
                  </li>
                  <li>
                    <NavLink url="informationen/resilienz-mentaltraining" label="Resilienz-, und Mentaltraining"/>
                  </li>
                  <li>
                    <NavLink url="informationen/testimonials" label="Testimonials"/>
                  </li>
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
