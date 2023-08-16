import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled " , "success");
      //document.title = 'Textutils - Dark Mode';
      setInterval(()=>{
          document.title = 'Textutils is Amazing';
      }, 2000);
      setInterval(()=>{
        document.title = 'Install Textutils Now';
    }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled " , "success");
      //document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <>
     
       
        <Alert alert = {alert}/>
        <div className="container my-3">
        {/* <Router> */}
        <Navbar title ="Textutils" aboutText = "About us" mode ={mode} toggleMode = {toggleMode} />
      {/* <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Textutils</Link>
          </li>
        </ul>
      </nav> */}
      {/* <Routes>
      <Route exact path="/" element={ */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      {/* } /> */}
      {/* <Route exact path="/about" element={<About />} />
      </Routes>
      
    </Router> */}
  

        
      
       
      
        
               
        </div>
       

   </>
  );
}

export default App;
