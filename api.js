import express from 'express';
import bodyParser from 'body-parser';
import { exec } from 'child_process';

const app = express();
app.use(bodyParser.json());

app.post('/api/crear-usuario', (req, res) => {
  const { usuario, password } = req.body;
  const comando = `prosodyctl register ${usuario} im.bmstecnology.com ${password}`;
  
  exec(comando, (error) => {
    if (error) {
      return res.status(500).json({ mensaje: 'Error al crear el usuario' });
    }
    res.json({ mensaje: `Usuario ${usuario} creado con éxito` });
  });
});

app.listen(3001, () => console.log('API ejecutándose en puerto 3001'));