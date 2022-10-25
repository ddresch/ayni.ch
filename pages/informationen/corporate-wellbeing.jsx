import { urlObjectKeys } from 'next/dist/shared/lib/utils'
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
            <Headline line1="corporate wellbeing" line2="den bedürfnissen der mitarbeiter rechnung tragen" />
            <p>2020 war für alle ein Jahr des Umdenkens und das Umdenken hält uns noch immer auf Trab. COVID-19 hat alle gezwungen, von heute auf morgen die gesamte Arbeitsweise zu überdenken und umzustrukturieren. Homeoffice statt Büro, Videocalls statt Besprechungen vor Ort, Küche statt Kantine.</p>
            <Quote text={"Das 'New Normal' hat jedoch enorme Auswirkungen auf Unternehmen sowie Mitarbeiter gehabt"} />
            <p>Durch die Coronakrise hat sich plötzlich mehr denn je alles um Digitalisierung gedreht. Das &apos;New Normal&apos; hat jedoch enorme Auswirkungen auf Unternehmen sowie Mitarbeiter gehabt.</p>
            <p>Nun werden Themen wie mentale Gesundheit, Stress, Depressionen, Sinnhaftigkeit, Gesundheit, Ganzheitlichkeit mehr Bedeutung gegeben, sie benötigen auch entsprechend den Raum dafür.</p>
            <p>Mit meinem Angebot trage ich den Bedürfnissen der Arbeitnehmer Rechnung und helfe so mit einer Corporate Wellbeing Offensive auch den Unternehmen mit gesünderen, zufriedeneren, aktiveren und ausbalancierten Mitarbeitern. Hierbei betrachte ich das Bio-soziale-Konstrukt der Menschen ganzheitlich, schliesse körperliches Wohlbefinden, Gesundheit und mentale Aspekte gleichermassen ein.</p>
        </div>
        <div className='spacer-top'></div>
    </Layout>
  )
}