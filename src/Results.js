import React from "react";
import Meanings from "./Meanings";


export default function Results(props) {
   console.log(props.results);

    if (props.results) {
    return (
    <div className="Results">
        <h2>{props.results.word}</h2>

        {props.results.meanings.map(function(meanings,index) {
        return (
            <Meanings meanings={meanings} />
        )
    })}
        </div>
   );
    }else {
        return null;
    }
}
    