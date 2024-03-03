import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";


export default function Meanings(props) {
     console.log(props.meaning);
    return (
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>

        <div className="definition">
          
          {props.meanings.definition}
        </div>
        <div className="example">
          

          <em>{props.meanings.example}</em>
        </div>
        

        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    );
    }



  
    

