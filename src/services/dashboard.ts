import type { IDashboard } from "../@types/dashboard";
import { Api } from "./api";

export async function dashboardAuthService(
  userId: number,
): Promise<IDashboard> {
  const response = await Api.get(`/dashboard/${userId}`);
  return response.data;
}
export async function dashboardNotAuthService(): Promise<IDashboard> {
  const response = await Api.get(`/dashboard`);
  return response.data;
}
