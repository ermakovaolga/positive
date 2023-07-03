import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { ActionCreator } from 'redux'

export function useAction<T, TAction extends ActionCreator<T>, D extends any[]>(action: TAction, deps?: D) {
  const dispatch = useDispatch()
  return useCallback(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (...args: Parameters<TAction>) => {
      dispatch(action.apply(action, args))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : [dispatch],
  )
}
