import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector, { SortSelectorProp } from "./components/sortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  selector:string
  searchText:string
}

function App() {
  const [game, setGame] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=>setGame({...game,searchText:searchText})}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={game.genre}
            onSelect={(genre) => setGame({ ...game, genre:genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={game}></GameHeading>
        <HStack marginBottom={5} spacing={5} paddingLeft={10}>
          <PlatformSelector
            selectedPlatform={game.platform}
            onSelectPlatform={(platform) => setGame({ ...game, platform:platform })}
          />
          <SortSelector sortValue={game.selector} onSelect={(value)=>setGame({...game,selector:value})} />
        </HStack>
        <GameGrid gameQuery={game}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
