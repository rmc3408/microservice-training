import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'


export type SessionUser = {
  id: string;
  user: {
      id: string;
      email: string;
  };
};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const storeDispatch: () => AppDispatch = useDispatch
export const storeSelector: TypedUseSelectorHook<RootState> = useSelector