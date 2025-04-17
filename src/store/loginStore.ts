import { LoginStoreData } from '@/@types/loginStore';
import { create } from 'zustand';

type LoginStoreStore = {
  data: LoginStoreData | null;
  setData: (data: LoginStoreData) => void;
  reset: () => void;
};

export const useLoginStoreStore = create<LoginStoreStore>(set => ({
  data: null,
  setData: data => set({ data }),
  reset: () => set({ data: null }),
}));
