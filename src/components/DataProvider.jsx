import { createContext, useState } from "react";
import {MyContext} from "./MyContext"

const DataProvider = ({children}) => {
  const [init,setinit] = useState("Hire us!")
  return (
    <>
<MyContext.Provider value={{init,setinit}}>
  {children}
</MyContext.Provider>
    </>
  )
};

export default DataProvider;
