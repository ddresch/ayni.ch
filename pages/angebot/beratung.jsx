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
            <Headline line1="ayni beratung" line2="lebendig, praxisnah &amp; alltagsgerecht" />
            <p>
            Mentaltraining und Psychologische Beratung des Ayurveda lebendig, praxisnah und alltagsgerecht.
            </p>
            <Quote text="Erfolg entsteht im Kopf" />
            <p>Nutze Deine verborgenen Ressourcen. Aktiviere neue Energien, um erfolgreicher zu sein und eine bessere Lebensbalance zu erreichen.</p>
            <p><i>ayni beratung</i> ist für dich, wenn</p>
            <ul>
                <li>du deine verborgenen Ressourcen aktivieren möchtest</li>
                <li>du mentale und körperliche Belastungen besser bewältigen willst</li>
                <li>du deine Energie wieder erlangen möchtest, um erfolgreicher zu sein</li>
            </ul>            
        </div>
        <ContentContainer shapeType={'quads2'} primaryColor={'#faedcd'}>
            <Headline line1="Angebot" line2="" />
            <ul>
                <li>Ressourcen, Coaching, Trauerarbeit und -Begleitung</li>
                <li>Achtsamkeitstraining, Eigenwahrnehmung</li>
                <li>Geistiges Gleichgewicht (Tri-Vargas Coaching: Auflösung der 3-er Matrix von Handlungen/Purpose, Wohlstand und Wünschen)</li>
                <li>Identifikation von Hinderungsfaktoren, Verankerung hilfreicher<br/>Verhaltens- und Glaubensmuster</li>
                <li>Arbeit mit dem inneren Kritiker<br/> und Aufstellungsarbeit</li>
            </ul>            
        </ContentContainer>   
        <div className='main-container'>
            <h2>Ablauf</h2>
            <p>In einem ersten Gespräch beleuchten wir das Thema/die Themen und definieren gemeinsam das Ziel für die Zeit der Zusammenarbeit. In den laufenden Sitzungen und der Prozessarbeit verankern wir die hilfreichen Änderungen in den Alltag.</p>
            <div className='spacer-md'></div>
            <h2>Dauer &amp; Kosten</h2>
            <ul>
                <li>Erstgespräch Thema Zieldefinition 90 Minuten</li>
                <li>Coaching / Beratungssitzung je nach Thema / Bereich und Bedarf 60 bis 120 Minuten</li>
                <li>Vor jeder Therapiesitzung geht ein kurzer Check-in voran</li>
                <li>Stundensatz <i>150 CHF</i> bis <i>180 CHF</i> je nach Behandlungsform / Materialeinsatz</li>
            </ul>
        </div>
        <div className='spacer-top'></div>
    </Layout>
  )
}