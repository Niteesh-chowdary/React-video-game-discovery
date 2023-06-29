import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

function GameHeading(){
    const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);
    const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId);
    const {data:genres} = useGenres();
    const {data:platforms} = usePlatforms();
    const genreSelected = genres?.results.find(genre=>genre.id==selectedGenreId);
    const platformSelected = platforms?.results.find(platform=>platform.id==selectedPlatformId);
    const heading = `${platformSelected?.name || ''} ${genreSelected?.name || ''} Games`
    return <Heading paddingLeft={10} marginY={5} as='h1'>{heading}</Heading>
}

export default GameHeading;