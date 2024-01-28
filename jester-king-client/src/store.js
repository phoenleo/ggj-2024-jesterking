import { create } from 'zustand'
import zustymiddleware from 'zustymiddleware';
import apiClient from './apiClient'


export const getPlayer = (session, playerId) => {
  const isPlayer1 = session.player1._id === playerId;
  const isPlayer2 = session.player2._id === playerId;

  if (!isPlayer1 && !isPlayer2) {
    throw Error('Player Not Found')
  }

  return isPlayer1 ? session.player1 : session.player2;
}


const useStore = create(
  zustymiddleware((set) => ({
    error: null,
    setError: (value) => set(() => ({ 
      error: value,
    })),
    clearError: () => set({ error: null }),
  
    loading: false,
    setLoading: (value) => set(() => ({ loading: value})),

    session: null,
    setSession: (value) => set(() => ({ session: value })),

    punchlineOptions: [],

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
    },
    
    getCompletedSession: async(sessionCode) => {
      set({ loading: true })
      try {
        const res = await apiClient.get(`/session/${sessionCode}?completed=true`)
        set({ loading: false, session: res.data })
      } catch(err) {
        set({ error: err, loading: false })
      }
    },

    registerPlayer: async(sessionCode, playerId, playerName) => {
      set({ loading: true })
      try {
        const res = await apiClient.patch(
          `/session/${sessionCode}/player/${playerId}/register`, 
          { name: playerName }
        )
        
        set({ 
          loading: false, 
          session: res.data, 
        })
      } catch(err) {
        set({ error: err, loading: false })
      }
    },

    submitPunchline: async(sessionCode, playerId, punchline) => {
      set({ loading: true })
      try {
        const res = await apiClient.patch(
          `/session/${sessionCode}/player/${playerId}/submit-punchline`, 
          { punchline }
        )
        set({ loading: false, session: res.data })
      } catch(err) {
        set({ error: err, loading: false })
      }
    },

    submitVote: async(sessionCode, votedPlayerId) => {
      set({ loading: true })
      try {
        const res = await apiClient.patch(
          `/session/${sessionCode}/voter/submit-vote`, 
          { votedPlayerId }
        )
        set({ loading: false, session: res.data })
      } catch(err) {
        set({ error: err, loading: false })
      }
    },

    closeSession: async(sessionCode) => {
      set({ loading: true })
      try {
        const res = await apiClient.patch(
          `/session/${sessionCode}/close`
        )
        set({ loading: false, session: res.data })
      } catch(err) {
        set({ error: err, loading: false })
      }
    }
  }))
)

export default useStore

