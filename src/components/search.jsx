
function SmileySearch (props) {

    console.log(props.value)

    function handleChange (event) {
        return props.setValue(event.target.value)
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