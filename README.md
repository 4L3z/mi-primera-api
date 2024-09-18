
# Mi primera API

Esta es mi primera API extremadamente simple creada con **Node.js** y **Express**. Que muestra que es Generacion T Y Quienes fueron los alumnos mas activos en este 2024, según Alejandro Palacios

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
- **Descripción**: Devuelve un html que contiene un titulo en la ventana, un titulo H1 y dos botones para redirigirte a los otros endpoints
- **Método HTTP**: `GET`
- **Respuesta**:
  ```html
     <html>
        <head>
          <title>Api De Alejandro</title>
        </head>
        <body>
          <h1>Bienvenido a mi primera api</h1>
          <button onclick="window.location.href='/genT'">Ir al mensaje de bienvenida</button>
          <button onclick="window.location.href='/genT/alumnos'">Ir a los alumnos</button>
        </body>
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
   


