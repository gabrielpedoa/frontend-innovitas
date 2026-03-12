import { useEffect, useState } from "react";
import type {
  ICharacter,
  ICharacterApiResponse,
} from "../../@types/characters";
import { useAuthContext } from "../../hooks/useAuthContext";
import CharacterField from "./components/CharactersField";
import useCharacterDetailsHook from "./hooks/useCharacterDetailsHook";
import {
  ActionButton,
  ButtonGroup,
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  Container,
  ErrorMessage,
} from "./styles";

export default function CharacterDetails() {
  const { character, handlers, states } = useCharacterDetailsHook();
  const { user } = useAuthContext();

  const apiCharacters = states.isApiCharacter;

  const [form, setForm] = useState(character);

  function handleChange(field: string, value: string) {
    setForm((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  }

  console.log(form)

  useEffect(() => {
    if (character) {
      setForm(character);
    }
  }, [character]);

  return (
    <Container>
      <CharacterCard>
        <CharacterImage src={character?.image} />

        <CharacterInfo>
          <CharacterName>{character?.name}</CharacterName>

          <CharacterField
            label="Espécie"
            value={form?.species}
            editable={!apiCharacters}
            onChange={(value) => handleChange("species", value)}
          />
          <CharacterField
            label="Gênero"
            value={handlers.getGender(form?.gender)}
            editable={!apiCharacters}
            onChange={(value) => handleChange("gender", value)}
          />
          <CharacterField
            label="Status"
            value={handlers.getStatusName(form?.status)}
            editable={!apiCharacters}
            onChange={(value) => handleChange("status", value)}
          />
          <CharacterField
            label="Origem"
            value={form?.origin as string}
            editable={!apiCharacters}
            onChange={(value) => handleChange("origin", value)}
          />

          <CharacterField
            label="Localização atual"
            value={form?.location as string}
            editable={!apiCharacters}
            onChange={(value) => handleChange("location", value)}
          />

          {states.error && <ErrorMessage>{states.error}</ErrorMessage>}
          <ButtonGroup>
            {apiCharacters && (
              <ActionButton
                disabled={states.loading}
                onClick={() =>
                  handlers.handleSave(user, character as ICharacterApiResponse)
                }
              >
                {states.loading ? "Salvando..." : "Salvar Personagem"}
              </ActionButton>
            )}

            {!apiCharacters && (
              <>
                <ActionButton
                  disabled={states.loading}
                  onClick={() => handlers.handleEdit(user, form as ICharacter)}
                >
                  Editar informações
                </ActionButton>

                <ActionButton
                  danger
                  disabled={states.loading}
                  onClick={() => handlers.handleDelete(character?.id)}
                >
                  Excluir
                </ActionButton>
              </>
            )}
          </ButtonGroup>
        </CharacterInfo>
      </CharacterCard>
    </Container>
  );
}
