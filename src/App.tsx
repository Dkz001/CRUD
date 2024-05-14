//  import React from 'react'
import { useState } from "react";

function App() {
  const [compteur, setCompteur] = useState(1);

  const [fruits, setFruits] = useState([
    { id: 1, nom: "abricot" },
    { id: 1, nom: "Banane" },
    { id: 1, nom: "Pamplemousse" },
  ]);

  const handleClick = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      <h1>{compteur}</h1>
      <h1>Liste de fruits</h1>
      <ul>
        
        {fruits.map((fruit) => (
          <li>
            {fruit.nom} <button> x</button>
          </li>
        ))}
      </ul>

      <button onClick={handleClick}>Incrémente</button>
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
