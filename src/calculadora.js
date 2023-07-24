
// Import das bibliotecas próprias
const CalculadoraResultado = require("./calculadoraresultado");

/**
 * Classe da Calculadora.
 */
class Calculadora {

    /**
     * Realiza a adição de dois números.
     * 
     * @param {*} a 
     * @param {*} b 
     * @returns 
     */
    getSoma(a, b) {
        //Execução a operação
        const resultado = a + b;
        console.log("A = " + a + " + B = " + b + " Resultado: " + resultado);
        //Prepara o retorno do serviço
        const calculadoraResultado = new CalculadoraResultado(a, b, "+", resultado);

        return calculadoraResultado;
    }

    /**
     * Realiza a subtração de dois números.
     * 
     * @param {*} a 
     * @param {*} b 
     * @returns 
     */
    getDiferenca(a, b) {
        //Execução a operação
        const resultado = a - b;
        console.log("A = " + a + " - B = " + b + " Resultado: " + resultado);
        //Prepara o retorno do serviço
        const calculadoraResultado = new CalculadoraResultado(a, b, "-", resultado);

        return calculadoraResultado;
    }

    /**
     * Realiza a multiplicação de dois números.
     * 
     * @param {*} a 
     * @param {*} b 
     * @returns 
     */
    getProduto(a, b) {
        //Execução a operação
        const resultado = a * b;
        console.log("A = " + a + " * B = " + b + " Resultado: " + resultado);
        //Prepara o retorno do serviço
        const calculadoraResultado = new CalculadoraResultado(a, b, "*", resultado);

        return calculadoraResultado;
    }

    /**
     * Realiza a ddivisão de dois números.
     * 
     * @param {*} a 
     * @param {*} b 
     * @returns 
     */
    getQuociente(a, b) {
        //Execução a operação
        const resultado = a / b;
        console.log("A = " + a + " / B = " + b + " Resultado: " + resultado);
        //Prepara o retorno do serviço
        const calculadoraResultado = new CalculadoraResultado(a, b, "/", resultado);

        return calculadoraResultado;
    }
}

// Exporta a classe
module.exports = Calculadora;