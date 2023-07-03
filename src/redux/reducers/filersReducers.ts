const currentFilters = (state = {}, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'SET_SORT':
      return {
        sort: action.payload,
      }
    case 'SET_PAGE_PARAMS':
      return {
        ...state,
        params: action.payload,
      }
    default:
      return state
  }
}
export default currentFilters
