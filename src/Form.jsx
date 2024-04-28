// import React, { useState } from "react"
// import './App.css';
// import Table from "./Table";
// function Form(){
// const handleSubmit=(e)=>{
//     e.preventDefault();
//     const newTransaction={
//       date,
//         description,
//         category,
//         amount
//     };
    
//     setTransactions([...transactions,newTransaction]);
    
//     setDate('');
//     setDescription('');
//     setCategory('');
//     setAmount('');
//   }
//   const [transactions,setTransactions]=useState([
//   {date:"12-01-2019",description:"paycheck from Bob's Burgers",category:"income",amount:"1000"},
//   {date:"12-01-2019",description:"South by Southwest Quinoa Bowl at fresh &co",category:"food",amount:"-10.55"},
//   {date:"12-02-2019",description:"South by Southwest Quinoa Bowl at fresh &co",category:"food",amount:"-10.55"},
//   {date:"12-04-2019",description:"Sunglasses",category:"Fashion",amount:"-24.99"},
//   {date:"12-06-2019",description:"Venmo,Alice Pays you for Burrito",category:"food",amount:"8.75"},
//   {date:"12-06-2019",description:"Chipotle",category:"food",amount:"-17.59"}
//   ]);
//   const [date,setDate]=useState('');
//     const [description,setDescription]=useState('');
//     const [category,setCategory]=useState('');
//     const [amount,setAmount]=useState('');
//     return (
//         <div>
//             <form onSubmit={handleSubmit} className="my-form">
//     <label>Date</label>
//     <input type="date" placeholder='Date'value={date} onChange={(e)=>setDate(e.target.value)}/>
//     <label></label>
//     <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
//   <label></label>
//   <input type="text" placeholder='Category'value={category} onChange={(e)=>setCategory(e.target.value)} />
//   <label ></label>
//   <input type="number" placeholder='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/><div>
// <div>
// <button type="submit"className="button">Add Transaction</button> 
//  </div></form>
  
  
//   <div>

//   <Table transactions={transactions}/>
//   </div>
//   </div>
//     );
//     }
//   export default Form;
import React, { useState } from "react";
import './App.css';
import Table from "./Table";

function Form() {
  const [transactions, setTransactions] = useState([
    {date:"12-01-2019",description:"paycheck from Bob's Burgers",category:"income",amount:"1000"},
    {date:"12-01-2019",description:"South by Southwest Quinoa Bowl at fresh &co",category:"food",amount:"-10.55"},
    {date:"12-02-2019",description:"South by Southwest Quinoa Bowl at fresh &co",category:"food",amount:"-10.55"},
    {date:"12-04-2019",description:"Sunglasses",category:"Fashion",amount:"-24.99"},
    {date:"12-06-2019",description:"Venmo,Alice Pays you for Burrito",category:"food",amount:"8.75"},
    {date:"12-06-2019",description:"Chipotle",category:"food",amount:"-17.59"}
  ]);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount
    };
    
    setTransactions([...transactions, newTransaction]);
    
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-form">
        <label>Date</label>
        <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
        <label></label>
        <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <label></label>
        <input type="text" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
        <label></label>
        <input type="number" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <div>
          <button type="submit" className="button">Add Transaction</button>
        </div>
      </form>
      <div>
        <Table transactions={transactions} />
      </div>
    </div>
  );
}

export default Form;
