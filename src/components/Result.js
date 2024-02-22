import React from "react";
import { useContext } from "react";
import { generatecontext } from "./Statecomponent";
import "../App.css";

export default function Result() {
  const { marks,setmarks } = useContext(generatecontext);//this useState is to switch the questions and manipulating it in questionbox.js.

  const { display,setdisplay } = useContext(generatecontext);  //This useState is to display modal and manipulating it in questionbox.js.

  const { score,setscore } = useContext(generatecontext);  //This useState is to calculate the score and manipulating it in questionbox.js.

  const {setbox} = useContext(generatecontext);  //this useState is to display quiz questions and manipulating it in questionbox.js.

  console.log(marks, "marks");
function needtoretake(){    //On clicking retake everything is set to their initial states.
  setmarks(0);
  setdisplay(false);
  setscore(0);
  setbox(true)
}
  return (
    <div>
      {display === true && (
        <div className="body1">
          <p className="resulttitle">Your Score</p>
          <h1 className="percent">{score * 20}%</h1>
          <p className="numberof">Number of correct answers: {score}</p>
          <p className="wrong">Number of wrong answers: {5 - score}</p>
          <button onClick={needtoretake} className="retake">Retake</button>
        </div>
      )}
    </div>
  );
}
