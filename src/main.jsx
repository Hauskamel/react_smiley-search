import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

fetch("../node_modules/emoji.json/emoji.json")
    .then((response) => response.json())
    .then((json) => {

        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <App data={json}/>
            </React.StrictMode>
        );
    });