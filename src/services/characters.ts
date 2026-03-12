import type { ICharacter, ICharacterApiResponse } from "../@types/characters";
import { handleApiError } from "../utils/handleApiError";
import { Api } from "./api";

type ICreateData = ICharacterApiResponse & {
  user_id: number;
};

type IUpdateData = ICharacter & {
  user_id: number;
};

export async function createCharacterService(
  data: ICreateData,
): Promise<ICharacter> {
  try {
    const response = await Api.post("/characters", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function updateCharacterService(
  data: IUpdateData,
): Promise<ICharacter> {
  try {
    const response = await Api.put(`/characters/${data.id}`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}
export async function loadCharacterService(
  originalCharacterId: string,
): Promise<ICharacterApiResponse> {
  const response = await Api.get(`/characters/${originalCharacterId}`);
  return response.data;
}

export async function deleteCharacterService(
  databaseId: number,
): Promise<boolean> {
  const response = await Api.delete(`/characters/${databaseId}`);
  return response.data;
}
