import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GetCroppedImages from "../services/GetCroppedImages";

interface GenreListProp{
    onSelect:(genre:Genre)=>void;
    selectedGenre:Genre|null
}

function GenreList({onSelect,selectedGenre}:GenreListProp){
    const{data} = useGenres();
    return <List>
        {data.map(genre=><ListItem paddingY={'5px'} key={genre.id}>
            <HStack>
                <Image boxSize={'32px'} borderRadius={8} src={GetCroppedImages(genre.image_background)}/>
                <Button fontWeight={genre.id === selectedGenre?.id?'bold':'normal'} fontSize='lg' variant='link' onClick={()=>onSelect(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
}

export default GenreList;