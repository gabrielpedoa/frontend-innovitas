import useHomeHook from "./hooks/useHomeHook";
import {
  Card,
  CardTitle,
  CardValue,
  CharacterCard,
  CharacterImage,
  CharacterName,
  Container,
  FavoritesGrid,
  Section,
  StatsGrid,
  Title,
} from "./styles";

function Home() {
  const { cards, userFavoriteCharacters } = useHomeHook();

  return (
    <Container>
      <Title>Dashboard</Title>

      <StatsGrid>
        {cards.map((info) => (
          <Card key={info.title}>
            <CardTitle>{info.title}</CardTitle>
            <CardValue>{info.value}</CardValue>
          </Card>
        ))}
      </StatsGrid>

      <Section>
        <Title>Meus Favoritos</Title>

        <FavoritesGrid>
          {userFavoriteCharacters.length === 0 && <p>No favorites yet</p>}

          {userFavoriteCharacters.map((character) => (
            <CharacterCard key={character.original_character_id}>
              <CharacterImage src={character.image} />
              <CharacterName>{character.name}</CharacterName>
            </CharacterCard>
          ))}
        </FavoritesGrid>
      </Section>
    </Container>
  );
}

export default Home;
