import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface PlatformProps{
    selectedPlatform:Platform | null
    onSelectPlatform:(platform:Platform)=>void
}

function PlatformSelector({onSelectPlatform,selectedPlatform}:PlatformProps){
    const {data,error} = usePlatforms();
    const displayplatform = selectedPlatform?selectedPlatform.name:"Platform"
    if(error) return null;
    return <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{displayplatform}</MenuButton>
        <MenuList>
            {data.map((platform)=><MenuItem key={platform.id} onClick={()=>onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
}

export default PlatformSelector;