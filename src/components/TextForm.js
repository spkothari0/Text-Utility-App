import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = (event) => {
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const [text, setText] = useState();

    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</div>
        </div>
    )
}