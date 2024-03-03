import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        
        setResults(response.data);
    }

    function search() {
        let apiKey = "315701d04b5bbc0f6b0t3c472foa1a1f";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);

    }

     function handleSubmit(event) {
        event.preventDefault();
        search();
     }

    

 function handleKeywordChange(event) {
       setKeyword(event.target.value);
     }

function load() {
    setLoaded(true);
    search();

}

     if (loaded) {
       return (
         <div className="Dictionary">
           <section>
            <h1>What word do you want to look up?</h1>
             <form onSubmit={handleSubmit}>
               <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
             </form>
             <div className="hint">
               suggested words: ubiquitous, love, conundrum, albeit...
             </div>
           </section>

           <Results results={results} />
         </div>
       );
     }else {
        load();
        return "Loading";
     }
}

