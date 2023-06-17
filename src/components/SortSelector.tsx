import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SortSelectorProp{
    onSelect:(value:string)=>void
    sortValue:string
}


function SortSelector({onSelect,sortValue}:SortSelectorProp){
    const sortOrders =[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'},

    ]
    const order = sortOrders.find(order=>order.value == sortValue)
    return <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {order?.label || 'Relevance'}</MenuButton>
        <MenuList>
            {sortOrders.map(order=><MenuItem key={order.value} value={order.value} onClick={()=>onSelect(order.value)}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu>
}

export default SortSelector;