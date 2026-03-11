import { useAuthContext } from "../../hooks/useAuthContext";
import useCharacterDetailsHook from "./hooks/useCharacterDetailsHook";
import {
  ActionButton,
  ButtonGroup,
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  Container,
  InfoRow,
} from "./styles";

export default function CharacterDetails() {
  const { character, handlers, states } = useCharacterDetailsHook();
  const { user } = useAuthContext();

  const apiCharacters = states.source === "api-characters";
  const favoriteCharacters = states.saved;
  return (
    <Container>
      <CharacterCard>
        <CharacterImage src={character?.image} />

        <CharacterInfo>
          <CharacterName>{character?.name}</CharacterName>

          <InfoRow>Espécie: {character?.species}</InfoRow>
          <InfoRow>Gênero: {handlers.getGender(character?.gender)}</InfoRow>
          <InfoRow>Status: {handlers.getStatusName(character?.status)}</InfoRow>
          <InfoRow>
            Origem: {handlers.getOriginName(character?.origin.name)}
          </InfoRow>
          <InfoRow>
            Localização atual: {character?.location?.name ?? "Desconhecida"}
          </InfoRow>

          <ButtonGroup>
            {apiCharacters && !favoriteCharacters && (
              <ActionButton
                disabled={favoriteCharacters}
                onClick={() => handlers.handleSave(user)}
              >
                Salvar Personagem
              </ActionButton>
            )}

            {states.saved && (
              <>
                <ActionButton onClick={handlers.handleEdit}>
                  Editar
                </ActionButton>

                <ActionButton danger onClick={handlers.handleDelete}>
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
