import React from "react";

const LoremComponent = (props) => {
    return (
        <>
            <div className="p-4 h-30 m-4 inline-block bg-white">
                <img className="p-4 w-15 h-15" src={props.pic} alt="Picture" />
                <h1> {props.author} </h1>
            </div>
        </>
    )
}

export default LoremComponent