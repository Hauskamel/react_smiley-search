import Smiley from "./smiley.jsx";


function List(smileys) {

    const filteredList = smileys.data.data.filter(s => s.includes(smileys.searchWord))

    console.log(filteredList)

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