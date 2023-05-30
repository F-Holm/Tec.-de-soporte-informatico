const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000; // El puerto en el que escucharemos las peticiones HTTP

// Configurar el middleware body-parser para poder leer los datos enviados a través de formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar una ruta para servir los archivos estáticos de nuestra aplicación (como CSS o imágenes)
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nombre_de_la_base_de_datos'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error al conectarse a la base de datos: ' + err.stack);
      return;
    }
    console.log('Conectado a la base de datos.');
  });

  app.post('/insertar', (req, res) => {
    const marca = req.body.marca;
    const modelo = req.body.modelo;
    const año = req.body.año;
  
    const query = `INSERT INTO autos (marca, modelo, año) VALUES ('${marca}', '${modelo}', ${año})`;
  
    connection.query(query, (error, results, fields) => {
      if (error) throw error;
  
      console.log(`Se ha insertado un nuevo auto con ID ${results.insertId}`);
  
      res.redirect('/');
    });
  });