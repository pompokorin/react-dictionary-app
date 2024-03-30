import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <span className="word"> {props.results.word} </span>
          {"  "} <span className="phonetic">/{props.results.phonetic}/</span>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              {" "}
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
