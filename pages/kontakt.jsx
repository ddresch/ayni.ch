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
            <Headline line1="Kontakt" line2="termine, fragen stellen oder einfach hallo sagen" />
            <p>
                Du m&ouml;chtest einen Termin anfragen? 
                Hast eine direkte Frage oder m&ouml;chtest einfach nur <i>Hallo</i> sagen? 
                Dann schreib mir eine Nachricht &uuml;ber das untere Kontaktformular.
            </p>
            <p>Die Praxis findest Du in Basel an der folgenden Adresse:</p>
            <div className="address-map-link">
                <p>
                    Silvia Ferlito<br />
                    Nonnenweg 51<br />
                    4055 Basel<br />
                </p>
                <a  href="https://www.google.com/maps/place/Nonnenweg+51,+4055+Basel/@47.558846,7.5731862,17z/data=!4m5!3m4!1s0x4791b906b86db93b:0xa63dca16b6657fce!8m2!3d47.5588424!4d7.5753749"
                    target="_blank" rel="noreferrer">
                    <img src="pin.svg" alt="Location Pin Icon" />
                </a>
            </div>
        </div>
        <ContentContainer primaryColor={'#faedcd'}>
            <Headline line1="Kontaktformular" line2="zeit f&uuml;r dich" />
            <p>Einfach das untere Formular ausf&uuml;llen und ich melde mich direkt bei Dir!</p>            
            <ContactForm />
        </ContentContainer>   
        <div className='spacer-top'></div>
    </Layout>
  )
}