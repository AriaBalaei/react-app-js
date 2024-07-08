import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import { BsFillCalendarFill } from "react-icons/bs";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false)

  return <div>
      <Button onClick={() => {}}>kill Button</Button>
  </div>
}
//    {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>Alart</Alert>}
// <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
//<BsFillCalendarFill color='red' size='30'></BsFillCalendarFill>
export default App;