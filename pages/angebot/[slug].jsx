import fs from 'fs'
import * as React from 'react'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Markdown from 'react-markdown'
import { ContentContainer } from '../../components/ContentContainer'

export default function Post({ frontmatter, markdown}) {  
  return (<>
      <Head>
        <title>{frontmatter.seoTitle}</title>
        <meta name="description" content={frontmatter.seoDescription} />
        <meta name="keywords" content={frontmatter.seoKeywords} />
      </Head>
      <Layout>
        <div className='main-container'>
          <div className='spacer-top'></div>
          <Headline line1={frontmatter.title}
                    line2={frontmatter.subtitle}
                    sublevel={false}
          />
          <div className='markdown-body'>
            <Markdown>
              {frontmatter.block1}
            </Markdown>
          </div>
        </div>
        <ContentContainer shapeType={'quads2'} primaryColor={'#faedcd'}>
            <Headline 
              line1={frontmatter.boxHeadline}
              line2="" 
            />
            <Markdown>
              {frontmatter.boxContent}
            </Markdown>
        </ContentContainer> 
        <div className='main-container'>
          <div className='markdown-body'>
            <Markdown>
              {frontmatter.block2}
            </Markdown>
          </div>
        </div>
        <div className='spacer-top'></div>
      </Layout>
  </>)
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/angebote/${slug}.md`, 'utf8'), {
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
  
export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/angebote')
  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false
  }
}