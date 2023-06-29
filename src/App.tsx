import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";


function App() {
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
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading></GameHeading>
        <HStack marginBottom={5} spacing={5} paddingLeft={10}>
          <PlatformSelector/>
          <SortSelector/>
        </HStack>
        <GameGrid ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
