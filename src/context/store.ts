import { create } from 'zustand'

interface language {
    language : string;
    changeLanguage : (lng: string) => void,
}

export const useLanguageStore = create<language>((set) => ({
  language: "es",
  changeLanguage: (lng: string) => set( () => ({
    language: lng,
  }))
}))

