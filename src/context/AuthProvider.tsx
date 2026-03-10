import { useState } from "react";
import type { IAuthProvider } from "../@types/auth";
import type { IUser } from "../@types/user";
import {
  createUserService,
  loginService,
  logoutService,
} from "../services/auth";
import { handleApiError } from "../utils/handleApiError";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  async function login(email: string, password: string) {
    setLoading(() => true);
    try {
      const response = await loginService(email, password);
      setUser(response.user);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(() => false);
    }
  }

  async function logout() {
    await logoutService();
    setUser(null);
  }

  async function createUser(data: IUser) {
    setLoading(() => true);
    try {
      const response = await createUserService(data);
      return response.data;
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(() => false);
    }
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
