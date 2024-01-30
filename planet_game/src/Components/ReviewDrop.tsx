import React from "react";
import "./ReviewDrop.css"

function ReviewDrop({title, correct, question, selected, realAnswer}: {title?:string, correct?:boolean, question?:string, selected?:string, realAnswer?:string}) {
    const [showInfo, setShowInfo] = React.useState(false);
    const clickHandler = () => {
        setShowInfo(!showInfo);
    }
    
    const titleText = correct ? ((title || "Question") + ' ✓') : ((title || "Question") + ' ✘');
    const outputText = correct ? ("Question: " + (question  || "Place Holder") + "\n" + "Answer: " + (realAnswer || "Place Holder") + "\n") :
        ("Question: " + (question || "Place Holder") + "\n" + "Answer: " + (realAnswer || "Place Holder") + "\n" + "Selected: " + (selected || "Place Holder"));
    
    
    return (
        <>
            <div className='RevDrop' style={{ backgroundColor: correct ? "#7FAC83" : "#D35D5D" }}>
                <div className="clicky"  >
                    <div className="ClickyL2" onClick={clickHandler} style={{ backgroundColor: showInfo ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0)' }}>
                        <h1>{titleText || "Question"}</h1>
                    </div>
                </div>
                <p style={{ display: showInfo ? "block" : "none" }}>{outputText}</p>
        </div>
        
        
        </>
    )
}

export default ReviewDrop;