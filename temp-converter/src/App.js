import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState("");
  const [output,setOutput] = useState("");

  const notify = () => toast('😓 Please enter a valid number!', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"});


  const temperatureConverter = (targetBtn) => {
    const tempValue = parseFloat(temp);
    if (isNaN(tempValue)) {
      document.getElementById("temperature").style.borderColor="red";
      notify();
      setOutput(" ");
      return;
    }

    let convertedTemp;

    if (scale === "celsius" && targetBtn === "fahrenheit") {
      convertedTemp = (tempValue * 9) / 5 + 32;
      let rs = convertedTemp.toFixed(2);
      setOutput(<p>{tempValue}&deg;C is equal to {rs}&deg;F</p>);
      setTemp("");
      setScale("");
      //console.log(temp, "C is equal to", rs);
    } else if (scale === "fahrenheit" && targetBtn === "celsius") {
      convertedTemp = ((tempValue - 32) * 5) / 9;
      let rs = convertedTemp.toFixed(2);
      setOutput(<p>{tempValue}&deg;F is equal to {rs}&deg;C</p>);
      setTemp("");
      setScale("");
      //console.log(temp, "F is equal to", rs);
    } else {
      setTemp("");
      setScale("");
      setOutput("");
    }
  };

  //console.log(output);

  return (
    <div className="App">
      <h1 id="heading">Temperature Converter</h1>
      <div id="inputContainer">
        <input
          id="temperature"
          type="number"
          value={temp}
          placeholder="Enter Temperature"
          step="0.01"
          onChange={(e) => setTemp(e.target.value)}
        />
        <select
          placeholder="Scale"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        >
          <option value="">Scale</option>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div id="buttonContainer">
        <button onClick={() => temperatureConverter("celsius")}>
          Convert to Celsius
        </button>
        <button onClick={() => temperatureConverter("fahrenheit")}>
          Convert to Fahrenheit
        </button>
      </div>
      <div id="resultContainer">
      <h1 id="result">Result</h1>
        {output}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
