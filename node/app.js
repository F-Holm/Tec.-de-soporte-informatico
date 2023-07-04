const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');



const app = express();



// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'alumno',
 password: 'alumnoipm',
 database: 'autos'
});



// Establecer la conexión con la base de datos
connection.connect((err) => {
if (err) {
 console.error('Error al conectar a la base de datos:', err);
return;
 }
 console.log('Conexión exitosa a la base de datos');
});



// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));



// Ruta de inicio
app.get('/', (req, res) => {
 res.send('Bienvenido a la página de inicio');
});



// Ruta para mostrar el formulario
app.get('/formulario', (req, res) => {
 res.sendFile(__dirname + '/Bootstrap_Validacion_Formulario_JQuery.html');
});

app.get('/carrusel', (req, res) => {
    res.sendFile(__dirname + '/carrusel(HOLM-Esparrach-Sanchez).html');
   });



// Ruta para procesar el formulario y realizar la inserción en la base de datos
app.post('/insertar', (req, res) => {
    console.log(req);
 const { marca, modelo, año } = req.body;
 const sql = 'INSERT INTO auto VALUES ( 0, "'+marca+'", "'+modelo+'", '+año+')';
 const values = [marca, modelo, año];

 connection.query(sql, values, (err, result) => {
 if (err) { 
 console.error('Error al insertar datos:', err);
 res.sendStatus(500);
 return;
 }

 console.log('Datos insertados correctamente');
 res.sendStatus(200);
 });
});



// Iniciar el servidor
app.listen(3000, () => {
 console.log('Servidor iniciado en el puerto 3000');
});
