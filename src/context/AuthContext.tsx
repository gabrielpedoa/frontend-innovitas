import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IUser } from "../@types/user";
import { loginService, logoutService, meService } from "../services/auth";

interface IAuthContext {
  user: IUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

interface IAuthProvider {
  children: ReactNode;
}

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    try {
      const user = await meService();
      setUser(user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  async function login(email: string, password: string) {
    const response = await loginService(email, password);
    setUser(response.user);
  }

  async function logout() {
    await logoutService();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
