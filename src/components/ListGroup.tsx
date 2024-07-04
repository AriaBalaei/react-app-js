import { useState } from "react";



function ListGroup() {
  let items = [
    'Physics',
    'Math',
    'Quantum',
    'Photonic'
  ];
  //let selectedIndex = 0 ;
  // HOOK
  const [selectedIndex , setSelectedIndex] = useState(-1)
  console.log("component",selectedIndex);
  return(
    <>
    <h1>List</h1>
    {items.length === 0 && <p>No item found</p>}
    <ul className="list-group">
      {
       items.map((item , index) => 
       <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key = {item} 
       onClick={() => {
        
        setSelectedIndex(index);
        console.log("callback",selectedIndex);
      }}
       >
        {item}</li>)
      }
    </ul>
  </>
  )
}

export default ListGroup;