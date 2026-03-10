import { useEffect, useState } from "react";
import type { IAuthProvider } from "../@types/auth";
import type { IUser } from "../@types/user";
import { loginService, logoutService, meService } from "../services/auth";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    setLoading(true);
    try {
      const user = await meService();
      setUser(user);
    } catch {
      setUser(null);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  async function login(email: string, password: string) {
    console.log(email, password);
    const response = await loginService(email, password);
    setUser(response.user);
  }

  async function logout() {
    await logoutService();
    setUser(null);
  }

  async function createUser(data: IUser) {
    return data as any;
  }

  return (
    <AuthContext.Provider
      value={{
        createUser,
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
