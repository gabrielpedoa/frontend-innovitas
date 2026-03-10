import { Api } from "./api";

export async function loginService(email: string, password: string) {
  const response = await Api.post("/auth/login", { email, password });
  return response.data;
}

export async function logoutService() {
  await Api.post("/auth/logout");
}

export async function meService() {
  const response = await Api.get("/auth/me");
  return response.data;
}
