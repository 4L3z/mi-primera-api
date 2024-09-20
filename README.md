
# Mi primera API

Esta es mi primera API extremadamente simple creada con **Node.js** y **Express**. Que muestra que es Generacion T, Quienes fueron los alumnos mas activos en este 2024, según Alejandro Palacios Y contiene las transformaciones de lucio chad desde su forma base hasta su transformacion SSJ 10

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/4L3z/mi-primera-api.git
   cd mi-primera-api
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor:

   ```bash
   npm run lucio
   ```

   La API estará disponible en `http://localhost:3000`.


# Endpoints

### GET `/`
- **Descripción**: Devuelve un html que contiene un titulo en la ventana, un titulo H1, dos botones para redirigirte a los otros endpoints, imagenes clickeables para rederigirte a las transformaciones de lucio chad y un titulo h2 al final
- **Método HTTP**: `GET`
- **Respuesta**:
 ```html
<html>
<head>
<style>
<!-- Aqui se encuentra el css --> 
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
  <!-- Aqui se encuentran las transformaciones --> 
    </div>
     <h2>Hecho por Alejandro Palacios</h2>
      </html>
  
```

### GET `/genT`

- **Descripción**: Devuelve una descripcion de lo que es Generacion T
- **Método HTTP**: `GET`
- **Respuesta**:

  ```json
  {
    "message": "Generación T es una iniciativa educativa innovadora creada por Streambe con impacto social, gratuita y online para abrirte las puertas al mundo Tech"
  }
  ```

### GET `/genT/Alumnos2024`

- **Descripción**: Devuelve un titulo y una lista de los alumnos que fueron los mas activos en este 2024 según Alejandro Palacios
- **Método HTTP**: `GET`
- **Respuesta**:

  ```json
  {
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
    }
  ```

  ### GET `/lucio-chad`

- **Descripción**: Devuelve las transformaciones de lucio, desde la base hasta la SSJ 10
- **Método HTTP**: `GET`
- **Respuesta**:

  ```json

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

  ```
   

### GET `/lucio-chad-base`

- **Descripción**: Devuelve la transformacion base de lucio chad
- **Método HTTP**: `GET`
- **Respuesta**:

  ```json
    {
      "title": "Lucio Chad",
      "description": "En su forma base, conoce lo básico, pero su curiosidad lo empuja a explorar más allá del código que tiene frente a él...",
      "level": 0,
      "image": "https://i.ibb.co/S3G9qR8/lucio-chad-base.jpg"
    }
  ```

### GET `/lucio-chad-ssj-X` (Remplaza la x por un numero del 1-10)

- **Descripción**: Devuelve la transformaciones del nivel que seleccionaste de lucio chad (1)
- **Método HTTP**: `GET`
- **Respuesta**: (Repuesta de la ruta /lucio-chad-ssj-1)

  ```json
    {
      "title": "Lucio Chad SSJ 1",
      "description": "Su primer gran transformación. Ahora, no solo entiende el código, sino que comienza a escribirlo con propósito y eficiencia.",
      "level": 1,
      "image": "https://i.ibb.co/hKpnrnD/lucio-chad-ssj1.png"
    }
  ```

