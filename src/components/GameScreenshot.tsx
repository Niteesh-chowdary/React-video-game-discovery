import useScreenShots from "../hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  console.log(data);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {data?.results.map((images) => (
        <Image src={images?.image} key={images.id}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
