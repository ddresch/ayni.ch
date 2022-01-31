import Head from 'next/head'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax'
import styles from '../styles/Home.module.css'

import { ContentContainer } from '../components/ContentContainer'
import { Header } from '../components/Header'
import { Headline } from '../components/Headline'
import { Quote } from '../components/Quote'
import { MaskImage } from '../components/MaskImage'
import { Shape } from '../components/Shape'
import { Footer } from '../components/Footer'

export default function Home() {
  const para1 = useParallax({ speed: -50 });
  const para2 = useParallax({ speed: -60 });

  return (
    <div>
      <Head>
        <title>ayni.ch</title>
        <meta name="description" content="Ayni Coaching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div ref={para1.ref} style={{position: 'absolute', marginLeft: '-20%'}}>
        <Shape shapeType={'quads2'} shiftedOutline={false} primaryColor={'#65A882'} secondaryColor={'#E6F1EB'} />
      </div>

      <div ref={para2.ref} style={{position: 'absolute', right: '-500px', top: '90%'}}>
        <Shape shapeType={'quads1'} shiftedOutline={false} primaryColor={'#65A882'} secondaryColor={'#E6F1EB'} />
      </div>
      
      <main className={styles.main}>
        <ContentContainer shapeType="quads1">        
          <Headline line1='Über' line2='Mich' />
          <p>
          Ich bin eine begeisterte Bäckerin, Köchin und Geniesserin, Künstlerin, Fotografin, Wanderin, Reisende und Polyglott. Dank Betriebswirtschaftlicher Ausbildung auch Freundin der Management Themen und Zahlenwelt. Ich bin von Natur aus sehr neugierig auf alles. Bin eine zielstrebige Macherin, die aber auch von weit entfernten Orten Träumen und sich in Kreativität verlieren und viel lachen kann!                
          </p>
          <Quote text="Wenn man es träumen kann, dann kann man es auch machen." />
          <p>
          „Wenn man es träumen kann, dann kann man es auch machen“ lautet mein Motto und so durften sich viele Träume verwirklichen. Ich ging auf manch lange Reise quer durch die Welt. Auf diesen Reisen hatte ich wundervolle Begegnungen, machte wundervolle Entdeckungen und auch schwierige Erfahrungen.                
          </p>      
          <MaskImage url="portrait-wall.jpg" width="100%" shapeType="quads1" maskPos="90%" rightPos='-250px' topPos='-430px' />
        </ContentContainer>
        <ContentContainer shapeType="quads2">
          <p>
          Die Beobachtung von und Auseinandersetzung mit alten, weisen Menschen, ihrer Art die Welt zu sehen und in Balance mit dem Leben zu tanzen gab mir die Möglichkeit viel traditionelles zu erlernen. Diese Faszination gab mir letztlich auch den Impuls mehr über alte Kulturen, Ganzheitlichkeit, Fähigkeiten Entwicklung sowie Mentale Prozesse und auch Ayurveda zu lernen.
          </p>
          <p>
          In den 20 Berufsjahren in der Finanz- und Management Welt konnte ich viel gelerntes in der täglichen Arbeit ergänzen und einsetzen. Eine berufliche Änderung und persönliche Schicksalsschläge waren schliesslich der Auslöser für einen neuen, ganz persönlichen Berufungsweg.
          </p>      
          <p>
          Heute verbinde ich meine Erfahrungen aus dem Business, der Leadership Entwicklung, dem Coaching, den Stress und Resilienz Themen, dem Mentaltraining und psychologischer Beratung in einem integrativen Ansatz mit der Ayurveda Philosophie. Meine Praxis ayni wurde geboren.
          </p>
        </ContentContainer>
        <ContentContainer shapeType="quads3">
          <Headline line1='Über' line2='Ayni' />
          <p>
          Das Wort ayni kommt aus den Anden und bedeutet auf Quechua Schenken. Ayni ist ein kreativer Prozess, der auf Realität von Fülle im Leben basiert. Er bezeichnet die Gegenseitigkeit und Wechselbeziehung zwischen dem Innen und den Aussen, dem Nehmen und Geben.
          </p>
          <Quote text="Gib Dir zurück, damit Du anderen geben kannst." />
          <p>
          Ayni ist ein universelles Gesetz vom Gleichgewicht im Universum, einem ständigen Austausch zwischen Mensch, Natur und Universum auch auf energetischer Ebene.<br/>Durch diesen Austausch ist das eine<br/> im anderen vorhanden.
          </p>
          {/* Photo by <a href="https://unsplash.com/@tristan_gevaux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tristan Gevaux</a> on <a href="https://unsplash.com/s/photos/peru?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
          <MaskImage url="tristan-gevaux-3iCE5Bbr87U-unsplash.jpg" width="60%" shapeType="quads2" maskPos="50%" rightPos='-140px' topPos='-770px' />
        </ContentContainer>
        <ContentContainer shapeType="quads2">
          <p>
          So verhält sich es auch im Ayurveda. Das Universum als Makrokosmos und der Mensch als Mikrokosmos widerspiegeln sich in einem direkten Zusammenhang und stehen in Wechselbeziehung zu sich.
          </p>
          <p>
          Diese beiden Konzepte vereine ich mit meiner Arbeit als Beraterin und Coach mit dem Leitsatz „Gib Dir zurück, damit Du anderen geben kannst“ für ein Gleichgewicht zwischen Mensch, Natur und Universum und für den Einklang zwischen Körper, Geist und Seele.
          </p>      
          <p>
          So verbinde ich generelle Lebensthemen, persönliches Wachstum, Leadership Entwicklung, Ernährung, Lifestyle und Wellbeing und biete eine gezielte individuelle Begleitung an.
          </p>
          <MaskImage url="beratung-individuell.png" width="100%" shapeType="quads2" maskPos="80%" rightPos='70px' topPos='10px' />
        </ContentContainer>
      </main>

      <Footer />
    </div>
  )
}
