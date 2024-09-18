const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());



app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Api De Alejandro</title>
        </head>
        <body>
          <h1>Bienvenido a mi primera api</h1>
          <button onclick="window.location.href='/genT'">¿Que es Gen T?</button>
          <button onclick="window.location.href='/genT/Alumnos2024'">Ir a los alumnos mas activos (según Alejandro Palacios)</button>
        </body>
      </html>
    `);
  });


app.get('/genT', (req, res) => {
  res.json({ "message":  'Generación T es una iniciativa educativa innovadora creada por Streambe con impacto social, gratuita y online para abrirte las puertas al mundo Tech.' });
});

app.get('/genT/Alumnos2024', (req, res) => {
    const response = {
      "title": "Según Alejandro, Los 10 alumnos más activos en la clase son",
      "alumnos": [
        { "id": 1, "name": "Alejandro Palacios"},
        { "id": 2, "name": "Tiziano Gomez" },
        { "id": 3, "name": "Mateo Faya" },
        { "id": 4, "name": "Nicolas Sandoval" },
        { "id": 5, "name": "Mauricio Sierra" },
        { "id": 6, "name": "Lucas Gutierrez" },
        { "id": 7, "name": "Laureano Nahuel Cabriza" },
        { "id": 8, "name": "Felipe Gervan" },
        { "id": 9, "name": "Natalie Schunke" },
        { "id": 10, "name": "Santiago Villafañez" },
      ]
    };
    res.json(response);
  });


app.listen(port, () => {
  console.log(`Ejecutando el servidor en http://localhost:${port}`);
});
