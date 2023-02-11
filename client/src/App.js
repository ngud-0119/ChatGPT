import './App.css';
import React, { useState } from "react";

const App = () => {

  const [url, setURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ url });
    setURL("");
  };

  return (
    <div className="home">
      <form className='home_form'>
        <h2>ChatGPT</h2>
        <label>Provide the ChatGPT Url</label>
        <input
          type= 'url'
          name= 'url'
          id= 'url'
          value={url}
          onChange = {(e) => setURL(e.target.value)}
        />
        <button onClick={handleSubmit}>ADD Website</button>
      </form>
    </div>
  );
}

export default App;
