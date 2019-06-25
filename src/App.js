import React from "react";

import "./App.css";
import { auth } from "./modules";

function App() {
    const { Login } = auth.components;

    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
