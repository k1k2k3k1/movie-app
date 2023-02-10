//import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
//import { Appstate } from '../App';
const Header = () => {
  //const useAppstate = useContext(Appstate);

  return (
    <div class="text-3xl text-white 
     items-center font-semibold p-3 border-b-2 border-gray-500 
      flex justify-between bg-gray ">
        <Link to={'/'}><h1>MOVIE APP</h1></Link>
   
     <Link to={"/about"} > <h1 class="text-lg text-white flex items-center cursor-pointer">
     <AddIcon/>AddNew
     </h1></Link>
  
    </div>
  )
}

export default Header
