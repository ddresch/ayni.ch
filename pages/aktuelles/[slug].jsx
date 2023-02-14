import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import { Headline } from '../../components/Headline'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { getDocumentPaths, getDocumentBySlug } from 'outstatic/server'
import Image from 'next/image'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <div className='main-container'>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <Head>
              <title>{`${post.title} | Ayni - Ayurveda Basel`}</title>
              <meta property="og:image" content={post.coverImage} />
            </Head>
            <div className='spacer-top'></div>
            <Headline line1={`${post.title}`} line2={`${post.description}`} />
            <div class='dynamic-content' dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getDocumentBySlug('posts', params.slug, [
    'title',
    'publishedAt',
    'slug',
    'author',
    'content',
    'coverImage',
    'description'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: getDocumentPaths('posts'),
    fallback: false
  }
}