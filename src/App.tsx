import ListGroup from "./components/ListGroup"
function App() {
  const handelSelectItem = ( item: string) => {
    console.log(item)
  }
  let items = [
    'Physics',
    'Math',
    'Quantum',
    'Photonic'
  ];
  return <div><ListGroup items={items} heading='List' onSelectItem={handelSelectItem}/></div>
}

export default App;