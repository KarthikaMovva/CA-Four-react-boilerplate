import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { generatecontext } from "./Statecomponent";
import questions from "../questions";

export default function QuestionBox() {
  const [aquamarine, setvalue] = useState(true);         //this useState is to switch the background color.

  const [background, setbackground] = useState("aquamarine");   //this useState is to switch the text in button.

  const [line, setline] = useState(true);     //this useState is to switch the color of question.

  const {box, setbox} = useContext(generatecontext);   //this useState is to display quiz questions and accessing it from statecomponent.js.

  const { marks, setmarks } = useContext(generatecontext);  //this useState is to switch the questions and accessing it from statecomponent.js.

  const { display, setdisplay } = useContext(generatecontext);  //This useState is to display modal and accessing it from statecomponent.js.

  const { score, setscore } = useContext(generatecontext);  //This useState is to calculate the score and accessing it from statecomponent.js.

  const highlightclick = () => {        //On clicking button switching to true or false
    setline(true);
  };
  const nohighlightclick = () => {
    setline(false);
  };

  const sethighlight = useMemo(() => {    //Depending on boolean color changes.
    return {
      color: line ? "red" : "black",
    };
  }, [line]);

  useEffect(() => {           
    if (aquamarine) {             //Depending on boolean value changing the text in button.
      setbackground("Dark");
    } else {
      setbackground("Light");
    }
  }, [aquamarine]);
  const onEveryclick = () => {      //Depending on clicks boolean value changes.
    setvalue(!aquamarine);
  };

  const setcolors = useMemo(() => {           //Depending on boolean value switching the background color.
    return {
      backgroundColor: aquamarine ? "aquamarine" : "black",
    };
  }, [aquamarine]);

  function Countmarks(selected) {         //A function to calculate the score of first four questions and also changes the question on clicking a option.
  

    console.log(score, marks);
    if (marks < questions.length - 1) {
      if (selected.isCorrect === true) {
        setscore(score + 1);
      }
      setmarks((marks) => marks + 1);
    }
  }

  function Checkforlast(selected){      //this function is to calculate the score of last question, sets the boolean to true to display popup.
      if(selected.isCorrect===true){
        setscore(score+1)
        setdisplay(true);
        setbox(false);
      }else{
        setdisplay(true);
        setbox(false);
      }
  }

  const setboxdisplay = useMemo(() => {  //depending on boolean the quiz questions will display.
    return {
      display: box ? "block" : "none",
    };
  }, [box]);

  return (
    <div className="body" style={setcolors}>     
      <p className="logo">Kalvium</p>
      <button className="switchbackground" onClick={onEveryclick}>
        {background}
      </button>
      <div className="displaybox" style={setboxdisplay}>
        <p className="questionnumber">{marks + 1}/5</p>
        <p className="question" style={sethighlight}>
          {questions[marks].text}
        </p>
        {questions[marks].options.map((selected) => (
          <div
            key={selected.id}
            className={`option {selected.id}`}
            onClick={() => {
              if(marks<4){ Countmarks(selected);}    //Based on condition the function executes.
              else{Checkforlast(selected);}
            }}
          >
            {selected.text}
          </div>
        ))}
        <button className="highlight" onClick={highlightclick}>
          Highlight
        </button>
        <button className="nohighlight" onClick={nohighlightclick}>
          Remove Highlight
        </button>
      </div>
    </div>
  );
}
