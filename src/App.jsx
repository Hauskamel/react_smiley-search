import Smiley from "./components/smiley.jsx";

function App(smileysData) {

  console.log(smileysData);


  return (
    <>
      <div className="search_wrapper">
        <input className="search_field"/>
        <ul>
          <Smiley />
          <Smiley />
          <Smiley name={} />
        </ul>
      </div>

    </>
  )
}

export default App
