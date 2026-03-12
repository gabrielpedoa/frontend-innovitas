import useMyCharactersHook from "./hooks/useMyCharactersHook";
import {
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterMeta,
  CharacterName,
  CharactersGrid,
  Container,
  EmptyState,
  SavedBadge,
  Subtitle,
  Title,
} from "./styles";

export default function MyCharacters() {
  const { myCharacters, navigateToCharacterProfile } = useMyCharactersHook();

  if (!myCharacters?.length) {
    return (
      <Container>
        <Title>Meus Personagens</Title>

        <EmptyState>
          <h2>Você ainda não salvou personagens 👽</h2>
          <p>Explore a lista de personagens e salve seus favoritos.</p>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Meus Personagens</Title>
      <Subtitle>Sua coleção pessoal de personagens favoritos</Subtitle>

      <CharactersGrid>
        {myCharacters.map((character) => (
          <CharacterCard
            key={character.original_character_id}
            onClick={() => navigateToCharacterProfile(character)}
          >
            <SavedBadge>Salvo</SavedBadge>

            <CharacterImage src={character.image} />

            <CharacterInfo>
              <CharacterName>{character.name}</CharacterName>

              <CharacterMeta>
                {character.species} • {character.status}
              </CharacterMeta>
            </CharacterInfo>
          </CharacterCard>
        ))}
      </CharactersGrid>
    </Container>
  );
}
