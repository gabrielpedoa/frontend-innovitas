import type { ICharacter } from "../@types/characters";
import type { IUser } from "../@types/user";
import { Api } from "./api";

export async function loginService(
  email: string,
  password: string,
): Promise<{ user: IUser }> {
  const response = await Api.post("/auth/login", { email, password });
  return response.data;
}

export async function logoutService() {
  await Api.post("/auth/logout");
}

export async function createUserService(data: IUser) {
  const response = await Api.post("/users", data);
  return response.data;
}

export async function loadCharactersByUserIdService(
  userId: number,
): Promise<ICharacter[]> {
  const response = await Api.get(`/users/${userId}`);
  return response.data;
}
