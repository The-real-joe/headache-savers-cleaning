import './App.css';
import React from 'react';
import Banner from './Banner';
import About from './About';
import ContactUs from './ContactUs';
import Photos from './Photos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Headache Savers</h1>
        <h2>Handyman & Cleaning Services</h2>
        <img src="https://images.ctfassets.net/0gqf8nju6pz6/3A6EcER4SuhrqFjAPrwxBq/f125abfda235d8c86637d605df13ed3c/cleaning-tools-hero.jpeg" className="App-logo" alt="logo" />
      <Banner />
      </header>
      <About/>
      <img src="https://tailoredhomesolutions.net/wp-content/uploads/2021/05/iStock-1249788942-e1608664728132.jpg" className="photo" alt="cleaning photo" />
      <Photos/>
      <ContactUs/>
    </div>
  );
}

export default App;
