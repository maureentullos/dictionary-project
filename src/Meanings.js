import React from "react";


export default function Meanings(props) {
     console.log(props.meanings);
    return (
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
       
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div> 
            </div>
                );
        })}
        </div> 
    );
}



  
    

