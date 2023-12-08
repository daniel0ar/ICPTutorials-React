import { create } from 'zustand'

export const useAuthStore = create((set, get) => ({
    isAuthModalOpen: false,
    isLoggedIn: false,
    userInfo: null,
    setIsAuthModalOpen: () => {
        set({ isAuthModalOpen: !get().isAuthModalOpen})
    },
    setUserInfo: (userInfo) => {
        set({userInfo})
    }
}))