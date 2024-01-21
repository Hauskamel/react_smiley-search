import Smiley from "./smiley.jsx";


function List(smileys) {

    console.log({smileys})

    return (
        <>
            <ul>
                {smileys.data.data.map((smiley, index) => (
                    <Smiley key={index} char={smiley.char} name={smiley.name}/>
                ))}
            </ul>
        </>
    )
}

export default List;