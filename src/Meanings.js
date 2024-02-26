import React from "react";
import Synonyms from "./Synonyms";


export default function Meanings(props) {
     console.log(props.meaning);
    return (
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
        <strong>Definition:</strong>
        <div className="Meanings">{props.meanings.definition}</div>
        <br/>
        <strong>Example:</strong>
          <em>{props.meanings.example}</em>
          <br/>
          <Synonyms synonyms={props.meanings.synonyms}/>
          
       
      </div>
    );
    }




  
    

