import * as React from 'react'
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import Markdown from 'react-markdown'
import { ContentContainer } from '../components/ContentContainer'
import { Headline } from '../components/Headline'
import Layout from '../components/Layout'


export default function LandingPage({ frontmatter, markdown}) {
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
              <Markdown>
                {frontmatter.description}
              </Markdown>
          </div>
          <ContentContainer shapeType={'quads2'} primaryColor={'#faedcd'}>
              <div className='spacer-top'></div>
              <Headline 
                line1={frontmatter.boxHeadline}
                line2={frontmatter.boxSubheadline}
                sublevel={false}
              />
              <Markdown>
                {frontmatter.boxContent}
              </Markdown>
              <div className='spacer-top'></div>
          </ContentContainer>   
          <div className='spacer-top'></div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const fileContent = matter(fs.readFileSync(`./content/allgemein/ueber-mich.md`, 'utf8'), {
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