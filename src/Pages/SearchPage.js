import { useSearchParams } from 'react-router-dom'
import { Card } from '../Components'
import { useFetch } from '../hooks/useFetch'
import useTitle from '../hooks/useTitle'



//we are using this apiPath as props and passing it into the useFetch hook
export const SearchPage = ({apiPath}) => {


  //we are using useSerachparams to get the query value
  const [searchParams] = useSearchParams();
  //this will give the value whatever we search i.e flash
  const queryTerm = searchParams.get("q");
  //we are passing this queryTerm as argument to the useFetch hook
  const { data: movies } = useFetch(apiPath,queryTerm);

  useTitle(`Search results for ${queryTerm.toUpperCase()}`);
  

  return (
    <main>
       <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No results found for '${queryTerm}'` : `Results for '${queryTerm}'` }</p>
      </section>
      <section className="max-width-7xl mx-auto py-7">
        <div className='flex justify-start flex-wrap'>

         {movies.map((movie) => (
          <Card key = {movie.id} movie = {movie}/>
         ))}
          

        </div>
      </section>
    </main>
  )
}


