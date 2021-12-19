import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upper case", "success");
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const handleOnClear = ()=>{
        let newText = ""
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleTitleCase = ()=>{
        let newText = text.split(" ").map(word=>{
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
        setText(newText);
        props.showAlert("Text converted to title case", "success");
    }
    const handleCopy = ()=>{

        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    }
    const [text, setText] = useState('')
    return (
        <>  <div className={`container text-${props.mode === 'light'? 'dark' : 'light'}`}>
            <h1>{props.heading}</h1>
            <div className=" mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleOnClear}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTitleCase}>Title Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Case</button>

        </div>
        
        <div className={`container text-${props.mode === 'light'? 'dark' : 'light'}`}>
            <h2 >Your text summary</h2>
            {/* \s means space including new line */}
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Previews</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>      
        </>
    )
}
