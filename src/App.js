import { useState } from "react";
import Input from "./Components/Input"
import Display from "./Components/Display"

function App() {
  const [user, setUser] = useState(null)
  
  const display = user && <Display user={user} />

  return (
    <div >
      <Input setUser={setUser} />
      {display}
    </div>
  );
}

export default App;

//COMPONENTS
//app -> user data
    //step 1: get the data
        //state, input, form, functionality to retreive the data
    //step 2: display the data

//input -> username
//display

//STATEFUL VARIABLES
// user data
// username