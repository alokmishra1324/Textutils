import React , {useState}from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convertes to uppercase" , "success");
    }
    const handleLoClick = () =>{
        // console.log("Uppercase is clicked" + text);
         let newText = text.toLowerCase();
         setText(newText);
     }
     const handleClearClick = () =>{
        // console.log("Uppercase is clicked" + text);
         let newText = '';
         setText(newText);
     }

    

   let [count, setCount] = useState(0);
   let [count1, setCount1] = useState(0);
   let countChar = 0,
   countCons = 0;

   const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }
    }
    // console.log("No. of Vowels are: " + countChar);
  };

  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
  };
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
    const handleOnChange = (event) =>{
      //  console.log("On Change");
        setText(event.target.value);
    }
    const[text , setText] = useState('');
    //text = "new text" ;  wrong way to change the state
    //setText = ("new text"); correct way to change the state
  return (
    <>
         <div  className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
              <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' ,
              color: props.mode === 'dark' ? 'white':'black'}} id="myBox" rows = "8"></textarea>
           </div>
             <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Uppercase</button>
             <button className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert to Lowercase</button>
             <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
             <button className="btn btn-primary mx-2" onClick = {handleVoClick}>Count No. Of Vowels</button>
             <button className="btn btn-primary mx-2" onClick = {handleCoClick}>Count no. of Consonants</button>
             <button className="btn btn-primary mx-2" onClick = {handleCopy}>Copy Text</button>
             <button className="btn btn-primary mx-2" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <p>{count} No. of Vowels</p>
            <p>{count1} No. of Consonants</p>
            <h2>Preview </h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>

 
        </div>

    </>
         
  )
}
