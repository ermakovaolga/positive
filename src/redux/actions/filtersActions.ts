import { PageParams } from 'src/types/productTypes'

const setSort = (sort: string) => {
  return {
    type: 'SET_SORT',
    payload: sort,
  }
}
const setPageParams = (params: PageParams) => {
  return {
    type: 'SET_PAGE_PARAMS',
    payload: params,
  }
}
export default {
  setPageParams,
  setSort,
}
