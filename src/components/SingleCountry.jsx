import Images from './Images'

const SingleCountry = ({ dataCountry }) => {
  return (
    <div className='max-w-[90%] w-full mx-auto mt-12'>
      <div className='md:flex items-center gap-12'>
        <div className='w-1/2'>
          <Images country={dataCountry} />
        </div>
        <div className='w-1/2'>
          <h2 className='text-2xl font-bold mb-12 mt-12 md:mt-0'>{dataCountry.name.official}</h2>
          <div className='flex justify-between'>
            <ul>
              <li className='font-bold'>Nombre oficial: <span className='font-normal'>{dataCountry.name.official}</span></li>
              <li className='font-bold'>Population: <span className='font-normal'>{dataCountry.population}</span></li>
              <li className='font-bold'>Region: <span className='font-normal'>{dataCountry.region}</span></li>
              <li className='font-bold'>Sub Region: <span className='font-normal'>{dataCountry.subregion}</span></li>
              <li className='font-bold'>Capital: <span className='font-normal'>{dataCountry.capital}</span></li>
            </ul>
            <ul>
              <li className='font-bold'>Top level domain: <span className='font-normal'>{dataCountry.tld}</span></li>
              <li className='font-bold'>Currencies: <span className='font-normal'> {Object.values(dataCountry.currencies).map(currency => currency.name).join(', ')}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCountry
