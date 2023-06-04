'use client'

import { useRouter } from 'next/navigation'
import Images from './Images'

const Countries = ({ country }) => {
  const router = useRouter()
  return (
    <div className='bg-white shadow-md hover:cursor-pointer' onClick={() => router.push(`/country/${country.name.official}`)}>
      <Images country={country} />
      <div className='p-6'>
        <h2 className='font-bold text-xl my-6'>{country.name.official}</h2>
        <p className='font-bold mb-4'>Population: <span className='font-normal'>{country.population}</span></p>
        <p className='font-bold mb-4'>Region: <span className='font-normal'>{country.region}</span></p>
        <p className='font-bold'>Capital: <span className='font-normal'>{country.capital}</span></p>
      </div>
    </div>
  )
}

export default Countries
