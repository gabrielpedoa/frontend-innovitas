import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ICharacter } from "../../../@types/characters";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { loadCharactersByUserIdService } from "../../../services/auth";

export default function useMyCharactersHook() {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const [myCharacters, setMyCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    if (!user) return;
    async function loadCharactersByUserId() {
      const response = await loadCharactersByUserIdService(user?.id!);
      setMyCharacters(response);
    }
    loadCharactersByUserId();
  }, [user]);

  function navigateToCharacterProfile(character: ICharacter) {
    navigate(`/personagem/${character.id}`, {
      state: { source: "local-characters", character },
    });
  }

  console.log(myCharacters);

  return { myCharacters, navigateToCharacterProfile };
}
