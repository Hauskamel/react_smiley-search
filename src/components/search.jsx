
function SmileySearch () {

    function handleChange (event) {
        console.log(event.target.value)
    }

    return (
        <>
            <input
                className="search-input"
                onChange={handleChange}
            />
        </>
    )

}

export default SmileySearch;