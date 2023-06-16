import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import GetCroppedImages from '../services/GetCroppedImages';

interface GameCardProps{
    game:Game
}

function GameCard({game}:GameCardProps){
    return (
        <Card width='250px' borderRadius={10} overflow='hidden'>
            <Image src={GetCroppedImages(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
                <CriticScore metacritic={game.metacritic}></CriticScore>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard;