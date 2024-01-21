
function SmileySearch (props) {

    function handleChange (event) {
        props.setValue(event.target.value)
    }

    return (
        <>
            <input
                value={props.value}
                className="search-input"
                onChange={handleChange}
            />
        </>
    )

}

export default SmileySearch;