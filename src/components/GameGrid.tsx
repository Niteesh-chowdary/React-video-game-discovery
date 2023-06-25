import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface GameGridProps {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: GameGridProps) {
  const { data, error, isLoading,isFetchingNextPage,fetchNextPage,hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box padding={10}>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        
        spacing={3}
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage&& <Button marginY={5} onClick={()=>fetchNextPage()}>{isFetchingNextPage?'Loading...':'Load More'}</Button>}
    </Box>
  );
}

export default GameGrid;
