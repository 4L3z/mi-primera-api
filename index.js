const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());



app.get('/', (req, res) => {
  res.send(`
      <html>
      <head>
       <style>
       h1{
         text-align: center;
       }
        button{
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        border: none;
        text-align: center;
        cursor: pointer;
        }
        button:hover{
        background-color: #45a049;
        }
        div{
        display: flex;
        justify-content: center;
        }
        h2{
          text-align: center;
        }
          img{
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
    .transformaciones {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  justify-items: center;
  padding: 20px;
}

.transformaciones a img {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.transformaciones a img:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}
  .transformaciones a p {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

       </style> 
      <title>Api De Alejandro</title>
      </head>
      <body>
        <h1>Bienvenido a mi primera api</h1>
      <div>
        <button onclick="window.location.href='/genT'">¿Que es Gen T?</button>
        <button onclick="window.location.href='/genT/Alumnos2024'">Ir a los alumnos mas activos (según Alejandro Palacios)</button>
        <button onclick="window.location.href='/lucio-chad'">Transformaciones de lucio</button>
      </div>
    <div class="transformaciones">
  <a href="/lucio-chad-base">
    <img src="https://i.ibb.co/S3G9qR8/lucio-chad-base.jpg" alt="lucio-chad-base">
    <p>Lucio Chad Base</p>
  </a>
  <a href="/lucio-chad-ssj-1">
    <img src="https://i.ibb.co/hKpnrnD/lucio-chad-ssj1.png" alt="lucio-chad-ssj1">
    <p>Lucio Chad SSJ 1</p>
  </a>
  <a href="/lucio-chad-ssj-2">
    <img src="https://i.ibb.co/2M7nd8Z/lucio-chad-ssj2.png" alt="lucio-chad-ssj2">
    <p>Lucio Chad SSJ 2</p>
  </a>
  <a href="/lucio-chad-ssj-3">
    <img src="https://i.ibb.co/Rvm0CxZ/lucio-chad-ssj3.png" alt="lucio-chad-ssj3">
    <p>Lucio Chad SSJ 3</p>
  </a>
  <a href="/lucio-chad-ssj-4">
    <img src="https://i.ibb.co/sP8tph5/lucio-chad-ssj4.png" alt="lucio-chad-ssj4">
    <p>Lucio Chad SSJ 4</p>
  </a>
  <a href="/lucio-chad-ssj-5">
    <img src="https://i.ibb.co/93PCzmX/lucio-chad-ssj5.png" alt="lucio-chad-ssj5">
    <p>Lucio Chad SSJ 5</p>
  </a>
  <a href="/lucio-chad-ssj-6">
    <img src="https://i.ibb.co/z7WnFsm/lucio-chad-ssj6.png" alt="lucio-chad-ssj6">
    <p>Lucio Chad SSJ 6</p>
  </a>
  <a href="/lucio-chad-ssj-7">
    <img src="https://i.ibb.co/bW4cyn4/lucio-chad-ssj7.png" alt="lucio-chad-ssj7">
    <p>Lucio Chad SSJ 7</p>
  </a>
  <a href="/lucio-chad-ssj-8">
    <img src="https://i.ibb.co/sQDdTVY/lucio-chad-ssj8.png" alt="lucio-chad-ssj8">
    <p>Lucio Chad SSJ 8</p>
  </a>
  <a href="/lucio-chad-ssj-9">
    <img src="https://i.ibb.co/3NvCgZG/lucio-chad-ssj9.png" alt="lucio-chad-ssj9">
    <p>Lucio Chad SSJ 9</p>
  </a>
  <a href="/lucio-chad-ssj-10">
    <img src="https://i.ibb.co/RY9DMsZ/lucio-chad-ssj10.png" alt="lucio-chad-ssj10">
    <p>Lucio Chad SSJ 10</p>
  </a>
</div>
      <h2>Hecho por Alejandro Palacios</h2>
        </body>
      </html>
    `);
});


app.get('/genT', (req, res) => {
  res.json({ "message": 'Generación T es una iniciativa educativa innovadora creada por Streambe con impacto social, gratuita y online para abrirte las puertas al mundo Tech.' });
});

app.get('/genT/Alumnos2024', (req, res) => {
  const response = {
    "title": "Según Alejandro, Los 10 alumnos más activos en la clase son",
    "alumnos": [
      { "id": 1, "name": "Alejandro Palacios" },
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

app.get('/lucio-chad', (req, res) => {
  const response = [
    {
      "title": "Lucio Chad",
      "description": "En su forma base, conoce lo básico, pero su curiosidad lo empuja a explorar más allá del código que tiene frente a él...",
      "level": 0,
      "image": "https://i.ibb.co/S3G9qR8/lucio-chad-base.jpg"
    },
    {
      "title": "Lucio Chad SSJ 1",
      "description": "Su primer gran transformación. Ahora, no solo entiende el código, sino que comienza a escribirlo con propósito y eficiencia.",
      "level": 1,
      "image": "https://i.ibb.co/hKpnrnD/lucio-chad-ssj1.png"
    },
    {
      "title": "Lucio Chad SSJ 2",
      "description": "Su lógica se afila, sus habilidades de depuración son casi infalibles. Cada error es solo una oportunidad para aprender más.",
      "level": 2,
      "image": "https://i.ibb.co/2M7nd8Z/lucio-chad-ssj2.png"
    },
    {
      "title": "Lucio Chad SSJ 3",
      "description": "Con una experiencia sólida en varios lenguajes, puede cambiar entre ellos sin esfuerzo, adaptando su estilo de codificación según sea necesario.",
      "level": 3,
      "image": "https://i.ibb.co/Rvm0CxZ/lucio-chad-ssj3.png"
    },
    {

      "title": "Lucio Chad SSJ 4",
      "description": "La arquitectura del software ya no es un desafío; ahora construye sistemas complejos que otros programadores solo podrían soñar con diseñar.",
      "level": 4,
      "image": "https://i.ibb.co/sP8tph5/lucio-chad-ssj4.png"
    },
    {

      "title": "Lucio Chad SSJ 5",
      "description": "La creatividad se fusiona con la técnica. Ahora, Lucio no solo escribe código funcional, sino que lo hace de manera innovadora, creando soluciones que nadie más puede imaginar.",
      "level": 5,
      "image": "https://i.ibb.co/93PCzmX/lucio-chad-ssj5.png"
    },
    {

      "title": "Lucio Chad SSJ 6",
      "description": "Los límites de la programación parecen desaparecer. Lucio ahora entiende el impacto del código no solo en el software, sino en la sociedad.",
      "level": 6,
      "image": "https://i.ibb.co/z7WnFsm/lucio-chad-ssj6.png"
    },
    {

      "title": "Lucio Chad SSJ 7",
      "description": "Cada línea de código es una obra maestra, cada proyecto una oportunidad para cambiar el mundo.",
      "level": 7,
      "image": "https://i.ibb.co/bW4cyn4/lucio-chad-ssj7.png"
    },
    {

      "title": "Lucio Chad SSJ 8",
      "description": "Su conocimiento es enciclopédico. No hay lenguaje que desconozca ni problema que no pueda resolver.",
      "level": 8,
      "image": "https://i.ibb.co/sQDdTVY/lucio-chad-ssj8.png"
    },
    {

      "title": "Lucio Chad SSJ 9",
      "description": "El código ya no es solo una herramienta, sino una extensión de su ser. Sus habilidades son legendarias.",
      "level": 9,
      "image": "https://i.ibb.co/3NvCgZG/lucio-chad-ssj9.png"
    },
    {

      "title": "Lucio Chad SSJ 10",
      "description": "la culminación de la perfección técnica, la creatividad ilimitada y la sabiduría infinita. No solo programa, sino que redefine la realidad digital.",
      "level": 10,
      "image": "https://i.ibb.co/RY9DMsZ/lucio-chad-ssj10.png"
    }
  ];

  res.json(response);
});


app.get('/lucio-chad-base', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad",
      "description": "En su forma base, conoce lo básico, pero su curiosidad lo empuja a explorar más allá del código que tiene frente a él...",
      "level": 0,
      "image": "https://i.ibb.co/S3G9qR8/lucio-chad-base.jpg"
    }
  ]
  res.json(response);
});

app.get('/lucio-chad-ssj-1', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 1",
      "description": "Su primer gran transformación. Ahora, no solo entiende el código, sino que comienza a escribirlo con propósito y eficiencia.",
      "level": 1,
      "image": "https://i.ibb.co/hKpnrnD/lucio-chad-ssj1.png"
    }
  ]
  res.json(response);
});

app.get('/lucio-chad-ssj-2', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 2",
      "description": "Su lógica se afila, sus habilidades de depuración son casi infalibles. Cada error es solo una oportunidad para aprender más.",
      "level": 2,
      "image": "https://i.ibb.co/2M7nd8Z/lucio-chad-ssj2.png"
    },
  ]
  res.json(response);
});
app.get('/lucio-chad-ssj-3', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 3",
      "description": "Con una experiencia sólida en varios lenguajes, puede cambiar entre ellos sin esfuerzo, adaptando su estilo de codificación según sea necesario.",
      "level": 3,
      "image": "https://i.ibb.co/Rvm0CxZ/lucio-chad-ssj3.png"
    },
  ]
  res.json(response);
});
app.get('/lucio-chad-ssj-4', (req, res) => { 
  const response = [
    {
        "title": "Lucio Chad SSJ 4",
        "description": "La arquitectura del software ya no es un desafío; ahora construye sistemas complejos que otros programadores solo podrían soñar con diseñar.",
        "level": 4,
        "image": "https://i.ibb.co/sP8tph5/lucio-chad-ssj4.png"
    }
  ]
  res.json(response);
});
app.get('/lucio-chad-ssj-5', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 5",
      "description": "La creatividad se fusiona con la técnica. Ahora, Lucio no solo escribe código funcional, sino que lo hace de manera innovadora, creando soluciones que nadie más puede imaginar.",
      "level": 5,
      "image": "https://i.ibb.co/93PCzmX/lucio-chad-ssj5.png"
    }
  ]
  res.json(response);
});
app.get('/lucio-chad-ssj-6', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 6",
      "description": "Los límites de la programación parecen desaparecer. Lucio ahora entiende el impacto del código no solo en el software, sino en la sociedad.",
      "level": 6,
      "image": "https://i.ibb.co/z7WnFsm/lucio-chad-ssj6.png"
    }
  ]
  res.json(response);
});
app.get('/lucio-chad-ssj-7', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 7",
      "description": "Cada línea de código es una obra maestra, cada proyecto una oportunidad para cambiar el mundo.",
      "level": 7,
      "image": "https://i.ibb.co/bW4cyn4/lucio-chad-ssj7.png"
    }
  ]
  res.json(response);
});
app.get('/lucio-chad-ssj-8', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 8",
      "description": "Su conocimiento es enciclopédico. No hay lenguaje que desconozca ni problema que no pueda resolver.",
      "level": 8,
      "image": "https://i.ibb.co/sQDdTVY/lucio-chad-ssj8.png"
    },
  ]
  res.json(response);
});
app.get('/lucio-chad-ssj-9', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 9",
      "description": "El código ya no es solo una herramienta, sino una extensión de su ser. Sus habilidades son legendarias.",
      "level": 9,
      "image": "https://i.ibb.co/3NvCgZG/lucio-chad-ssj9.png"
    }
  ]
  res.json(response);
});
app.get('/lucio-chad-ssj-10', (req, res) => { 
  const response = [
    {
      "title": "Lucio Chad SSJ 10",
      "description": "la culminación de la perfección técnica, la creatividad ilimitada y la sabiduría infinita. No solo programa, sino que redefine la realidad digital.",
      "level": 10,
      "image": "https://i.ibb.co/RY9DMsZ/lucio-chad-ssj10.png"
    }
  ]
  res.json(response);
});


app.listen(port, () => {
  console.log(`Ejecutando el servidor en http://localhost:${port}`);
});