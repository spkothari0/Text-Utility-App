import React, { useState } from 'react'
import Alert from './Alert';

export default function TextForm(props) {

    const handleUpClick = (event) => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
        <Alert />
    }
    const handleLoClick = (event) => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
        <Alert />
    }
    const handleExtraSpaces = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success");
        <Alert />
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox").value;
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleclearText = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const [text, setText] = useState("");

    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={!(text.length >= 0 && text.includes(" "))} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
            <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleclearText}>Clear Text</button>
        </div>
    )
}
