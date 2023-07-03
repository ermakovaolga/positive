import { generatePath } from 'react-router-dom'

export type ProductRouteParams = { id: string }

const createRoute = <T = void>(pattern: string, initialParams?: Partial<T>) => ({
  pattern,
  generatePath: (params: T) => generatePath(pattern, { ...initialParams, ...params }),
})

export const routing = {
  products: createRoute(`/`),
  product: createRoute<ProductRouteParams>(`/:id`),
  productsLocal: createRoute<ProductRouteParams>(`/local`),
}
