import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GetCroppedImages from "../services/GetCroppedImages";
import { MouseEventHandler } from "react";

interface GenreListProp{
    onSelect:(genre:Genre)=>void;
}

function GenreList({onSelect}:GenreListProp){
    const{data} = useGenres();
    return <List>
        {data.map(genre=><ListItem paddingY={'5px'} key={genre.id}>
            <HStack>
                <Image boxSize={'32px'} borderRadius={8} src={GetCroppedImages(genre.image_background)}/>
                <Button fontSize='lg' variant='link' onClick={()=>onSelect(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
}

export default GenreList;