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
            <Headline line1="ayni wellbeing" line2="individuell, entspannend &amp; gesund" />
            <p>
            Individuelle Ernährungs-, Gesundheitsberatung und Massage-Therapie für ein gesundes und energievolles Leben.
            </p>
            <Quote text="Du bist was Du isst und verdaust" />
            <p>Esse zu deiner Konstitution passend, aktivere die Intelligenz des Körpers und verfeinere dein Körpergefühl als den wichtigsten Ratgeber.</p>
            <p><i>ayni wellbeing</i> ist für dich, wenn</p>
            <ul>
                <li>Du dein Körpergefühl verbessern möchtest und z.B. an Magenbrennen, Reflux, Blähungen, Durchfall, Verstopfung oder sogar schon Schmerzen im Körper leidest</li>
                <li>Deine Ernährung an Vielfältigkeit abnimmt und Genuss zu kurz kommt</li>
                <li>Du wieder mal etwas für dich und dein Wohlbefinden machen willst</li>
            </ul>            
        </div>
        <ContentContainer shapeType={'quads2'} primaryColor={'#faedcd'}>
            <Headline line1="Angebot" line2="" />            
            <ul>
                <li>Befunderhebung und Konstitutionsbestimmung<br/> der 3 Doshas Prakriti (Urzustand) / Vikriti (Ungleichgewicht)</li>
                <li>Ayurvedische Grundregeln der Ernährung und im Leben</li>
                <li>Individuelle ayurvedische Ernährungsberatung,<br/> Begleitung, Rezepte und Rituale</li>
                <li>Ayurveda Kochkurse und Seminare</li>
                <li>
                    Ayurvedische Massagen
                    <Link href="/informationen/ayurveda-massagen" className='more-link'>mehr erfahren</Link>
                </li>
            </ul>            
        </ContentContainer>   
        <div className='main-container'>
            <h2>Ablauf</h2>
            <p>In einem ersten Gespräch wird eine umfassende Befunderhebung durchgeführt. Basierend auf der individuellen Situation und Themen auf körperlicher, mentaler und emotionaler Ebene wird der Therapieplan erstellt. Im Laufe des Behandlungszyklus wirken die positiven Änderungen im Innen wie im Aussen und verankern sich so in der Routine im Alltag.</p>
            <div className='spacer-md'></div>
            <h2>Dauer &amp; Kosten</h2>
            <ul>
                <li>Erstgespräch Befunderhebung 90 Minuten</li>
                <li>Therapieplan und Debrief 60 bis 75 Minuten</li>
                <li>Therapiesitzung je nach Behandlung und Bedarf 45 bis 90 Minuten</li>
                <li>Jeder Therapiesitzung geht ein kurzer Check-In voran</li>
                <li>Stundensatz <i>150 CHF</i> bis <i>180 CHF</i> je nach Behandlungsform / Materialeinsatz</li>
                <li>
                    Die meisten Krankenkassen übernehmen über die Zusatzversicherung einen Teil der Behandlungskosten. 
                    Ich bin beim EMR (<Link href="https://emr.ch/therapeut/silvia.ferlito/" target={'_blank'}>Erfahrungsmedizinisches Register</Link>) mit der Methode <i>Nr. 57 - Ayurveda-Ernährung und -Massage</i> registriert.<br/>
                    Meine ZSR-Nr. lautet <i>F459364</i>.<br/>
                    <Link href="https://emr.ch/therapeut/silvia.ferlito" target={'_blank'}>
                        <img src="/emr-logo-color.svg" style={{width: '30%', display: 'inline-block', marginTop: '10px'}} />
                    </Link>
                </li>
            </ul>            
        </div>
        <div className='spacer-top'></div>
    </Layout>
  )
}