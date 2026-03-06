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

# HTTP getJSON

Possible helper file, to go with error model.

import { ExternalApiError } from '../../models/errors.ts';
import request from 'superagent'

export async function getJSON<T>(url: string, query?: Record<string, any>) {
  try {
    const response = await request.get(url).query(query ||{})
    return response.body as T
  } catch (err: any) {
    if (err.response) {
      throw new ExternalApiError('External API call failed', err.status, 
        { body: err.response.body });
    } else {
      throw new ExternalApiError('Network or request failed', 502, {original: err.message})
    }
  }
}