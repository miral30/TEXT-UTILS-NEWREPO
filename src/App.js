import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");//whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
          setAlert((null));
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable","success")
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils is amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title = "install TextUtils now";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success")
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtiles" aboutText="About TextUtiles" /> */}
    {/* <Navbar/> */}
    {/* <BrowserRouter> */}
    {
     /* /users --> components1
    /users/home -->component 2 if we not use exat path then react match another component */   }
    <Navbar title="TextUtiles" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container  my-3 mode={mode}" > 

    {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
    </Routes> */}
    {/* <Routes> */}
      {/* <Route  exact path="/" element={ */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
      {/* } */}
      {/* /> */}
  {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
