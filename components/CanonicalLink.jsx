import { useEffect, useState } from 'react'

const CanonicalLink = ({router}) => {
  const [canonicalHost, setCanonicalHost] = useState('www.ayni.ch')

  useEffect(() => {
    // This code will only run on the client side
    const host = window.location.host

    // Check if "www" is present in the host URL
    setCanonicalHost(host.startsWith('www.') ? host : `www.${host}`)
  }, [])

  return (
      <>
        {canonicalHost && <link rel="canonical" href={`https://${canonicalHost}${router.asPath}`} />}
      </>
  )
}

export default CanonicalLink
