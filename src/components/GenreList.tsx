import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GetCroppedImages from "../services/GetCroppedImages";
import useGameQueryStore from "../store";


function GenreList() {
  const { data } = useGenres();
  const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s=>s.setGenreId);
  return(
  <>
    <Heading fontSize='2xl' marginBottom={5}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={GetCroppedImages(genre.image_background)}
              objectFit="cover"
            />
            <Button
              whiteSpace={"normal"}
              textAlign={"left"}
              fontWeight={genre.id === selectedGenreId? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => setGenreId(genre.id)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  </>
  );
}

export default GenreList;
