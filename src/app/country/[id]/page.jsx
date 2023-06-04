import SingleCountry from '@/components/SingleCountry'

const DataCountry = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

const page = async ({ params }) => {
  const { id } = params
  const country = await DataCountry(id)
  return (
    <div>
      {country.map((dataCountry) => (
        <SingleCountry key={dataCountry.name.official} dataCountry={dataCountry} />
      ))}
    </div>
  )
}

export default page
