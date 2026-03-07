import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Movie } from '../../interface/Movie'
import { getCritic } from '../api/aiClient'
import { AiResponse } from '../../interface/AiResponse'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const [aiReview, setAiReview] = useState<AiResponse | null>(null)

  const mutation = useMutation({
    mutationFn: () => getCritic(movie.title, movie.overview, 'snarky'),
    onSuccess: (data) => {
      setAiReview(data)
    },
  })

  const handleAlternateCommentary = () => {
    mutation.mutate()
  }

  return (
    <div className="p-4 border rounded-lg shadow-md overflow-hidden flex flex-col gap-4">
      <div className="h-16 flex items-center">
        <h2 className="text-xl font-bold line-clamp-2">{movie.title}</h2>
      </div>
      
      <div className="bg-gray-100 p-3 rounded italic text-sm h-48 overflow-y-auto">
        <h3 className="font-semibold not-italic mb-1">Description:</h3>
        <p>{aiReview ? aiReview.content : movie.overview}</p>
        {aiReview?.rating && (
          <p className="mt-2 font-bold not-italic">AI Rating: {aiReview.rating}/10</p>
        )}
      </div>

      <div className="h-[450px] overflow-hidden rounded bg-gray-200 flex items-center justify-center">
        <img 
          src={movie.posterUrl} 
          alt={`${movie.title} poster`} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <div className="text-sm h-12">
        <p>Release Date: {movie.releaseDate}</p>
        <p>TMDB Rating: {movie.rating} ({movie.voteCount} votes)</p>
      </div>

      <button 
        onClick={handleAlternateCommentary}
        disabled={mutation.isPending}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
      >
        {mutation.isPending ? 'Generating...' : 'Alternate Commentary'}
      </button>

      {mutation.isError && (
        <p className="text-red-500 text-xs">Error: {mutation.error.message}</p>
      )}
    </div>
  )
}

export default MovieCard
