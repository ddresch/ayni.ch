import fs from 'fs'
import * as React from 'react'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import Head from 'next/head'
import Markdown from 'react-markdown'
import { Headline } from '../components/Headline'
import Layout from '../components/Layout'
import { useEffect } from 'react'

export default function Page({ frontmatter, markdown}) {

  useEffect(() => {
    console.log('Testimonials useEffect', frontmatter, markdown)
  }, [])

  return (<>
    <Head>
      <title>{frontmatter.seoTitle}</title>
      <meta name="description" content={frontmatter.seoDescription} />
      <meta name="keywords" content={frontmatter.seoKeywords} />
    </Head>
    <Layout>
        <div className='main-container'>
            <div className='spacer-top'></div>
            <Headline 
              line1={frontmatter.title}
              line2={frontmatter.subtitle}
              sublevel={false}
            />
            <h2>May, 45, The Netherlands</h2>
            <p>Silvia is an excellent health and wellbeing coach, tuned to both, to the wide range of resources of traditional Ayurvedic medicine, as well as to the very modern conditions in which we find ourselves. She has excellent attention to detail as well as genuine warmth, compassion and many other admirable human qualities.</p>
            <p>Thanks to Silvia&apos;s thorough and thoughtful consultation, she was able to recommend to me a range of measures to change my diet, daily routine, and daily practices, for enormously positive results. Changes in diet, eating habits and daily routines—along with the integration of a number of Ayurvedic daily health practices—have significantly improved/increased my energy, balance, outlook on life, and physical, mental and spiritual well-being.</p>
            <p>As a busy professional facing a great deal of stress and over-work, this was no small feat. Silvia is a talented coach and one that I would highly recommend.</p>
            
            <div className='spacer-md'></div>
            <h2>Christiane, 62, Schweiz</h2>
            <p>Ich habe eine Upvaas-Ayurveda Fastenwoche - angeleitet von Silvia Ferlito – gemacht und bin sehr zufrieden. Silvia hat alles wunderbar vorbereitet und ich fühlte mich sehr gut, an meinen Bedürfnissen orientiert, von ihr begleitet. Sie war immer offen für meine Fragen und ich bekam sehr hilfreiche Antworten. So habe ich viel gelernt über Ayurveda, wie ich durch Essen und Trinken besser auf mich acht gebe, in Balance und Ruhe komme. Das Resultat der Woche – mehr Leichtigkeit und Beweglichkeit – hat mich begeistert.</p>
            <p>Es hat grosse Freude gemacht, mit Silvia zu arbeiten. Ich empfehle sie sehr gern als Health und Wellbeing Coach weiter.</p>
            
            <div className='spacer-md'></div>
            <h2>Ursina, 35, Schweiz</h2>
            <p>Eine Ayurveda Behandlung in der Praxis ayni kann ich nur weiterempfehlen, alleine wegen Silvias offener und herzlicher Art! Silvia empfängt ihre Kunden mit einer Tasse frischem Tee in ihrem schönen Haus, das helle Beratungszimmer ist freundlich eingerichtet, so fühlt man sich sofort wohl.</p>
            <p>Das kompetente Beratungsgespräch war angenehm und umfassend und Silvia ist auf all meine Fragen eingegangen. Sie hat mir auch viele anregende Gesundheits- und Ernährungstipps mitgegeben, das fand ich sehr wertvoll.</p>
            <p>Die Ayurveda Massage war wundervoll wohltuend, angenehm und entspannend. Silvia ging auf meine individuellen Bedürfnisse ein und passte den Druck ihrer Griffe an, was ich sehr schätze. Ich fühlte mich bei ihr in kompetenten Händen gut aufgehoben und konnte einfach geniessen.</p>
        </div>        
        <div className='spacer-top'></div>
    </Layout>
  </>)
}


export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/allgemein/testimonials.md`, 'utf8'), {
    engines: {yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA })}
  })
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { 
      frontmatter, 
      markdown 
    }
  }
}