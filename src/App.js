import React from 'react';
import './App.css';
import StyleContext from './StyleContext';
import UserInterface from "./UserInterface"

function App() {

  const styling = {
    background: "#ff3300",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    color: 'white',
    borderRadius: 15             

  }

  const headerStyle = {
    color: 'blue'
  }

  const styles ={
    styling,
    headerStyle
  }

  return (
    <main>
      <StyleContext.Provider value={styles}>
      <h1
          style={{
            color: "#fee001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </StyleContext.Provider>
    </main>
  );
}

export default App;