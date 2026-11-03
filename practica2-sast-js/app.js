// Práctica 2 - Código INSEGURO a propósito para que CodeQL lo detecte.
// El fragmento del profe va dentro de una ruta de Express para que CodeQL
// sepa que "req.query.username" viene del usuario (dato no confiable).
const express = require('express');
const app = express();

app.get('/login', (req, res) => {
  // Ejemplo de código inseguro en app.js
  const usuario = req.query.username;
  // Vulnerabilidad: Inyección de código mediante eval()
  eval("console.log('Usuario conectado: ' + " + usuario + ");");
  res.send('Usuario registrado');
});

app.listen(3000, () => console.log('Servidor en el puerto 3000'));
