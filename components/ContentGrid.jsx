import Link from 'next/link'
// import DateFormatter from './DateFormatter'
import Image from 'next/image'

const ContentGrid = ({ items, collection, path }) => {
  return (
    <section id={collection}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {items.map((item) => (
          <Link
            key={item.slug}
            as={`/${(path) ? path : collection}/${item.slug}`}
            href={`/${(path) ? path : collection}/[slug]`}
          >
            <div style={{overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'row'}}>
              <div style={{display: 'inline'}}>
                {item.coverImage && (
                <Image
                  src={item.coverImage}
                  alt={`Cover Image for ${item.title}`}
                  style={{width: 'auto'}}
                  width={192}
                  height={192}
                />)}
              </div>
              {collection === 'posts' && (
                <div>
                  <h2>{item.title}</h2>
                  {/* <div className="text-md mb-4 text-slate-700">
                    <DateFormatter dateString={item.publishedAt} />
                  </div> */}
                  <p className="text-lg leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Link 
                    href={`/${(path) ? path : collection}/[slug]`} 
                    as={`/${(path) ? path : collection}/${item.slug}`}
                    className='more-link'>mehr erfahren</Link>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ContentGrid