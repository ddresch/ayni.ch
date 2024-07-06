import * as React from 'react'
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import Markdown from 'react-markdown'
import Link from 'next/link'
// Custom
import ContactForm from '../components/ContactForm'
import { ContentContainer } from '../components/ContentContainer'
import { Headline } from '../components/Headline'
import Layout from '../components/Layout'

export default function LandingPage({frontmatter, markdown}) {
    React.useEffect(() => {
        // This will run only once when the app component is mounted
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                    });
                }
            })
        }
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
                <Markdown>
                    {frontmatter.description}
                </Markdown>
                <div className='spacer-md'></div>
                <Headline line1="Mein Angebot umfasst" line2="" />
                <ul>
                    {frontmatter.offers.map((item, index) => (
                        <li key={index}>
                            <b>{item.title}:</b>&nbsp;
                            {item.description}
                            <Link href={item.link} className='more-link'>mehr erfahren</Link>
                        </li>
                    ))}
                </ul>
                <div className='spacer-md'></div>
            </div>

            <ContentContainer primaryColor={'#faedcd'}>
                <Headline line1="Termin anfragen" line2="zeit f&uuml;r dich" />
                <p>Du m&ouml;chtest einen Termin anfragen? Einfach das untere Formular ausf&uuml;llen und ich melde mich direkt bei Dir!</p>            
                <ContactForm />
            </ContentContainer>                   
            <div className='spacer-top'></div>
        </Layout>
    </>)
}

export async function getStaticProps() {
    const fileContent = matter(fs.readFileSync(`./content/allgemein/startseite.md`, 'utf8'), {
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