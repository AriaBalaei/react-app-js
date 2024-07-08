import { useState } from "react";
import styled from "styled-components";
import './ListGroup.css'


const List = styled.ul`
list-style: none;
padding: 0;
`
const ListItem = styled.li`
padding: 5px;
`

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}



function ListGroup({items, heading , onSelectItem}: Props) {
  
  //let selectedIndex = 0 ;
  // HOOK
  const [selectedIndex , setSelectedIndex] = useState(-1)
  
  
  return(
    <>
    <h1>{heading}</h1>
    {items.length === 0 && <p>No item found</p>}
    <ul className="list-group">
      {
       items.map((item , index) => 
       <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key = {item} 
       onClick={() => {
        
        setSelectedIndex(index);
        onSelectItem(item)
      }}
       >
        {item}</li>)
      }
    </ul>
  </>
  )
}

export default ListGroup;