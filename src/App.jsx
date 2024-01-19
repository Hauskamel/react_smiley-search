import {useState} from "react";
import Smiley from "./components/smiley.jsx";

function App(smileys) {
    console.log(smileys.data.length)

    return (
        <>
            <div className="search_wrapper">
                <input className="search_field"/>
                <ul>
                    {smileys.data.map((smiley, index) => (
                        <Smiley key={index} name={smiley.name} />
                    ))}
                </ul>
            </div>

        </>
    )
}

export default App
