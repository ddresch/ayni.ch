import React, { useState, useEffect, useRef } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from "framer-motion"
import { Squash as Hamburger } from 'hamburger-react'

import { Shape, getDataUri } from './Shape';
import styles from '../styles/Header.module.css'

export const Sidebar = ({ sideBar, toggleSidebar = () => {} }) => {
    const router = useRouter()
    const [selectedSubtree, setSubtree] = useState(false)
    const sidebarRef = useRef(null)
    
    // Close the sidebar if the user clicks outside of it
    const sideBarStateRef = useRef()
    sideBarStateRef.current = sideBar

    const toggleSubtree = (subtree) => {
        if (subtree === selectedSubtree) {
            setSubtree(null)
        } else {
            setSubtree(subtree)
        }
    }

    useEffect(() => {        
        if(router.query && router.query.catchall) {            
            if(router.query.catchall.length > 1) {
                setSubtree(router.query.catchall[0])
            }
        }
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                if(sideBarStateRef.current) {
                    console.log('clicked outside', sideBarStateRef.current)
                    toggleSidebar()
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [sidebarRef])

    const NavLink = ({url, label}) => {
        return (
            <li>
                <Link   href={'/' + url} scroll={false}
                        className={`${(isSlug(url)) ? styles.selected : ''}`} 
                        onClick={() => {
                            const parts = url.split('/')
                            if(parts.length > 1) {
                                // console.log("parts",parts[0])
                                setSubtree(parts[0])
                            }                            
                            toggleSidebar()
                        }}>
                        {label}                    
                </Link>
            </li>
        )
    }

    const SubNav = ({label, children}) => {
        // console.log('selectedSubtree', selectedSubtree)
        return (
            <li className={`${(selectedSubtree === label.toLowerCase()) ? styles.selected : ''}`}
                onClick={() => toggleSubtree(label.toLowerCase())}>{label}    
                <ul className={styles.navList}>
                    {children}
                </ul>
            </li>
        )
    }

    const isSlug = (slug) => {
        if(router.query && router.query.catchall) {
          return router.query.catchall.join('/') === slug
        }
        return false
    }

    return (
        <div ref={sidebarRef}>
            <div style={{position: 'fixed', right: '40px', top: '25px', zIndex: 20}}>
                <Hamburger duration={0.8} toggled={sideBar} toggle={toggleSidebar} />
            </div>
            <AnimatePresence>
                {sideBar && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        style={{
                            position: 'fixed', top: 0, right: 0, zIndex: 10,
                            backgroundImage: getDataUri(<Shape shapeType="burger" shiftedOutline={false} primaryColor="white" secondaryColor="white" />),
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.4))',
                            width: '580px',
                            height: '780px',
                        }}
                    >
                        <ul className={styles.navList}>
                            <NavLink url="" label="Willkommen" />
                            <NavLink url="ueber-mich" label="Über mich" />
                            <SubNav label="Angebot">
                                <NavLink url="angebot/wellbeing" label="ayni - wellbeing" />
                                <NavLink url="angebot/balance" label="ayni - balance" />
                                <NavLink url="angebot/beratung" label="ayni - beratung" />
                                <NavLink url="angebot/leadership" label="ayni - leadership" />
                                <NavLink url="angebot/corporate" label="ayni - corporate" />                                
                            </SubNav>
                            <NavLink url="aktuelles" label="Aktuelles" />
                            <SubNav label="Informationen">
                                <NavLink url="informationen/ayurveda" label="Ayurveda" />
                                <NavLink url="informationen/leadership-circle-profile" label="Leadership Circle Profile" />
                                <NavLink url="informationen/coaching-psychologische-beratung" label="Coaching und psychologische Beratung"/>
                                <NavLink url="informationen/resilienz-mentaltraining" label="Resilienz-, und Mentaltraining"/>
                                {/* <NavLink url="informationen/corporate-wellbeing" label="Corporate Wellbeing"/> */}
                            </SubNav>
                            <NavLink url="testimonials" label="Testimonials" />
                            <NavLink url="kontakt" label="Kontakt" />
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>      
    )
  }