import React, { useState } from "react";
import axios from "axios";

function SmurfForm(props) {
    const [smurfInfo, setSmurfInfo] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
    });

    const handleChanges = e => {
        e.preventDefault();
        setSmurfInfo({
            ...smurfInfo,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = e => {
        axios
            .post("http://localhost:3333/smurfs", smurfInfo)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })  
    };

    return (
        <div className="form-box">
            <h2>Add a Smurf!</h2>
            <form>
                <label htmlFor="name">Smurf Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Smurf Name"
                    value={smurfInfo.name}
                    onChange={handleChanges}
                />
                <label htmlFor="age">Smurf Age:</label>
                <input
                    type="text"
                    name="age"
                    placeholder="Smurf Age"
                    value={smurfInfo.age}
                    onChange={handleChanges}
                />
                <label htmlFor="height">Smurf Height:</label>
                <input
                    type="text"
                    name="height"
                    placeholder="Smurf Height"
                    value={smurfInfo.height}
                    onChange={handleChanges}
                />
                <button onClick={handleSubmit}>Add Smurf to the village</button>
            </form>
        </div>
    )
}

export default SmurfForm;