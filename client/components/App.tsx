// import { useState } from 'react'
// import { getGreeting } from '../api/apiClient.ts'
import { getMovies } from '../api/movieApi.ts'
import { useQuery } from '@tanstack/react-query'

const App = () => {
  // const [count, setCount] = useState(0)

  // const {
  //   data: greeting,
  //   isError,
  //   isPending,
  // } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  const { 
    data: movies, 
    isError, 
    isPending 
  } = useQuery({ queryKey: ['movies'], queryFn: getMovies })

  if (isPending) return <p>Loading...</p>

  return (
    <>
      <h1 className="text-3xl font-bold underline">Movies</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the movies.
        </p>
      )}
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img src={movie.posterUrl} alt={`${movie.title} poster`} />
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.rating} ({movie.voteCount} votes)</p>
            <link href={`/movies/${movie.id}`}>Learn more</link>
          </li>
        ))}
      </ul>
    </>
    // <>
    //   {count}
    //   <h1 className="text-3xl font-bold underline">{greeting}</h1>
    //   {isError && (
    //     <p style={{ color: 'red' }}>
    //       There was an error retrieving the greeting.
    //     </p>
    //   )}
    //   <button onClick={() => setCount(count + 1)}>Click</button>
    // </>
  )
}

export default App
