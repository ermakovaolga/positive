import 'whatwg-fetch'

export type RequestError = Error & { response?: any }

export enum RequestMethods {
  get = 'GET',
  put = 'PUT',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
}

type QueryParams = Record<string, string | number>

type GetOptionsParams = {
  body?: BodyInit
  isFile?: boolean
  contentType?: string
  method?: 'GET' | 'PATCH' | 'PUT' | 'POST' | 'DELETE'
  headers?: Record<string, string>
  params?: QueryParams
}

export type HttpClient = (url: string, options?: Record<string, any>) => Promise<any>

const parseJSON = async (response: Record<string, any>) => {
  const text = await response.text()
  if (text === '') return undefined
  return JSON.parse(text)
}

export const checkStatus = async (response: Record<string, any>) => {
  const isSuccessStatus = response.status >= 200 && response.status < 300

  if (isSuccessStatus) return response

  const error = new Error(response?.statusText) as RequestError
  error.response = await response.json()

  throw error
}

export const getRequestParams = (options: GetOptionsParams = { method: RequestMethods.get }) => {
  const { body, method, contentType = 'application/json', isFile, headers } = options

  const requestHeaders = new Headers(headers)
  const requestParams = { method, headers: requestHeaders } as RequestInit & { headers: Headers }

  if (body) requestParams.body = body
  if (!isFile) requestParams.headers.set('Content-Type', contentType)

  return requestParams
}

const serializeQueryParams = (params?: QueryParams) => {
  const entries = Object.entries(params ?? {})
  return entries.length ? '?' + entries.map(([k, v]) => `${k}=${v}`).join('&') : ''
}

const httpClient: HttpClient = (url, options: GetOptionsParams = { method: RequestMethods.get }) => {
  const requestParams = getRequestParams(options)
  const queryParams = serializeQueryParams(options.params)
  return fetch(url + queryParams, requestParams)
    .then(checkStatus)
    .then(parseJSON)
}

export default httpClient
