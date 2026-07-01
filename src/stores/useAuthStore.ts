import { create } from 'zustand';

export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

export type User = {
  id: string | null;
  email: string | null;
  fullName: string | null;
  role: Role | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: null;
};

interface AuthStore {
  user: User | null;
  setAuth: (payload: User) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setAuth: (payload) =>
    set({
      user: payload,
    }),
  clearAuth: () =>
    set({
      user: null,
    }),
}));
