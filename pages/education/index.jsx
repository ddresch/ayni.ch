import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
// Custom components
import { ContentContainer } from '../../components/ContentContainer'
import { Headline } from '../../components/Headline'
import Layout from '../../components/Layout'
import Head from 'next/head'
import ContactForm from '../../components/ContactForm'

export default function Page({blogs}) {

  const DateFormatter = ({ dateString }) => {
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric'})
    return <span>{formattedDate}</span>
  }

  // Sort blogs by publishedAt in descending order (newest first)
  const sortedBlogs = blogs.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return dateB - dateA; // For ascending order, use dateA - dateB
  });

  return (<>
        <Head>
            <title>ayni education</title>
            <meta name="description" content="Entdecken Sie ayni balance für ganzheitliche Lösungen bei stressbedingten Beschwerden und Burnout in Basel. Wir bieten individuelle Therapiepläne, Stressbewältigungsstrategien, Achtsamkeitstraining und Ayurvedische Massagen. Erstgespräch ab 150 CHF. Krankenkassen-akzeptiert. Finden Sie Ihre innere Balance heute." />
            <meta name="keywords" content="ayni balance, Stressbewältigung, Burnout, Resilienz, Achtsamkeit, Mentaltraining, Stressmanagement" />
        </Head>
        <Layout>
            <div className='main-container'>
                <div className='spacer-top'></div>
                <Headline line1="ayni education" line2="ayurveda wissen und events" sublevel={false} />
                <ul>
                {sortedBlogs.map(blog => (
                    <li key={blog.slug}>
                    <Link href={`/education/${blog.slug}`}>
                      {blog.eventDate}: {blog.title}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            <ContentContainer primaryColor={'#faedcd'}>
              <Headline line1="F&uuml;r weitere Informationen" line2="schreib mir einfach" />
              <p>Du hast eine Frage oder ein Anliegen das Du gern besprechen möchtest? Einfach das untere Formular ausf&uuml;llen und ich melde mich direkt bei Dir!</p>            
              <ContactForm />
            </ContentContainer>
        </Layout>
    </>
  )
}

export async function getStaticProps() {
    // List of files in blogs folder
    const filesInBlogs = fs.readdirSync('./content/education')

    // Get the front matter and slug (the filename without .md) of all files
    const blogs = filesInBlogs.map(filename => {
      const file = fs.readFileSync(`./content/education/${filename}`, 'utf8')
      const matterData = matter(file, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
        },
      })

      return {
        ...matterData.data, // matterData.data contains front matter
        slug: filename.slice(0, filename.indexOf('.'))
      }
    })

    return {
      props: { blogs }
    }
}