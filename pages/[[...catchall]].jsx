import * as React from 'react'
import { PlasmicComponent, PlasmicRootProvider } from '@plasmicapp/loader-nextjs'
import Error from 'next/error'
import { PLASMIC } from '../plasmic-init'
import Layout from '../components/Layout'

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

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
        {/* Pass in the pageMeta as a prop */}
        <Layout>
          <PlasmicComponent component={pageMeta.name} />
        </Layout>
    </PlasmicRootProvider>
  );
}