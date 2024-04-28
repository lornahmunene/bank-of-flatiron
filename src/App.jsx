import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React,{useState} from 'react';

function App() {
  const [transactions,setTransactions]=useState([]);
  const addTransaction =(transaction)=>{
    setTransactions([...transactions,transaction]);
  }
  return (
    <div >
      <h1 className="App">The Royal Bank of Flatiron</h1>
      <Form addTransaction={addTransaction}/>
      
    </div>
  
  
  );
}

export default App;

