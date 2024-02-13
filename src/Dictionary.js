import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response);
    }

     function search(event) {
        event.preventDefault();
       alert(`Searching for ${keyword}`);

       let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word={sunset}&key=${apiKey}`;
        let apiKey= "315701d04b5bbc0f6b0t3c472foa1a1f";
         axios.get(apiUrl).then(handleResponse);
     }

    

 function handleKeywordChange(event) {
       setKeyword(event.target.value);
     }

    return (
    <div className="Dictionary">
       
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
    </div>
    );
}

