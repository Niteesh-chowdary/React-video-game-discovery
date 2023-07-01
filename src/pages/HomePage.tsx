import { Grid, Show, GridItem, HStack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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
  )
}

export default HomePage