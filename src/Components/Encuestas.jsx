import React from 'react';
function Encuestas({ encuestas }) {
return (
<div>
<h2>Encuestas Disponibles</h2>
<ul>
{encuestas.map(encuesta => (<ul>
<li key={encuesta.id}>
    {encuesta.pregunta}</li>
   <ul>
    {encuesta.opciones.map((opcion, index) => (
        <li key = {index}>{opcion}</li>
    ))}
   </ul>
    </ul>
))}
</ul>
</div>
);
}
export default Encuestas;