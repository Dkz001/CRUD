//  import React from 'react'
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef();
  const [compteur, setCompteur] = useState(1);
  const [fruits, setFruits] = useState([
    { id: 1, nom: "abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Pamplemousse" },

  ]);

  const handleClick = () => {
    setCompteur(compteur + 1);
  };

  const handleDelete = (id) => {
    console.log(id);
    // copie
    const fruitCopy = [...fruits];
    // Manip Copie
    const fruitsCopyUpdated = fruitCopy.filter((fruit) => fruit.id !== id);
    // modif State avec setter
    setFruits(fruitsCopyUpdated);



  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert("hey submit somethings!!");
    console.log(inputRef.current.value);
   };

  return (
    <div>
      <h1>{compteur}</h1>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button onClick={() => handleDelete(fruit.id)}> x </button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input ref={inputRef}  type="text" placeholder="Ajouter un fruit..." />
        <button>Ajouter +</button>
      </form>
      {/* <button onClick={handleClick}>Incrémente</button> */}
    </div>
  );
}
export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
