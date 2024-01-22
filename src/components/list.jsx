import Smiley from "./smiley.jsx"


function List(smileys) {
    let searchWord = smileys.searchWord;

    const filteredSmileys = smileys.data.data.filter(smiley => {
        const searchWordArr = searchWord.split("");
        const smileyNameArr = smiley.name.split("");

        return searchWordArr.every((letter, index) => {
            return letter === smileyNameArr[index]
        })
    })


    return (
        <>
            <ul>
                {
                    filteredSmileys.map((smiley, index) => (
                        <Smiley key={index} char={smiley.char} name={smiley.name}/>
                    ))
                }
            </ul>
        </>
    )
}

export default List;