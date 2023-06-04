import Countries from '@/components/Countries'

const URL_COUNTRIES_ALL = 'https://restcountries.com/v3.1/all'

const getCountriesAll = () => {
  return fetch(URL_COUNTRIES_ALL, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Home () {
  const countries = await getCountriesAll()
  return (
    <>
      <div className='max-w-[90%] w-full mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
        {countries.map((country) => (
          <Countries key={country.name} country={country} />
        ))}
      </div>
    </>
  )
}
