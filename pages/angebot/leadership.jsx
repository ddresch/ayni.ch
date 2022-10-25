import Link from 'next/link'
import * as React from 'react'
import { ContentContainer } from '../../components/ContentContainer'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import { Quote } from '../../components/Quote'

export default function Page(props) {
  return (
    <Layout>
        <div className='main-container'>
            <div className='spacer-top'></div>
            <Headline line1="ayni leadership" line2="gezielt, aufbauend &amp; nachhaltig" />
            <p>
            Unterstützung bei Persönlichkeits-, Karriereentwicklung und bei der Bewältigung von Lebenskrisen.
            </p>
            <Quote text="Wer sein Ziel kennt, findet den Weg" />
            <p>Entdecke neue Perspektiven, Entwicklungsmöglichkeiten und Dein Potenzial für Deine berufliche und persönliche Entfaltung.</p>
            <p><i>ayni leadership</i> ist für dich, wenn</p>
            <ul>
                <li>du einen neuen beruflichen Weg einschlagen möchtest und Dein volles Potenzial leben willst</li>
                <li>du dich nach mehr persönlicher Entfaltung sehnst</li>
                <li>deine Leadership Kompetenzen ausgebaut werden und wachsen wollen</li>
            </ul>            
        </div>
        <ContentContainer shapeType={'quads2'} primaryColor={'#faedcd'}>
            <Headline line1="Angebot" line2="" />            
            <ul>
                <li>Leadership Circle Profile&trade; 360 Grad Bewertung</li>
                <li>Purpose &amp; Value Coaching </li>
                <li>Emotionale Abstimmung</li>
                <li>Geistiges Gleichgewicht (Tri-Vargas Coaching)</li>
                <li>Begleitung bei Neuorientierung, Zieldefinitionen und Krisen</li>
            </ul>            
        </ContentContainer>   
        <div className='main-container'>
            <h2>Ablauf</h2>
            <p>In einem ersten Gespräch beleuchten wir das Thema/die Themen, definieren gemeinsam das Ziel für die Zeit der Zusammenarbeit. Beim LCP speziell vereinbaren wir eine Reihe von Terminen für Vorbereitung, Debrief und Follow-up Coaching Sessions.</p>
            <div className='spacer-md'></div>
            <h2>Dauer &amp; Kosten</h2>
            <ul>
                <li>Erstgespräch Thema Prozess- und Zieldefinition 90 Minuten</li>
                <li>Coaching / Beratungssitzung je nach Thema / Bereich und Bedarf 60 bis 120 Minuten</li>
                <li>LCP Onboarding Session 30 - 45 Minuten, Debrief 90 Minuten, Follow-up Sessions je 60 Minuten</li>
                <li>Abrechnung je nach Leistung und Aufwand</li>
            </ul>
        </div>
        <div className='spacer-top'></div>
    </Layout>
  )
}