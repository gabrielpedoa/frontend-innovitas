import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type {
  ICharacter,
  ICharacterApiResponse,
} from "../../../@types/characters";
import type { IUser } from "../../../@types/user";
import {
  createCharacterService,
  deleteCharacterService,
  loadCharacterService,
  updateCharacterService,
} from "../../../services/characters";

export default function useCharacterDetailsHook() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [characterApiDetails, setCharacterApiDetails] =
    useState<ICharacterApiResponse>();

  const [characterLocalDetails, setCharacterLocalDetails] =
    useState<ICharacter>();

  const source = location.state?.source;
  const isApiCharacter = source === "api-characters";
  const character = location.state.character;

  useEffect(() => {
    if (!id) return;
    if (isApiCharacter) {
      async function fetchCharacterDetailsByExternalApi() {
        const response = await loadCharacterService(id!);
        setCharacterApiDetails(response);
      }
      fetchCharacterDetailsByExternalApi();
    } else {
      setCharacterLocalDetails({
        ...character,
        origin: parseLocation(character.origin),
        location: parseLocation(character.location),
      });
    }
  }, [source, id]);

  const [form, setForm] = useState(character);

  function handleFormChange(field: string, value: string) {
    setForm((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  }

  useEffect(() => {
    const characterData = characterApiDetails ?? characterLocalDetails;
    if (characterData) setForm(characterData);
  }, [characterApiDetails, characterLocalDetails]);

  async function handleSave(
    user: IUser | null,
    character: ICharacterApiResponse,
  ) {
    setError("");

    if (!user) return navigate("/auth/login");

    setLoading(true);

    try {
      await createCharacterService({
        ...character,
        origin: { name: character.origin.name, url: character.origin.url },
        location: {
          name: character.location.name,
          url: character.location.url,
        },
        user_id: user.id!,
      });

      navigate("/meus-personagens");
    } catch (err) {
      setError((err as any)?.message || "Erro ao salvar personagem");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(databaseId?: number) {
    if (!databaseId) return;

    setError("");
    setLoading(true);

    try {
      console.log(databaseId);
      await deleteCharacterService(databaseId);
      navigate("/meus-personagens");
    } catch (err) {
      setError((err as any)?.message || "Erro ao excluir personagem");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function handleEdit(user: IUser | null, character: ICharacter) {
    if (!user) return navigate("/auth/login");

    setError("");
    setLoading(true);
    console.log({ ...character, user_id: user.id! });
    try {
      await updateCharacterService({
        ...character,
        user_id: user.id!,
      });
      navigate("/meus-personagens");
    } catch (err) {
      setError((err as any)?.message || "Erro ao editar personagem");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  const getOriginName = (value?: string) => {
    if (!value) return "Desconhecido";
    const normalizeValue = value.toLocaleLowerCase().trim();

    return normalizeValue === "unknown" ? "Desconhecida" : normalizeValue;
  };

  const getStatusName = (value?: string) => {
    if (!value) return "Desconhecido";
    const normalizeValue = value.toLocaleLowerCase().trim();
    return normalizeValue === "alive"
      ? "Vivo"
      : normalizeValue === "dead"
        ? "Morto"
        : "Desconhecido";
  };

  const getGender = (value?: string) => {
    if (!value) return "Desconhecido";
    const normalizeValue = value.toLocaleLowerCase().trim();
    return normalizeValue === "female"
      ? "Feminino"
      : normalizeValue === "male"
        ? "Masculino"
        : "Sem gênero";
  };

  const parseLocation = (value?: string | { name: string }) => {
    if (!value) return "Desconhecida";

    if (typeof value === "object") return value.name;

    try {
      const parsed = JSON.parse(value);
      return parsed?.name ?? "Desconhecida";
    } catch {
      return value;
    }
  };

  return {
    states: {
      isApiCharacter,
      loading,
      error,
      form,
    },
    character: characterApiDetails ?? characterLocalDetails,
    handlers: {
      handleSave,
      handleDelete,
      handleEdit,
      getGender,
      handleFormChange,
      getOriginName,
      getStatusName,
      parseLocation,
    },
  };
}
