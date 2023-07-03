import { API } from '../config'
import httpClient from './httpClient'
import productsApi from './services/products'

export default {
  products: productsApi(API.products, httpClient),
}
