
import './App.css';
import Encuestas from './Components/Encuestas';
import React, { useState } from 'react';

function App() {
  // Estado para rastrear las encuestas
  const encuestas = [
  { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
  ['Rojo ', 'Azul ', 'Verde '] },
  { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
  ['Pizza ', 'Hamburguesa ', 'Sushi '] },
  { id: 3, pregunta: '¿Cuál es tu pasatiempo favorito?', opciones:
  ['Salir a bailar ', 'Leer un libro ', 'Dar un paseo '] },
  ];
  return (
  <div className="App">
  <h1>Aplicación de Encuestas</h1>
  <Encuestas encuestas={encuestas} />
  </div>
  );
  }

export default App;
