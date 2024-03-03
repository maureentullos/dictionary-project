import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";


export default function Results(props) {
   console.log(props.results);

    if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <Phonetics phonetic={props.results.phonetic} />
        </section>

        {props.results.meanings.map(function (meanings, index) {
          return (
          <section>
            <Meanings meanings={meanings} />
          </section>
          )
        })}
      </div>
    )
    }else {
        return null;
    }
}
    
