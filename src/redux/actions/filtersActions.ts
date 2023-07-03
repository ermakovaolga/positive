import { PageParams } from 'src/types/productTypes'

const setPageParams = (params: PageParams) => {
  return {
    type: 'SET_PAGE_PARAMS',
    payload: params,
  }
}
export default {
  setPageParams,
}
