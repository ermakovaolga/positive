const getLink = (env_link: string) => process.env[env_link] || `https://dummyjson.com/products`

export const API = {
  products: getLink('REACT_APP_PRODUCTS_API_URL'),
}
