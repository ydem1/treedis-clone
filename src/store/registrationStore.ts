import { RegistrationData } from '@/@types/registrationData';
import { create } from 'zustand';

type RegistrationStore = {
  data: RegistrationData | null;
  setData: (data: RegistrationData) => void;
  reset: () => void;
};

export const useRegistrationStore = create<RegistrationStore>(set => ({
  data: null,
  setData: data => set({ data }),
  reset: () => set({ data: null }),
}));
