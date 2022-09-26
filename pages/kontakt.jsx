import * as React from 'react'
import ContactForm from '../components/ContactForm'
import { ContentContainer } from '../components/ContentContainer'
import { Headline } from '../components/Headline'
import Layout from '../components/Layout'
import { Quote } from '../components/Quote'

export default function LandingPage(props) {
  return (
    <Layout>
        <div className='main-container'>
            <div className='spacer-top'></div>
            <Headline line1="Kontakt" line2="termine, fragen stellen oder einfach hallo sagen" />
            <p>
                Du m&ouml;chtest einen Termin anfragen? Hast eine direkte Frage oder m&ouml;chtest einfach nur Hallo sagen? Dann schreib mir einfach eine Nachricht &uuml;ber das Kontaktformular.
            </p>
            <p>Meine Praxis findest Du in Basel an der folgenden Adresse:</p>
            <p>
                Silvia Ferlito<br />
                Nonnenweg 51<br />
                4055 Basel<br />
                <br />
            </p>      
        </div>
        <ContentContainer primaryColor={'#faedcd'}>
            <Headline line1="Kontaktformular" line2="zeit f&uuml;r dich" />
            <p>Einfach das untere Formular ausf&uuml;llen und ich melde mich direkt bei Dir!</p>            
            <ContactForm />
        </ContentContainer>   
    </Layout>
  )
}