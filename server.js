const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para analisar o corpo da solicitação HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para somar dois números
app.post('/add', (req, res) => {
  // Obtenha os números do corpo da solicitação
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  // Verifique se os números são válidos
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Os parâmetros fornecidos não são números válidos.');
  } else {
    // Some os números e retorne o resultado como uma resposta HTTP
    const result = num1 + num2;
    res.send(`O resultado da soma é: ${result}`);
  }
});

// Inicie o servidor Node.js na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000...');
});
