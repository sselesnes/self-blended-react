// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React test</h1>
//       <div className="card">
//         <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
//     </>
//   );
// }
// export default App;

import Product from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>
//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// }

// https://react.dev/learn/conditional-rendering

let arr = [0, 1, 0];
export default function App() {
  return (
    <>
      <h1>Products</h1>
      {arr[0] == true && <Product name="Picture1" alt="alt pic 1" />}
      {arr[1] == true && <Product name="Picture2" />}
      {arr[2] === 1 ? <Product name="Picture3" alt="alt pic 3" /> : <p>No Picture3</p>}
    </>
  );
}
