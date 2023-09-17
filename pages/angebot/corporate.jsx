import * as React from 'react'
import { ContentContainer } from '../../components/ContentContainer'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import { Quote } from '../../components/Quote'
import Head from 'next/head'

export default function Page(props) {
  return (<>
        <Head>
            <title>Corporate Wellbeing und Ayurveda in Basel</title>
            <meta name="description" content="Willkommen bei ayni corporate in Basel, Ihrem Partner für umfassende, pragmatische und nachhaltige Lösungen im Bereich Corporate & Employee Wellbeing. Wir bieten Einzelsitzungen, Seminare und Trainings zu Themen wie Resilienz, Achtsamkeit und Teamdynamik. Flexible Dauer und Kosten. Gestalten Sie einen gesunden und resilienten Arbeitsplatz heute." />
            <meta name="keywords" content="ayni corporate, Corporate Wellbeing, Employee Wellbeing, Organisationsentwicklung, Kulturwandel, Resilienz, Teamdynamik" />
        </Head>
        <Layout>
            <div className='main-container'>
                <div className='spacer-top'></div>
                <Headline line1="ayni corporate" line2="umfassend, pragmatisch &amp; nachhaltig" />
                <p>
                Ganzheitliche Lösungswege für ein nachhaltiges Corporate &amp; Employee Wellbeing.
                </p>
                <Quote text="Ein gesunder Geist in einem gesunden Körper hält auch ein Unternehmen gesund!" />
                <p>Nutze die Ressourcen gesunder, motivierter, sinnerfüllter und glücklicher Menschen, um das Unternehmen gesund zu halten.</p>
                <p><i>ayni corporate</i> ist für dich, wenn</p>
                <ul>
                    <li>du Organisationsänderungen aktiv und positiv für alle Beteiligten in Angriff nehmen willst</li>
                    <li>du einen Kulturwandel und Mindshift erreichen willst</li>
                    <li>du Resilienz, Gesundheit und Freude als Ziel für Deine Mitarbeiter und Organisation siehst</li>
                </ul>            
            </div>
            <ContentContainer shapeType={'quads2'} primaryColor={'#faedcd'}>
                <Headline line1="Angebot" line2="" />            
                <ul>
                    <li>Einzelsitzungen z.B. Geistiges Gleichgewicht (Tri-Vargas Coaching)</li>
                    <li>Seminare zum Thema mentale Gesundheit aus ayurvedischer Sicht</li>
                    <li>Resilienz- und Achtsamkeitstraining</li>
                    <li>Seminare zu Kommunikation und Teamdynamik<br/> basiert auf Typenkonstitution</li>
                    <li>Seminare zum Thema Ernährung und Wellbeing</li>
                </ul>            
            </ContentContainer>   
            <div className='main-container'>
                <h2>Ablauf</h2>
                <p>In einem ersten Gespräch lernen wir uns kennen und ertasten die Art und Weise der Zusammenarbeit. Mit dem Konzept und Definition der Themen / Bereiche entscheiden wir über Deliverables sowie den Zeithorizont der Zusammenarbeit.</p>
                <div className='spacer-md'></div>
                <h2>Dauer &amp; Kosten</h2>
                <ul>
                    <li>nach Bedarf und Vereinbarung</li>
                    <li>Abrechnung je nach Leistung und Aufwand</li>
                </ul>
            </div>
            <div className='spacer-top'></div>
        </Layout>
    </>
  )
}