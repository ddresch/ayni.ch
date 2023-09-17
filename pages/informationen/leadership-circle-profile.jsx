import Link from 'next/link'
import * as React from 'react'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import { Quote } from '../../components/Quote'
import Head from 'next/head'

export default function Page(props) {
  return (<>
      <Head>
          <title>ayni.ch - Leadership Circle Profile&trade; in Basel</title>
          <meta name="description" content="Entdecken Sie das Leadership Circle Profile™ (LCP) bei ayni in Basel, die führende 360 Grad Führungsstil Analyse. Das LCP bietet eine umfassende Beurteilung Ihrer Führungskompetenzen und inneren Überzeugungen. Es integriert reaktive und kreative Führungsstile und bietet tiefe Einblicke in Ihre Verhaltensmuster. Ideal für die Weiterentwicklung Ihrer Führungseffektivität." />
      </Head>
      <Layout>
          <div className='main-container'>
              <div className='spacer-top'></div>
              <Headline line1="leadership circle profile&trade;" line2="eine 360° sicht auf sich" />
              <p>              
                Leadership Circle Profile&trade; - LCP ist die führende 360 Grad Führungsstil Analyse. Das LCP ist ein Stärken basiertes 360-Modell und weist den Führungsstil in einer komplexen Mischung von Führungskompetenzen und inneren Überzeugungen aus. Dies unterstützt beim Auf- und Ausbau von Führungskompetenzen, -qualität und -effizienz. Jede der Ebenen enthält eine beachtliche Menge an Informationen und geht auch über die reinen Führungskompetenzen hinaus.
              </p>
              <p>
                <img src="/logo-lcp.png" alt="Leadership Circle Profile Logo" className='content-img-center' />
                Durch die visuelle Integration in Form einer kreisförmigen Grafik können bestimmte Muster und Schwerpunkte auf Anhieb erkannt werden. Die meisten anderen Instrumente zeigen die Kompetenzen als einfache Liste an und basieren auf reinen Verhaltensfragen.
              </p>
              <Quote text={"Jede der Ebenen enthält eine beachtliche Menge an Informationen und geht auch über die reinen Führungskompetenzen hinaus."} />
              <p>Das LCP integriert die Analyse reaktiver Führungsstile, kreativer Führungskompetenzen und schaut in die zugrundeliegenden Verhaltensmuster und Annahmen, die im aktuellen Kontext hervorkommen.</p>
              <p>Angesichts dessen ist das LCP eine aussagekräftige Beurteilung und Basis für die Weiterentwicklung der eigenen Stärken und der Führungseffektivität. Gleichzeitig werden die zugrunde liegenden Muster bewusst, die die Führungseffektivität verringern können. All dies wird unter Berücksichtigung der jeweiligen Entwicklungsstufe der Führungskräfte durchgeführt.</p>
              <img src="/lcp-example.png" alt="Leadership Circle Profile Beispiel" className='content-img-center' />
              <span style={{fontSize: '12px', textAlign: 'center', display: 'block'}}>copyright Leadership Circle®, all rights reserved. <Link href="https://www.leadershipcircle.com">www.leadershipcircle.com</Link></span>
              <p>Abgesehen davon hat das LCP noch eine weitere Relevanz: Es verfügt über eine solide Datengrundlage, die sich auf Basis der Entwicklungsstufen von Erwachsenen, sowie auf psychologische und spirituelle Quellen stützt. Das macht das hiermit zu einem wirklich holistischen und umfassenden menschlichen Ansatz!</p>
          </div>
          <div className='spacer-top'></div>
      </Layout>
    </>
  )
}