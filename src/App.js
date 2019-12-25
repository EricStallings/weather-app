import React from 'react';
import './styles/App.css';
import ZipCodeForm from './components/zipCodeForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1>Weather App!</h1>
      </header>
     <ZipCodeForm />

    </div>
  );
}

export default App;
