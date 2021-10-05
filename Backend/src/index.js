const express = require("express");
const cors = require('cors');
const config = require('./config')


const app = express();
app.use(express.json());

//Implementación de CORS
app.use(cors());

//Información que se obtendrá en nuestra URL principal.
app.get("/", (req, res) => {
  res.send({message:"Base URL",
            status: "OK"});
});

//Importar las rutas con los endpoints especificos

const custom_route = require("../routes/custom_route");

// En la importancion las constantes vas separadas por comas
app.use(custom_route);

//Puerto
const PORT = config.PORT || 3001;

//Levantar el servidor para escuchar los puertos
app.listen(PORT, () => {
  console.log(`Escuchando API en http://localhost:${PORT}`);
});
