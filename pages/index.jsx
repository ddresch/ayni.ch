import Link from 'next/link'
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

            <div className='spacer-md'></div>
            <Headline line1="Mein Angebot umfasst" line2="" />            
            <ul>
                <li>
                    <b>ayni wellbeing:</b>&nbsp;
                    Individuelle Ayurveda Ernährungs-, Gesundheitsberatung und Massagetherapie für ein gesundes und energievolles Leben
                    <Link href="angebot/wellbeing" className='more-link'>mehr erfahren</Link>
                </li>
                <li>
                    <b>ayni balance:</b>&nbsp; 
                    Ganzheitliche Lösungswege für stressbedingte Beschwerden, Burnout, Resilienz und Mentaltraining
                    <Link href="angebot/balance" className='more-link'>mehr erfahren</Link>
                </li>
                <li>
                    <b>ayni beratung:</b>&nbsp; 
                    Coaching, Mentaltraining und Psychologische Beratung des Ayurveda lebendig, praxisnah und alltagsgerecht
                    <Link href="angebot/beratung" className='more-link'>mehr erfahren</Link>
                </li>
                <li>
                    <b>ayni leadership:</b>&nbsp; 
                    Unterstützung bei Persönlichkeits-, Karriereentwicklung mit der LCP 360 Grad Bewertung und bei der Bewältgung von Lebenskrisen
                    <Link href="angebot/leadership" className='more-link'>mehr erfahren</Link>
                </li>
                <li>
                    <b>ayni corporate:</b>&nbsp; 
                    Ganzheitliche Lösungswege für ein Nachhaltiges Corporate &amp; Employee Wellbeing
                    <Link href="angebot/corporate" className='more-link'>mehr erfahren</Link>
                </li>
            </ul>
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