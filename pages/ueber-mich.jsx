import * as React from 'react'
import { ContentContainer } from '../components/ContentContainer'
import { Headline } from '../components/Headline'
import Layout from '../components/Layout'
import { Quote } from '../components/Quote'
import Head from 'next/head'

export default function LandingPage(props) {
  return (<>
      <Head>
        <title>ayni.ch - Was mich und Ayurveda verbindet</title>
        <meta name="description" content="Erfahren Sie mehr über Silvia Ferlito, Ihre Expertin für Ayurveda, Beratung und Coaching bei ayni in Basel. Mit einer Mischung aus betriebswirtschaftlicher Erfahrung und tiefem Verständnis für Ayurveda bietet Silvia individuelle Lösungen für Ihr Wohlbefinden. Ihr Motto: 'Wenn man es träumen kann, dann kann man es auch machen.'" />
        <meta name="keywords" content="Lebensreise, Ernährung, Natur, Bewegung, Kreativität, Genuss, Kultur, Management, Ayurveda, Beratung" />
      </Head>
      <Layout>
          <div className='main-container'>
              <div className='spacer-top'></div>
              <Headline line1="&Uuml;ber mich" line2="und meine lebensreise" />
              <p>Seit jeher hat gesunde und frische Ernährung, die Natur, Bewegung, Kreativität und Genuss einen grossen Stellenwert in meinem Leben. Da ich in zwei Kulturkreisen aufgewachsen bin, gilt meine Faszination auch anderen fremden und alten Kulturen. Dank betriebswirtschaftlicher Ausbildung und 20 Jahren Berufstätigkeit in der pharmazeutischen Industrie sind mir auch Management Themen und Zahlen nicht fremd.</p>
              <p>Man kann also sagen, dass ich von Natur aus sehr neugierig auf alles bin. Eine zielstrebige Macherin bin ich ebenfalls, die aber auch von weit entfernten Orten träumen, sich in Kreativität verlieren und viel lachen kann!</p>
              <Quote text={"Wenn man es träumen kann, dann kann man es auch machen."} />
              <p><i>&bdquo;Wenn man es träumen kann, dann kann man es auch machen&ldquo;</i> lautet mein Motto und so durften sich die unterschiedlichsten Träume verwirklichen. Ich ging auf viele Reisen, hatte wundervolle Begegnungen, machte wundervolle Entdeckungen und auch schwierige Erfahrungen.</p>            
              <p>Die Beobachtung von und Auseinandersetzung vorallem mit alten, weisen Menschen, ihrer Art die Welt zu sehen und in Balance mit dem Leben zu tanzen gab mir die Möglichkeit aus ihrer Tradition zu lernen. Der Impuls war entstanden mehr über Ganzheitlichkeit, Fähigkeiten Entwicklung, mentale Prozesse und Ayurveda zu lernen.</p>
              <img src="ueber-mich.png" alt="Silvia Ferlito in Beratungsgespräch" className='content-img-right' style={{shapeOutside: "url('ueber-mich.png')"}}  />
              <p>In meinen Berufsjahren in der Finanz- und Management Welt konnte ich viel gelerntes in der täglichen Arbeit ergänzen und einsetzen. Eine Reorganisation im Unternehmen, meine Gesundheit und persönliche Schicksalsschläge waren schliesslich der Auslöser für einen neuen, ganz persönlichen Berufungsweg.</p>
              <p>Heute verbinde ich meine Erfahrungen aus dem Business, der Leadership Entwicklung, dem Coaching, den Stress und Resilienz Themen, dem Mentaltraining und der psychologischen Beratung in einem integrativen Ansatz mit der Ayurveda Lehre.</p>
              <p>Willkommen in meiner Praxis <strong>ayni</strong> in Basel!</p>
          </div>
          <ContentContainer shapeType={'quads2'} primaryColor={'#faedcd'}>
              <Headline line1="Meine Ausbildungen" line2="im leben lernt man nie aus" />
              <ul>
                  <li>Ayurveda Kompementärtherapeutin i.A.</li>
                  <li>Diplom Ayurveda Ernährungs- und Massage Therapeutin </li>
                  <li>Zert. Ayurveda Ernährungs und Gesundheitberaterin </li>
                  <li>Zert. Psychologische Ayurveda Beraterin</li>
                  <li>SVEB 1 Erwachsenenbildnerin</li>
                  <li>CAS Dipl. Stress-, Resilienz-, Mental Coach </li>
                  <li>CAS Dipl. Mental Trainerin</li>
                  <li>CAS Intergal Coach</li>
                  <li>CAS General Management </li>
                  <li>CAS Strategisches Leadership</li>
                  <li>Dipl. Betriebswirtin (Bachelor of Arts)</li>
              </ul>
          </ContentContainer>   
          <div className='spacer-top'></div>
      </Layout>
    </>
  )
}