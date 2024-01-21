function Smiley (smiley) {

    return (
        <>
            <div className="smiley-wrapper">
                <div>{smiley.char}</div>
                <h1 className="smiley-name">{smiley.name}</h1>
            </div>
        </>
    )

}

export default Smiley;