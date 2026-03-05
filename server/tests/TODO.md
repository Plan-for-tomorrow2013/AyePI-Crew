# Server tests

API Fetch tests
Data transform / movie model
AI response format
Route responses


# Integrate

Update with correct functions, imports etc and uncomment

# Test the tests

Example

describe('Movie Model', () => {
  it('formats API data correctly', () => {
    const mockApiData = {
      id: 1,
      title: "Test Movie",
      vote_average: 7.5
      review: 'Terrible, just terrible'
    };

    const movie = new Movie(mockApiData);

    expect(movie.rating).toBe(7.5);
  });
});