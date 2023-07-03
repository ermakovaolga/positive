const currentProducts = (state = {}, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      }
    default:
      return state
  }
}

export default currentProducts
