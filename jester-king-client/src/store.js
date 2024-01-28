import { create } from 'zustand'
import zustymiddleware from 'zustymiddleware';


const useStore = create(
  zustymiddleware((set) => ({
    appError: null,
    setAppError: (value) => set(() => ({ 
      appError: value,
    })),
    
    errorRead: false,
    setErrorRead: (value) => set(() => ({ 
      errorRead: value,
      appError: null 
    })),
  
    loading: false,
    setLoading: (value) => set(() => ({ loading: value}))
  }))
)

export default useStore

