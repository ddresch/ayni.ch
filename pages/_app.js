import Head from 'next/head'
import { ParallaxProvider } from 'react-scroll-parallax'
import { AnimatePresence } from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'
import { Shape } from '../components/Shape'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/globals.css'
import CanonicalLink from '../components/CanonicalLink'

function AppLayout({ Component, pageProps, router }) {

  const para1 = useParallax({ speed: -30 })
  const para2 = useParallax({ speed: -60 })

  return (
    <>
      <Head>
          <title>Praxis für Ayurveda Ernährungs- und Massagetherapie in Basel</title>          
          
          <meta name="description" content="Praxis für Ayurveda Ernährungs- und Massagetherapie, Beratung und Coaching. Ich biete individuelle Lösungen für ein gesundes und energievolles Leben." />
          <meta name="keywords" content="Ayurveda, Basel, Region Basel, Wellness, Gesundheit, Ernährung, Mentaltraining, Resilienz, Coaching, Beratung, Leadership, Balance, Wellbeing" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <CanonicalLink router={router} />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17188148066"></script>
          <script
            dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());          
              gtag('config', 'AW-17188148066');
            `}}
          />
      </Head>

      <Header />
      
      <div className='left-decor' ref={para1.ref}>
      {/* <div className='left-decor'>         */}
        <Shape shapeType={'quads2'} shiftedOutline={false} primaryColor={'#ccd5ae'} secondaryColor={'#ccd5ae'} />
      </div>

      <div className='right-decor' ref={para2.ref}>
      {/* <div className='right-decor'> */}
        <Shape shapeType={'quads1'} shiftedOutline={false} primaryColor={'#ccd5ae'} secondaryColor={'#ccd5ae'} />
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
