import { Card } from '../Components'
import { useFetch } from '../hooks/useFetch'
import useTitle from '../hooks/useTitle'


//we are using this apiPath as props and passing it into the useFetch hook
export const MovieList = ({apiPath, title}) => {

   const { data: movies } = useFetch(apiPath);

   useTitle(title);

  return (
    <main>
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


