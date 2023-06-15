import { Badge } from "@chakra-ui/react";

interface CriticScoreProp{
    metacritic:number;
}

function CriticScore({metacritic}:CriticScoreProp){
    const color = metacritic>75?'green':metacritic>65?'yellow':'';
    return <Badge colorScheme={color} paddingX={2} fontSize={'12px'}>{metacritic}</Badge>
}

export default CriticScore;