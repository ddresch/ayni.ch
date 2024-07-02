import fs from 'fs'
import * as React from 'react'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import Head from 'next/head'
import Markdown from 'react-markdown'
import { Headline } from '../components/Headline'
import Layout from '../components/Layout'

export default function Page({ frontmatter, markdown}) {
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
            {frontmatter.testimonial.map((item, index) => (
              <div key={'testimonial' + index}>
                <div className='spacer-md'></div>
                <h2>{item.title}</h2>
                <Markdown>{item.description}</Markdown>
              </div>
            ))}            
        </div>        
        <div className='spacer-top'></div>
    </Layout>
  </>)
}

export async function getStaticProps() {
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