import React from "react";

const smurfList = props => {
    console.log(props);

    return (
        <div className="smurf-list">
            {props.smurfInfo.map(char => (
                <div className="smurf" key="char.id">
                    <h2>Name: {props.name}</h2>
                    <p>Age: {props.age}</p>
                    <p>Height: {props.height}</p>
                </div>
            ))}
        </div>
    )
}

// export default SmurfList;