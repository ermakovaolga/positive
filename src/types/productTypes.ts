export type Product = {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
  isFavorite: boolean
}

export type PageParams = {
  start?: number
  end?: number
  sort?: { value: string; direction: 'ASC' | 'DESC' }
}
export interface ProductsState {
  currentProducts: {
    products: Product[]
    favorites: Product[]
    loading: boolean
  }
}
export interface FiltersState {
  currentFilters: {
    params: {
      start: number
      end: number
      sort: {
        value: 'price' | 'rating'
        direction: 'ASC' | 'DESC'
      }
    }
  }
}
