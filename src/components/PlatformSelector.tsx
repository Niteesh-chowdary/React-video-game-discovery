import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface PlatformProps{
    selectedPlatformId?:number;
    onSelectPlatform:(platformId:number)=>void
}

function PlatformSelector({onSelectPlatform,selectedPlatformId}:PlatformProps){
    const {data,error} = usePlatforms();
    const displayplatform = (data?.results.find((platform)=>platform.id==selectedPlatformId))
    if(error) return null;
    return <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{displayplatform?.name ||'Platform'}</MenuButton>
        <MenuList>
            {data?.results.map((platform)=><MenuItem key={platform.id} onClick={()=>onSelectPlatform(platform.id)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
}

export default PlatformSelector;