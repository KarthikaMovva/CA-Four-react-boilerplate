import React,{useState} from "react";

export const generatecontext=React.createContext()

function StateProvider({children}){
    const[marks,setmarks]=useState(0);    // creating a context to use these 4 states in QuestionBox.js and Result.js.
    const[score,setscore]=useState(0);
    const[display,setdisplay]=useState(false);
    const[box,setbox]=useState(true);

    return(
        <generatecontext.Provider value={{marks,setmarks,display,setdisplay,score,setscore,box,setbox}}>  
          {children}
        </generatecontext.Provider>
    )
}
export default StateProvider;