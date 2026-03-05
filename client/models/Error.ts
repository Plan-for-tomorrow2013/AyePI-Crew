//Possible models for handling API errors, to be applied if we use
//a service layer, query builder & http error check utils.

//Or somthing else?


//Applied at http level, in service function called by router
export class ExternalApiError extends Error {
  statusCode: number; //Attach correct code number from remote server
  details?: unknown; //Optional metadata from TMDB, AI

  constructor(message: string, statusCode = 502, details?: unknown) {
    super(message);
    this.name = 'ExternalApiError';
    this.statusCode = statusCode;
    this.details = details;

    // Fix prototype chain for instanceof
    Object.setPrototypeOf(this, ExternalApiError.prototype);
  }
}

//Potentially wrap responses into success or fail, if isErrorResponse(data), return failure & error:data.message
//Or just the result. Probably overkill here, use throw, catch instead.
export type Result<T> =
| {status: 'success'; data: T}
| {status: 'failure'; error: string }