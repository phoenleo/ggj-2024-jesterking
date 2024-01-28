import { create } from 'zustand'
import zustymiddleware from 'zustymiddleware';
import apiClient from './apiClient'


const useStore = create(
  zustymiddleware((set) => ({
    error: null,
    setError: (value) => set(() => ({ 
      error: value,
    })),
  
    loading: false,
    setLoading: (value) => set(() => ({ loading: value})),

    session: null,
    setSession: (value) => set(() => ({ session: null })),

    // APIs
    createSession: async() => {
      set({ loading: true })
      try {
        const res = await apiClient.post(`/session/`)
        set({ loading: false, session: res.data })
        console.log(res)
      } catch(err) {
        set({ error: err, loading: false })
      }
    },

    getSession: async(sessionCode) => {
      set({ loading: true })
      try {
        const res = await apiClient.get(`/session/${sessionCode}`)
        set({ loading: false, session: res.data })
      } catch(err) {
        set({ error: err, loading: false })
      }
    }
  }))
)

export default useStore

