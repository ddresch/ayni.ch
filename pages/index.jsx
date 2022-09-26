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
            <Headline line1="Silvia Ferlito" line2="ayurveda, beratung &amp; coaching" />
            <p>
                Willkommen bei ayni - Praxis für Ayurveda Ernährungs- und Massagetherapie, Beratung und Coaching.
            </p>
            <p>
                <img src="portrait-wall.png" className='content-img-right' alt="Portrait Silvia Ferlito" />
                Das Wort ayni kommt aus den Anden und bedeutet auf Quechua Schenken. Damit wird die gegenseitige Hilfe der Mitglieder einer Gemeinschaft beschrieben. Ayni bezeichnet somit die Gegenseitigkeit und Wechselbeziehung zwischen dem Innen und Aussen, dem Nehmen und Geben.
            </p>
            <Quote text="Gib Dir zurück damit Du anderen geben kannst."/>
            <p>                
                Durch dieses universelle Gesetz von Gleichgewicht im Universum, dem ständigen Austausch zwischen Mensch, Natur und Universum auch auf energetischer Ebene ist das eine im Anderen vorhanden. 
            </p>
            <p>
                So verhält sich es auch im Ayurveda. Das Universum als Makrokosmos und der Mensch als Mikrokosmos widerspiegeln sich in einem direkten Zusammenhang und stehen in Wechselbeziehung zu sich. 
            </p>
            <p>
                Diese beiden Konzepte vereine ich in meiner Arbeit mit dem Leitsatz <i>„Gib Dir zurück, damit Du anderen geben kannst.“</i> für ein Gleichgewicht zwischen Mensch, Natur und Universum und für den Einklang zwischen Körper, Geist und Seele.
            </p>
            <p>
                Mit meiner Arbeit verbinde ich generelle Lebensthemen, persönliches Wachstum, Leadership Entwicklung, Ernährung, Lifestyle und Wellbeing und biete eine gezielte individuelle Begleitung an.
            </p>
        </div>
        <ContentContainer primaryColor={'#faedcd'}>
            <Headline line1="Termin anfragen" line2="zeit f&uuml;r dich" />
            <p>Du m&ouml;chtest einen Termin anfragen? Einfach das untere Formular ausf&uuml;llen und ich melde mich direkt bei Dir!</p>            
            <ContactForm />
        </ContentContainer>       
        <div className='spacer-top'></div> 
    </Layout>
  )
}