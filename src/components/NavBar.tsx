import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavbarProp{
    onSearch:(input:string)=>void
}

function NavBar({onSearch}:NavbarProp){
    return <HStack padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
}

export default NavBar;