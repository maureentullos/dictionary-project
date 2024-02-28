import React from "react";
import Synonyms from "./Synonyms";


export default function Meanings(props) {
     console.log(props.meaning);
    return (
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>

        <div className="definition">
          <strong>Definition:</strong>
          {props.meanings.definition}
        </div>
        <div className="example">
          <strong>Example:</strong>

          <em>{props.meanings.example}</em>
        </div>
        <strong>Synonyms:</strong>

        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    );
    }



  
    

