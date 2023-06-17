import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps{
    gameQuery:GameQuery
}

function GameHeading({gameQuery}:GameHeadingProps){
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
    return <Heading paddingLeft={10} marginY={5} as='h1'>{heading}</Heading>
}

export default GameHeading;