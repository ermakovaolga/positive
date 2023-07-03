import { HttpClient } from '../httpClient'

const productsApi = (baseUrl: string, httpClient: HttpClient) => ({
  getProductsList: () => {
    return httpClient(`${baseUrl}`)
  },
})

export default productsApi
