import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { generatecontext } from "./Statecomponent";
import questions from "../questions";

export default function QuestionBox() {
  const [aquamarine, setvalue] = useState(true);
  const [background, setbackground] = useState("aquamarine");
  const [line, setline] = useState(true);
  const [box, setbox] = useState(true);
  const { marks, setmarks } = useContext(generatecontext);
  const { display, setdisplay } = useContext(generatecontext);
  const { score, setscore } = useContext(generatecontext);

  const highlightclick = () => {
    setline(true);
  };
  const nohighlightclick = () => {
    setline(false);
  };

  const sethighlight = useMemo(() => {
    return {
      color: line ? "red" : "black",
    };
  }, [line]);

  useEffect(() => {
    if (aquamarine) {
      setbackground("Dark");
    } else {
      setbackground("Light");
    }
  }, [aquamarine]);
  const onEveryclick = () => {
    setvalue(!aquamarine);
  };

  const setcolors = useMemo(() => {
    return {
      backgroundColor: aquamarine ? "aquamarine" : "black",
    };
  }, [aquamarine]);

  function Countmarks(selected) {
    // console.log(selected.isCorrect, "imp");

    console.log(score, marks);
    if (marks < questions.length - 1) {
      if (selected.isCorrect === true) {
        setscore(score + 1);
        console.log(score,"*")
      }
      setmarks((marks) => marks + 1);
    } else {
      setdisplay(true);
      setbox(false);
    }
  }

  const setboxdisplay = useMemo(() => {
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
        <p className="questionnumber">Question {marks + 1} out of 5</p>
        <p className="question" style={sethighlight}>
          {questions[marks].text}
        </p>
        {questions[marks].options.map((selected) => (
          <div
            key={selected.id}
            className={`option {selected.id}`}
            onClick={() => {
              Countmarks(selected);
              console.log(selected);
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
