// 'use client'
// import "./css/layout.css"
// import Pagina from "./components/layout/pagina.component";
// import { useState, useEffect } from 'react';

// interface Pessoa {
//     nome?: string
//     idade?: string
// }

// export default function Home() {

//   const [pessoa, setPessoa] = useState<Pessoa>();

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     let item: Pessoa = {};

//     if (name == "nome")
//       item.nome = value;
//     else if (name == "idade")
//       item.idade = value;

//     setPessoa(item);
//   }

//   useEffect(() => {
//     // Getting an item
//     const savedName: string | null = localStorage.getItem('userName');
//     if (savedName) {
//       console.log(`Welcome back, ${savedName}`);
//       setPessoa({
//         nome: savedName,
//         idade: ""
//       });
//     } else {
//       console.log('No name found in localStorage.');
//     }
//   }, []);

//   const exibirNome = () => {
//     const nome: string | null = localStorage.getItem('userName');
//     return nome ?? "";
//   }

//   const alertNome = () => {
//     alert( localStorage.getItem('userName') );
//   }

//   const saveName = (name: string) => {
//     // Setting an item (key and value must be strings)
//     localStorage.setItem('userName', name);
//   };

//   return (
//     <div className="flex-col">
//       <input type="text" name="nome" value={pessoa?.nome ?? ""} onChange={(e) => handleChange(e)} className="border-amber-200" />
//       <input type="text" name="idade" value={pessoa?.idade ?? ""} onChange={(e) => handleChange(e)} className="border-amber-200" />
//       <div className="flex gap-2">
//         <button type="button" onClick={() => saveName(pessoa?.nome!)} className="p-2 bg-amber-700">Save Name as {pessoa?.nome}</button>
//         <button type="button" onClick={() => alertNome()} className="p-2 bg-green-700">Exibir nome</button>
//         <button type="button" onClick={() => localStorage.removeItem('userName')} className="p-2 bg-blue-600">Remove Name</button>
//       </div>
//     </div>
//   );
// }


import "./css/layout.css"
import Pagina from "./components/layout/pagina.component";

export default function Home() {

  return (
    <Pagina />
  );
}