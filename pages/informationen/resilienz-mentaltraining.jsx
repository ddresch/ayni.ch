import * as React from 'react'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import { Quote } from '../../components/Quote'
import Head from 'next/head'

export default function Page(props) {
  return (<>
      <Head>
        <title>Resilienz und Mentaltraining in Basel</title>
        <meta name="description" content="Stärken Sie Ihre innere und äußere Widerstandskraft mit Resilienz- und Mentaltraining bei ayni. Erfahren Sie, wie Ihr Unterbewusstsein Ihr tägliches Handeln beeinflusst und wie Sie durch gezieltes Mentaltraining und Resilienzübungen Stress bewältigen, alte Glaubenssätze aufbrechen und ein erfülltes Leben führen können. Mit einem gesunden Geist hat Burnout keine Chance!" />
        <meta name="keywords" content="Resilienz, Mentaltraining, Unterbewusstsein, Stressbewältigung, Achtsamkeit, Meditation, Atemübungen, Burnout" />
      </Head>
      <Layout>
          <div className='main-container'>
              <div className='spacer-top'></div>
              <Headline line1="resilienz und mentaltraining" line2="stark im innen und aussen" />
              <p>Jeder Mensch besitzt ein Bewusstsein und ein Unterbewusstsein (psychologisch als Unbewusstes bezeichnet). Unser tägliches Handeln wird zu ca. 90 % von unserem Unterbewussten gesteuert.</p>
              <p>Das Unterbewusstsein ist unser Datenchip, der alle Informationen über uns, Programme, Glaubenssätze, Erinnerungen und Gefühle beherbergt, welche über Jahre in der Kindheit oder schon vor der Geburt aufgenommen und gespeichert hat.</p>
              <p>Was also, wenn ein Glaubenssatz wie <i>“das bekommst du ja ohnehin nicht hin”</i> uns hindert Neues zu probieren und Herausforderungen anzunehmen?</p>
              <p>Machen wir es uns also wie die Spitzensportler zunutze, mit dem Mentaltraining und deren Vorstellung einer Bewegung eine bessere Ausführung zu erreichen. Sinngemäss für uns, mit der Vorstellung einer neuer Denk- und Handlungsstrategie alte Prägungen aufzulösen und das gewünschte Ziel zu verankern.</p>
              <Quote text={"Mit einem gesunden Geist hat Burnout keine Chance!"} />
              <p>Mit Mentaltraining das Unterbewusstsein erreichen und neue Wege gehen! Mentaltraining ermöglicht es mentales, unentdecktes Potenzial zu nutzen und das Leben bewusst und glücklich zu gestalten.</p>
              <p>Resilienz ist die geistig, mentale Widerstandskraft. Durch Resilienz werden wir anpassungsfähiger und können dadurch mit Problemen, Veränderungen im Leben oder Stresssituationen besser umgehen.</p>
              <p>Mentaltraining, Achtsamkeitsübungen, Meditationen und auch Atemübungen können vor Stress und anderen psychischen Belastungen schützen und machen uns resilienter. Auch die Ernährung, unser Lebensrhythmus und unsere Tagesroutine haben einen grossen Einfluss auf unsere geistige Kraft. Mit einem gesunden Geist hat Burnout keine Chance!</p>
          </div>
          <div className='spacer-top'></div>
      </Layout>
    </>
  )
}