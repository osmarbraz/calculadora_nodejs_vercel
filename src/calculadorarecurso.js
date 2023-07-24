/**
 * Métodos de acesso aos recursos da calculadora
 */

// Import das bibliotecas próprias
const Calculadora = require("./calculadora");

// Serviço de adição.
const adicao = async (request, response) => {   
   
    console.log("Executando serviço adicao.");

    //Recupera os parâmetros
    const a = parseFloat(request.params.a);
    const b = parseFloat(request.params.b);

    //Instancia a calculadora
    const calculadora = new Calculadora();
        
    //Recupera o objeto de resultado
    const calculadoraResultado = calculadora.getSoma(a, b);

    response.status(200).json(calculadoraResultado);  
};

// Serviço de subtração.
const subtracao = async (request, response) => {   
   
    console.log("Executando serviço subtracao.");

    //Recupera os parâmetros
    const a = parseFloat(request.params.a);
    const b = parseFloat(request.params.b);

    //Instancia a calculadora
    const calculadora = new Calculadora();
        
    //Recupera o objeto de resultado
    const calculadoraResultado = calculadora.getDiferenca(a, b);

    response.status(200).json(calculadoraResultado);  
};

// Serviço de multiplicação.
const multiplicacao = async (request, response) => {   
   
    console.log("Executando serviço multiplicacao.");

    //Recupera os parâmetros
    const a = parseFloat(request.params.a);
    const b = parseFloat(request.params.b);

    //Instancia a calculadora
    const calculadora = new Calculadora();
        
    //Recupera o objeto de resultado
    const calculadoraResultado = calculadora.getProduto(a, b);

    response.status(200).json(calculadoraResultado);  
};

// Serviço de divisão.
const divisao = async (request, response) => {   
   
    console.log("Executando serviço divisao.");

    //Recupera os parâmetros
    const a = parseFloat(request.params.a);
    const b = parseFloat(request.params.b);

    //Instancia a calculadora
    const calculadora = new Calculadora();
        
    //Recupera o objeto de resultado
    const calculadoraResultado = calculadora.getQuociente(a, b);

    response.status(200).json(calculadoraResultado);  
};

// Exporta as funções
module.exports = {    
    adicao,
    subtracao,
    multiplicacao,
    divisao
};