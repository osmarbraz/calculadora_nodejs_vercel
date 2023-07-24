/**
 * Especificação das rotas.
 */

// Import das bibliotecas
const express = require('express');

// Import das bibliotecas próprias
const {
    adicao,
    subtracao,
    multiplicacao,
    divisao
} = require("./calculadorarecurso");

// Inicializa o roteador dos serviços
const router = express.Router();

/**
 * Serviço da rota inicial.
 *
 * curl http://localhost:8000
 */
router.get('/', (request, response)=>{
    response.json({"statusCode": 200,
                   "mensagem": "API Calculadora Rodando"
    })
});

/**
 * Serviço de adição.
 *
 * curl http://localhost:8000/adicao/5/2
 */
router.get('/adicao/:a/:b', adicao);

/**
 * Serviço de subtração.
 *
 * curl http://localhost:8000/subtracao/5/2
 */
router.get('/subtracao/:a/:b', subtracao);

/**
 * Serviço de produto.
 *
 * curl http://localhost:8000/multiplicacao/5/2
 */
router.get('/multiplicacao/:a/:b', multiplicacao);

/**
 * Serviço de divisão.
 *
  * curl http://localhost:8000/divisao/5/2
 */
router.get('/divisao/:a/:b', divisao);

// Exporta o roteador
module.exports = router;