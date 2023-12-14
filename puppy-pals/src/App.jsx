import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    onClick=()=>{ setFeatPupId(puppy.id)}}
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
           
          {()=>{console.log("puppy id: ", puppy.id)}}
          </p>
        );
      })}
      {featPupId}
      { featuPupID && <p>{ featPupId }</p> } 
    </div>
  );


export default App
