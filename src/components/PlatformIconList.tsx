import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface PlatformIconListProps {
  platforms: Platform[];
}

const iconMap:{[key:string]:IconType} = {
    pc:FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    nintendo: SiNintendo,
    mac:FaApple,
    linux:FaLinux,
    ios:MdPhoneIphone,
    web:BsGlobe,
    android:FaAndroid
}

function PlatformIconList({ platforms }: PlatformIconListProps) {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500' key={platform.name}/>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
