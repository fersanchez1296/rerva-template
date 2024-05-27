import { create } from 'zustand'

interface apiStorage {
    data : Array<Object>;
    setData : (dt: Array<Object>) => void,
}

export const useApiRequestStore = create<apiStorage>((set) => ({
  data: [],
  setData: (dt: Array<Object>) => set( () => ({
    data: dt,
  }))
}))

