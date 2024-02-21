import React,{useState} from "react";

export const generatecontext=React.createContext()

function StateProvider({children}){
    const[marks,setmarks]=useState(0);
    const[score,setscore]=useState(0);
    const[display,setdisplay]=useState(false);

    return(
        <generatecontext.Provider value={{marks,setmarks,display,setdisplay,score,setscore}}>
          {children}
        </generatecontext.Provider>
    )
}
export default StateProvider;