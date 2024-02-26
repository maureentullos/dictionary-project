import React from "react";
import Synonyms from "./Synonyms";


export default function Meanings(props) {
     console.log(props.meaning);
    return (
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
        
        {props.meanings.definition.map(function(definition,index){
       return (
       <div key={index}>
        <strong>Definition:</strong>{definition.definition}
        <strong>Example:</strong>
          <em>{props.meanings.example}</em>
          <br/>
          <Synonyms synonyms={props.meanings.synonyms}/>
          
       
      </div>
    );
    })}
    </div>
    );
    }



  
    

