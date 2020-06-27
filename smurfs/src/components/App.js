import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import SmurfForm from "../components/SmurfForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then (res => {
        console.log(res)
        const smurfData = res.data
        this.setState({smurfs: smurfData});
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Smurf Village!</h1>
        <SmurfForm />
      </div>
    );
  }
}

export default App;
