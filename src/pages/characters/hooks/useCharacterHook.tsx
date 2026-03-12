import { useState, type ChangeEvent } from "react";
import type {
  ICharacterApiResponse,
  IDefaultApiResponse,
} from "../../../@types/characters";
import { useFetching } from "../../../hooks/useFetching";

export default function useCharactersHook() {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [cooldown, setCooldown] = useState<boolean>(false);

  const { data: characters, loading } = useFetching<
    IDefaultApiResponse<ICharacterApiResponse[]>
  >({
    url: `/characters?page=${page}${search ? `&name=${search}` : ""}`,
    dependeces: [page, search],
  });

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSearch() {
    setPage(1);
    setSearch(name.trim() || undefined);
  }

  function handlePageChange(type: "add" | "remove") {
    if (cooldown) return;

    setCooldown(true);

    if (type === "add") setPage((prev) => prev + 1);
    else setPage((prev) => prev - 1);

    setTimeout(() => setCooldown(false), 500);
  }

  return {
    states: { name, page, search, loading },
    handlers: { handleNameChange, handlePageChange, handleSearch },
    data: { characters },
  };
}
