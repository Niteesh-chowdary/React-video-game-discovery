import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
            selectedGenreId={game.genreId}
            onSelect={(genreId) => setGame({ ...game, genreId})}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={game}></GameHeading>
        <HStack marginBottom={5} spacing={5} paddingLeft={10}>
          <PlatformSelector
            selectedPlatformId={game.platformId}
            onSelectPlatform={(platformId) => setGame({ ...game, platformId})}
          />
          <SortSelector sortValue={game.selector} onSelect={(value)=>setGame({...game,selector:value})} />
        </HStack>
        <GameGrid gameQuery={game}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
