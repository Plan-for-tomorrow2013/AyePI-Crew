import { getMovies } from '../api/movieApi.ts'
import { useQuery } from '@tanstack/react-query'
import MovieCard from './MovieCard'

const App = () => {
  const { 
    data: movies, 
    isError, 
    isPending 
  } = useQuery({ queryKey: ['movies'], queryFn: getMovies })

  if (isPending) return <p className="p-8 text-center text-xl">Loading Movies...</p>

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold underline mb-8 text-center">Movies</h1>
      
      {isError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> There was an error retrieving the movies.</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies?.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App
