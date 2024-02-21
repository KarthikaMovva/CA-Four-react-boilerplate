// import React, { useEffect, useState } from "react";
import "./App.css";
// import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import StateProvider from "./components/Statecomponent";



function App() {

  return (
    <div>
      <StateProvider>
      <Result/>
      <QuestionBox/>
      </StateProvider>
     
    </div>
  );
}

export default App;