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
            <Headline line1="ayni balance" line2="ausgleichend, stärkend &amp; zielführend" />
            <p>
            Ganzheitliche Lösungswege für stressbedingte Beschwerden und Burnout.
            </p>
            <Quote text="Balance findet man irgendwo in der Mitte" />
            <p>Erlerne Stress abzubauen, Stressbewältigungsstrategien im Alltag ein- und umzusetzen und kraftvoller zu werden.</p>
            <p><i>ayni balance</i> ist für dich, wenn</p>
            <ul>
                <li>du deinen Energiehaushalt in Balance bringen möchtest</li>
                <li>du dich beweglicher und ausgeglichener fühlen möchtest</li>
                <li>dein Stresslevel steigt und du nicht weisst wie du das ändern kannst</li>
            </ul>            
        </div>
        <ContentContainer shapeType={'quads2'} primaryColor={'#faedcd'}>
            <Headline line1="Angebot" line2="" />            
            <ul>
                <li>Identifikation körperliche Vitalität, mentale Belastbarkeit<br/> und Stressoren</li>
                <li>Entwicklung Stressbewältigungsstrategien,<br/> Ressourcenmanagement (Ojas) und Aufbau Resilienz</li>
                <li>Meditation, Achtsamkeitstraining</li>
                <li>Progressive Muskelrelaxation (PMR) nach<br/> Edmond Jacobson und Atemtechniken aus dem Yoga</li>
                <li>
                    Ayurvedische Massagen
                    <Link href="/informationen/ayurveda-massagen" className='more-link'>mehr erfahren</Link>
                </li>
            </ul>            
        </ContentContainer>   
        <div className='main-container'>
            <h2>Ablauf</h2>
            <p>In einem ersten Gespräch wird eine umfassende Befunderhebung durchgeführt. Basierend auf der individuellen Situation und Themen auf körperlicher, mentaler und emotionaler Ebene wird die Zielvereinbarung / der Therapieplan erstellt. Im Laufe des Behandlungszyklus wirken die positiven Änderungen im Innen wie im Aussen und verankern sich so in der Routine im Alltag.</p>
            <div className='spacer-md'></div>
            <h2>Dauer &amp; Kosten</h2>
            <ul>
                <li>Erstgespräch Thema Zieldefinition / Befunderhebung 90 Minuten</li>
                <li>Coaching / Beratungssitzung je nach Thema / Bereich und Bedarf 60 bis 120 Minuten</li>
                <li>Jeder Therapiesitzung geht ein kurzer Check-in voran</li>
                <li>Stundensatz <i>150 CHF</i> bis <i>180 CHF</i> je nach Behandlungsform / Materialeinsatz</li>
            </ul>
        </div>
        <div className='spacer-top'></div>
    </Layout>
  )
}