{/*

  imports
  jest.mock('../..)

  describe('Movie Service(server-side)', () => {
  const rawApiData = [
  { }
  ]
  
  test('transforms raw API data to movie model', () =>{
  const result = transformedMovieData(rawApiData)
  expect...
  })

  test('handles empty API response',() => {
  const result = transformedMovieData([])
  expect(result).toEqual([])
  })

  test('searchMovies returns movie array', async () => {
  (searchMovies as jest.Mock).mockResolvedValue(transformed...(rawAPI)
  const movies = await...
  expect (movies[0]).toHaveProperty('title', ' ')
  )}
  
  test('searchMovies handles network/API errors', async () =>{
  (searchMovies as jest.Mock).mockRejectedValue(new Error('API down'))
  await expect (searchMovies('fail query')).rejects.toThrow('API down')
  })
  
  })
  */}