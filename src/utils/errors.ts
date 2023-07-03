import { RequestError } from '../api/httpClient'

export const getErrorMessage = (error: RequestError): string =>
  error?.response?.__error__ ?? error?.response?.message ?? error.message ?? 'Unknown error'
