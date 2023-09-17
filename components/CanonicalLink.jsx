const CanonicalLink = ({router}) => {  
  const asPath = router.asPath
  const host = router.isReady ? new URL(window.location.href).host : ''

  // Überprüfen, ob "www" in der Host-URL vorhanden ist
  const canonicalHost = host.startsWith('www.') ? host : `www.${host}`

  return (
    <head>
      <link rel="canonical" href={`https://${canonicalHost}${asPath}`} />
    </head>
  )
}

export default CanonicalLink