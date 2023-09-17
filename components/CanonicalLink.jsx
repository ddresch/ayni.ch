import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const CanonicalLink = () => {
  const router = useRouter()
  const [canonicalHost, setCanonicalHost] = useState('ayni.ch')

  useEffect(() => {
    // This code will only run on the client side
    const host = window.location.host

    // Check if "www" is present in the host URL
    setCanonicalHost(host.startsWith('www.') ? host : `www.${host}`)
  }, [])

  return (
    <head>
      {canonicalHost && <link rel="canonical" href={`https://${canonicalHost}${router.asPath}`} />}
    </head>
  )
}

export default CanonicalLink
