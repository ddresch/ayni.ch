import * as React from 'react'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import { Quote } from '../../components/Quote'
import Head from 'next/head'

export default function Page(props) {
  return (<>
      <Head>
        <title>ayni.ch - Ayurveda Praxis in Basel</title>
        <meta name="description" content="Erfahren Sie mehr über Ayurveda, das Wissen vom Leben, bei ayni in Basel. Entdecken Sie die Grundlagen der 3 Doshas - Vata, Pitta, Kapha - und die Gunas für mentale Balance. Ziel des Ayurveda ist Svastha, das Verweilen im Selbst, durch die richtige Balance von Körper, Geist und Seele." />
        <meta name="keywords" content="Ayurveda, Doshas, Vata, Pitta, Kapha, Gunas, Tamas, Rajas, Sattva, Lebensphilosophie, Gesundheit" />
      </Head>
      <Layout>
          <div className='main-container'>
              <div className='spacer-top'></div>
              <Headline line1="Ayurveda" line2="das wissen vom leben" />
              <p>Das Wort Ayurveda aus dem Sanskrit bedeutet übersetzt <i>“das Wissen vom Leben”</i>.</p>
              <p>So umfasst Ayurveda die Wechselbeziehung aller Dinge untereinander und beschreibt die Einbettung der menschlichen Natur in die Gesetze des Universums.</p>
              <p>Caraka, der berühmte Ayurveda-Arzt und Philosoph (ca. 400 v. Chr.) beschrieb die Beziehung zwischen dem Menschen und dem Universum folgendermassen:</p>
              <p><i>„Der Mensch ist das Abbild des Universums. Was immer den Menschen in seiner Verschiedenheit ausmacht, formt auch das Universum. Die Teile, die das Universum bilden, formen wiederum den Menschen.“</i></p>
              <p>Mit Teilen sind die fünf Elemente: Wasser, Feuer, Erde, Luft und Äther/Raum, also die Bausteine des Universums gemeint.</p>
              <Quote text={"Ziel des Ayurveda ist Svastha, das verweilen im Selbst."} />
              <p>Ein Hauptwerkzeug bei der Anwendung von Ayurveda ist die Klassifizierung von drei fundamentalen bioenergetischen Prinzipien, bekannt als die 3 Doshas:</p>
              <ul>
                  <li>Vata – das Bewegungsprinzip</li>
                  <li>Pitta – das Transformationsprinzip</li>
                  <li>Kapha – das Stabilitätsprinzip</li>
              </ul>
              <p>Diese Prinzipien bestimmen die individuellen physischen Eigenschaften eines jeden Menschen und seinen Bezug zur Umwelt. Aus ihnen kann man die richtigen Elemente in Ernährung, Lebensstil etc. auswählen, um eine Balance im Leben zu halten.</p>
              <p>So wie unser Körper von den drei Doshas regiert wird, so bestimmen auch drei geistige Kräfte über mentale Balance.</p>
              <p>Die sogenannten Gunas werden auch als Doshas des Geistes bezeichnet und bestimmen mit ihren Ausprägungen die emotionalen und intellektuellen Qualitäten, Interessen, Schwächen und Stärken unserer Psyche auf den drei Attributen des Geistes:</p>
              <ul>
                  <li>Tamas</li>
                  <li>Rajas</li>
                  <li>Sattva</li>
              </ul>
              <p>Ziel des Ayurveda ist Svastha, das Verweilen im Selbst. Es bedeutet den Körper, Geist und Seele zu stärken und den Menschen somit Gesund zu halten in allen Lebensbereichen.</p>
          </div>
          <div className='spacer-top'></div>
      </Layout>
    </>
  )
}