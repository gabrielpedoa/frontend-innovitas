import { useNavigate } from "react-router-dom";
import useCharactersHook from "./hooks/useCharacterHook";
import {
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterMeta,
  CharacterName,
  CharactersGrid,
  Container,
  PageButton,
  Pagination,
  SearchButton,
  SearchContainer,
  SearchInput,
  Title,
  TopBar,
} from "./styles";

export default function Characters() {
  const { data, handlers, states } = useCharactersHook();

  const navigate = useNavigate();
  return (
    <Container>
      <Title>Personagens</Title>

      <TopBar>
        <SearchContainer>
          <SearchInput
            placeholder="Digite aqui o nome do personagem..."
            value={states.name}
            onChange={handlers.handleNameChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") handlers.handleSearch();
            }}
          />

          <SearchButton
            disabled={!states.name.trim()}
            onClick={handlers.handleSearch}
          >
            🔍
          </SearchButton>
        </SearchContainer>
      </TopBar>

      <CharactersGrid>
        {data.characters?.results.map((character) => (
          <CharacterCard
            key={character.id}
            onClick={() =>
              navigate(`/personagem/${character.id}`, {
                state: { source: "api-characters" },
              })
            }
          >
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

      <Pagination>
        <PageButton
          disabled={states.page === 1 || states.loading}
          onClick={() => handlers.handlePageChange("remove")}
        >
          Voltar
        </PageButton>
        {states.page}
        <PageButton
          disabled={states.loading}
          onClick={() => handlers.handlePageChange("add")}
        >
          Seguinte
        </PageButton>
      </Pagination>
    </Container>
  );
}
