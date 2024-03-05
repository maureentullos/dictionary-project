import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
     
    let [loaded, setLoaded] = useState(false);
    let [photos,setPhotos] = useState(null);

    function handleImages(response) {
        setPhotos(response.data.photos);
        
    }

    function handleResponse(response) {
      setResults(response.data);
      let apiKey = "315701d04b5bbc0f6b0t3c472foa1a1f";
      let apiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}&per_page=6`;
      
      axios.get(apiUrl, { headers: {Authorization: `Bearer ${apiKey}`}}).then(handleImages);
    }


    function search() {
      let apiKey = "315701d04b5bbc0f6b0t3c472foa1a1f";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      
      axios.get(apiUrl).then(handleResponse);

      
    }
    

    

function load() {
  setLoaded(true);
  search();
}
    

     function handleSubmit(event) {
        event.preventDefault();
        search();
     }

    

 function handleKeywordChange(event) {
       setKeyword(event.target.value);
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
           <Photos photos={photos}/>
         </div>
       );
     }else {
        load();
        return "Loading";
     }
}

