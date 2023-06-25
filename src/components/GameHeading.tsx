import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps{
    gameQuery:GameQuery
}

function GameHeading({gameQuery}:GameHeadingProps){
    const {data:genres} = useGenres();
    const {data:platforms} = usePlatforms();
    const genreSelected = genres?.results.find(genre=>genre.id==gameQuery.genreId);
    const platformSelected = platforms?.results.find(platform=>platform.id==gameQuery.platformId);
    const heading = `${platformSelected?.name || ''} ${genreSelected?.name || ''} Games`
    return <Heading paddingLeft={10} marginY={5} as='h1'>{heading}</Heading>
}

export default GameHeading;