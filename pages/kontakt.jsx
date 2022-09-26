import Link from 'next/link'
import * as React from 'react'
import ContactForm from '../components/ContactForm'
import { ContentContainer } from '../components/ContentContainer'
import { Headline } from '../components/Headline'
import Layout from '../components/Layout'

export default function LandingPage(props) {
  return (
    <Layout>
        <div className='main-container'>
            <div className='spacer-top'></div>
            <Headline line1="Kontakt" line2="dein weg zu ayni" />            
            <p>Die Praxis findest Du in Basel an der folgenden Adresse:</p>            
            <Link href="https://www.google.com/maps/place/Nonnenweg+51,+4055+Basel/@47.558846,7.5731862,17z/data=!4m5!3m4!1s0x4791b906b86db93b:0xa63dca16b6657fce!8m2!3d47.5588424!4d7.5753749">
                <a target="_blank" rel="noreferrer" className="address-map-link">
                    <strong>Praxis ayni - Silvia Ferlito</strong><br />
                    Nonnenweg 51<br />
                    4055 Basel<br />
                    <img src="pin.svg" alt="Location Pin Icon" style={{
                        width: '1.1em', float: 'left', display: 'inline-block', paddingTop: '0.3em', marginRight: '0.2em'
                    }}/>
                    mit google maps aufrufen
                </a>
            </Link>        
        </div>
        <ContentContainer primaryColor={'#faedcd'}>
            <Headline line1="Kontaktformular" line2="der raum f&uuml;r deine anfragen" />
            <p>Du hast Fragen oder m&ouml;chtest einen Termin vereinbaren? Einfach das untere Formular ausf&uuml;llen und ich melde mich direkt bei Dir!</p>            
            <ContactForm />
        </ContentContainer>   
        <div className='spacer-top'></div>
    </Layout>
  )
}