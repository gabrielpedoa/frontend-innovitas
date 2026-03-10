import type { ReactNode } from "react";
import type { IUser } from "./user";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  user: IUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  createUser: (data: IUser) => Promise<IUser>;
}
