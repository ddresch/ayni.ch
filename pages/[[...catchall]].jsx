import Head from 'next/head'
import * as React from 'react'
import { PlasmicComponent, ComponentRenderData, PlasmicRootProvider } from '@plasmicapp/loader-nextjs'
import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'
import { PLASMIC } from '../plasmic-init'
import { useParallax } from 'react-scroll-parallax'
import { Shape } from '../components/Shape'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
// import useMediaQuery from '../hooks/useMediaQuery'
import useBreakpoints from '../hooks/useBreakpoints'
/**
 * Use fetchPages() to fetch list of pages that have been created in Plasmic
 */
export const getStaticPaths = async () => {
  const pages = await PLASMIC.fetchPages();
  return {
    paths: pages.map((page) => ({
      params: { catchall: page.path.substring(1).split('/') }
    })),
    fallback: 'blocking'
  };
};

/**
 * For each page, pre-fetch the data we need to render it
 */
export const getStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  // Convert the catchall param into a path string
  const plasmicPath =
    typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (plasmicData) {
    return {
      props: { plasmicData },
      revalidate: 300
    }
  } else {
    // This is some non-Plasmic catch-all page
    return {
      props: {}
    };
  }
};

/**
 * Actually render the page!
 */
export default function CatchallPage(props) {
  const { plasmicData } = props;
  
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  
  const pageMeta = plasmicData.entryCompMetas[0] 
  const para1 = useParallax({ speed: -50 })
  const para2 = useParallax({ speed: -60 })

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
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

        {/* Pass in the pageMeta as a prop */}
        <PlasmicComponent component={pageMeta.name} />

        <Footer />
    </PlasmicRootProvider>
  );
}