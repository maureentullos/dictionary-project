import React from "react";


export default function Meanings(props) {
     console.log(props.meaning);
    return (
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
        <div className="Meanings">{props.meanings.definition}</div>

        <div className="Example">
          <em>{props.meanings.example}</em>
        </div>
      </div>
    );
    }




  
    

