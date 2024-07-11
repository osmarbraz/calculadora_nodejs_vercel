# Programa servidor API-REST de calculadora utilizando Node.js no Vercel.

## Descrição

- O projeto foi desenvolvido no VSCode deve ser chamado "calculadora_nodejs_vercel".
- Programa cliente está no projeto "calculadora_reactjs_vercel".
- Programa servidor cria o webservice na posta 80 no provedor Vercel(https://vercel.com/).
- Implementação do serviço utilizando REST e o método GET.
- A pasta src contêm os fontes do projeto.
- Classe Calculadora executa quatro operações: adição, subtração, multiplicação e divisão.

## Dependências

- express,
- cors.

## Execução

   <pre><code>npm start</code></pre>

## Atualização

   Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.
   <pre><code>npm update</code></pre>

## Arquivos fontes do projeto em src

- index.js - Programa principal com o servidor Express.
- calculadora.js - Contêm a classe da calculadora.
- calculadoraresultado.js - Contêm a classe de retorno ddas operações da calculadora.
- calculadorarecurso.js - Contêm os métodos de acesso aos recursos da calculadora.
- servicos.js - Contêm as rotas aos métodos de acesso a calculadora.

## Vercel

    https://calculadora-nodejs-vercel.vercel.app/

## Serviços

    Substitua localhost:8080 pelo endereço do servidor.

 - Serviço da rota inicial VIA GET.
    http://localhost:8000        

 - Serviço de adição via GET.
    substitua \<VALOR1\> e \<VALOR2\> pelos valores a serem somados.<br>
    http://localhost:8000/adicao/<VALOR1>/<VALOR1>

- Serviço de subtração via GET.
    substitua \<VALOR1\> e \<VALOR2\> pelos valores a serem subtraídos.<br>
    http://localhost:8000/subtracao/<VALOR1>/<VALOR1>    

- Serviço de produto via GET.
    substitua \<VALOR1\> e \<VALOR2\> pelos valores a serem multiplicados.<br>
    http://localhost:8000/produto/<VALOR1>/<VALOR1>    

- Serviço de divisão via GET.
    substitua \<VALOR1\> e \<VALOR2\> pelos valores a serem divididos.<br>
    http://localhost:8000/divisao/<VALOR1>/<VALOR1>        