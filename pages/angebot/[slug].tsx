import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { Document } from '../../interfaces/document'
import {
  getDocumentPaths,
  getDocumentBySlug,
  getDocuments
} from 'outstatic/server'
// import DateFormatter from '../../components/DateFormatter'
import Image from 'next/image'
// import ContentGrid from '../../components/ContentGrid'

type Props = {
  page: Document
  morePages: Document[]
}

const slugCategory = 'angebot'

export default function Page({ page, morePages }: Props) {
  const router = useRouter()
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5">
        {/* <Header /> */}
        {router.isFallback ? (
          <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
            Loading…
          </h1>
        ) : (
          <>
            <article className="mb-8">
              <Head>
                <title>{`${page.title} | Next.js + Outstatic`}</title>
                <meta property="og:image" content={page.coverImage} />
              </Head>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative mb-2 md:mb-4 sm:mx-0 h-64">
                  <Image
                    alt={page.title}
                    src={page.coverImage}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
                    {page.title}
                  </h1>
                  <div className="hidden md:block md:mb-8 text-slate-600">
                    Launched on{' '}
                    {/* <DateFormatter dateString={page.publishedAt} /> by{' '} */}
                    {page.author.name}.
                  </div>
                  <div className="inline-block p-4 border mb-8 font-semibold text-lg rounded shadow">
                    {page.description}
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <div
                      className="prose lg:prose-xl"
                      dangerouslySetInnerHTML={{ __html: page.content }}
                    />
                  </div>
                </div>
              </div>
            </article>
          </>
        )}
        <div className="mb-16">
          {/* {morePages.length > 0 && (
            // <ContentGrid
            //   title="Other Pages"
            //   items={morePages}
            //   collection="projects"
            // />
          )} */}
        </div>
      </div>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const page = getDocumentBySlug(slugCategory, params.slug, [
    'title',
    'publishedAt',
    'description',
    'slug',
    'author',
    'content',
    'coverImage'
  ])

  const content = await markdownToHtml(page.content || '')

  const morePages = getDocuments(slugCategory, ['title', 'slug', 'coverImage'])

  return {
    props: {
      page: {
        ...page,
        content
      },
      morePages
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: getDocumentPaths(slugCategory),
    fallback: false
  }
}