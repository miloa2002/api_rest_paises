'use client'
import Image from 'next/image'

const imageLoader = ({ src, width }) => {
  return `${src}?w=${width}`
}

const Images = ({ country }) => {
  return (
    <Image
      loader={imageLoader}
      src={country.flags.png}
      alt={country.name.official}
      width={200}
      height={200}
    />
  )
}

export default Images
