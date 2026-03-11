import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { ICharacterApiResponse } from "../../../@types/characters";
import { useFetching } from "../../../hooks/useFetching";
import type { IUser } from "../../../@types/user";

export default function useCharacterDetailsHook() {
  const { id } = useParams();
  const location = useLocation();

  const source = location.state?.source;

  const navigate = useNavigate();

  /* const url =
    source === "api-characters" ? `/characters/${id}` : `/my-characters/${id}`; */

  const { data: character } = useFetching<ICharacterApiResponse>({
    url: `/characters/${id}`,
    dependeces: [id],
  });

  const saved = source === "db";

  function handleSave(user: IUser | null) {
    if (!user) return navigate("/auth/login");
    // POST /my-characters
  }

  function handleDelete() {
    // DELETE /my-characters/:id
  }

  function handleEdit() {
    // PUT /my-characters/:id
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
        : normalizeValue === "genderless"
          ? "Sem gênero"
          : "Desconhecido";
  };

  return {
    states: { source, saved },
    character,
    handlers: {
      handleSave,
      handleDelete,
      handleEdit,
      getGender,
      getOriginName,
      getStatusName,
    },
  };
}
