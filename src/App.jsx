import {useState} from "react";
import SmileySearch from "./components/search.jsx";
import List from "./components/list.jsx";

function App(smileys) {

    const [searchWord, setSearchWord] = useState("");

    return (
        <>
            <div className="search_wrapper">
                <SmileySearch value={searchWord} setValue={setSearchWord}/>
                <List data={smileys} />
            </div>

        </>
    )
}

export default App
