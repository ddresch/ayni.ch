import fs from 'fs'
import * as React from 'react'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Markdown from 'react-markdown'

export default function Post({ frontmatter, markdown}) {
  return (<>
      <Head>
        <title>CMS Page: {frontmatter.title}</title>
        <meta name="description" content="Entdecken Sie ayni balance für ganzheitliche Lösungen bei stressbedingten Beschwerden und Burnout in Basel. Wir bieten individuelle Therapiepläne, Stressbewältigungsstrategien, Achtsamkeitstraining und Ayurvedische Massagen. Erstgespräch ab 150 CHF. Krankenkassen-akzeptiert. Finden Sie Ihre innere Balance heute." />
        <meta name="keywords" content="ayni balance, Stressbewältigung, Burnout, Resilienz, Achtsamkeit, Mentaltraining, Stressmanagement" />
      </Head>
      <Layout>
        <div className='main-container'>
          <div className='spacer-top'></div>
          <Headline line1={frontmatter.title}
                    line2={frontmatter.subtitle}
                    sublevel={false}
          />
          <div className='markdown-body'>
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
        <div className='spacer-top'></div>
      </Layout>
  </>)
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/informations/${slug}.md`, 'utf8'), {
    engines: {yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA })}
  })
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown }
  }
}
  
export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/informations')

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false // This shows a 404 page if the page is not found
  }
}