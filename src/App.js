//import React, { useContext } from 'react'
import Cards from './componant/Cards';
import Header from './componant/Header'
import { Route, Routes } from 'react-router-dom';
import Addmovie from './componant/Addmovie';
import Detail from './componant/Detail';
//import { createContext, useEffect, useState  } from 'react';

//const Appstate = createContext();
const App = () => {
  // const [login, setLogin] = useState(false);
  // const [userName, setUserName] = useState("");

  return (
    // <Appstate.provider value={{login, userName, setLogin, setUserName}}> 
    <div>
     <Header/> 
 <Routes>
 <Route path="/" element={<Cards/>}/>
 <Route path="/about" element={<Addmovie/>}/>
 <Route path='/detail/:id' element={<Detail/>}/>
 </Routes>
     
    </div>
    //</Appstate.provider>
  )
}

export default App;
//export {Appstate}
