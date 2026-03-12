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

  console.log({
    origim: handlers.parseLocation(states.form?.origin),
    location: handlers.parseLocation(states.form?.location),
  });
  return (
    <Container>
      <CharacterCard>
        <CharacterImage src={character?.image} />

        <CharacterInfo>
          <CharacterName>{character?.name}</CharacterName>

          <CharacterField
            label="Espécie"
            value={states.form?.species}
            editable={!states.isApiCharacter}
            onChange={(value) => handlers.handleFormChange("species", value)}
          />
          <CharacterField
            label="Gênero"
            value={
              states.isApiCharacter
                ? handlers.getGender(states.form?.gender)
                : states.form?.gender
            }
            editable={!states.isApiCharacter}
            onChange={(value) => handlers.handleFormChange("gender", value)}
          />
          <CharacterField
            label="Status"
            value={
              states.isApiCharacter
                ? handlers.getStatusName(states.form?.status)
                : states.form?.status
            }
            editable={!states.isApiCharacter}
            onChange={(value) => handlers.handleFormChange("status", value)}
          />
          <CharacterField
            label="Origem"
            value={handlers.parseLocation(states.form?.origin)}
            editable={!states.isApiCharacter}
            onChange={(value) => handlers.handleFormChange("origin", value)}
          />

          <CharacterField
            label="Localização atual"
            value={handlers.parseLocation(states.form?.location)}
            editable={!states.isApiCharacter}
            onChange={(value) => handlers.handleFormChange("location", value)}
          />

          {states.error && <ErrorMessage>{states.error}</ErrorMessage>}
          <ButtonGroup>
            {states.isApiCharacter && (
              <ActionButton
                disabled={states.loading}
                onClick={() =>
                  handlers.handleSave(user, character as ICharacterApiResponse)
                }
              >
                {states.loading ? "Salvando..." : "Salvar Personagem"}
              </ActionButton>
            )}

            {!states.isApiCharacter && (
              <>
                <ActionButton
                  disabled={states.loading}
                  onClick={() =>
                    handlers.handleEdit(user, states.form as ICharacter)
                  }
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
