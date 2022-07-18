import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";

function App() {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (

        <Router>
            <Navbar title="TextUtils" about="About Us" />
            <Alert alert={alert} />
            <div className="container">
                <Routes>
                    <Route exact path="/"
                        element={
                            <TextForm showAlert={showAlert} heading="Enter your text here" />
                        } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
