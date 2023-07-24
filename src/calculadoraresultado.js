/**
 * Classe que representa o resultado de uma operação da calculadora
 */
class CalculadoraResultado {

    /**
     * Construtor da classe
     */
    constructor(a, b, operador, resultado) {
        this.a = a;
        this.b = b;
        this.operador = operador;
        this.resultado = resultado;
    }
}

// Exporta a classe
module.exports = CalculadoraResultado;