import Head from 'next/head'
import { ParallaxProvider } from 'react-scroll-parallax'
import { AnimatePresence } from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'
import { Shape } from '../components/Shape'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/globals.css'

function AppLayout({ Component, pageProps, router }) {

  const para1 = useParallax({ speed: -50 })
  const para2 = useParallax({ speed: -60 })

  return (
    <>
      <Head>
          <title>ayni.ch</title>
          <meta name="description" content="Ayni Coaching" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <div className='left-decor' ref={para1.ref}>
        <Shape shapeType={'quads2'} shiftedOutline={false} primaryColor={'#65A882'} secondaryColor={'#E6F1EB'} />
      </div>

      <div className='right-decor' ref={para2.ref}>
        <Shape shapeType={'quads1'} shiftedOutline={false} primaryColor={'#65A882'} secondaryColor={'#E6F1EB'} />
      </div>

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>

      <Footer />
    </>
  )
}

function WrappedApp({Component, pageProps, router}) {
  return (
    <ParallaxProvider>
      <AppLayout Component={Component} pageProps={pageProps} router={router} />
    </ParallaxProvider>
  )
}

export default WrappedApp
