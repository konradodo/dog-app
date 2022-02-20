import React from "react";

const DogButton = ({ dogName = 'click', onClick }) => {

    const style = () => {
        const letterNumber = dogName.charAt(0)?.charCodeAt(0)
        return { backgroundColor: `hsl(${letterNumber * 15}, 50%, 50%)` }
    }

    return <button
        className="dog-button"
        style={style()}
        onClick={onClick}
    >
        { dogName }
    </button>
}

export default DogButton
