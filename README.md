# Programa servidor API-REST de calculadora utilizando Node.js no Vercel.

- O projeto foi desenvolvido no VSCode deve ser chamado "calculadora_nodejs_vercel".
- Programa cliente está no projeto "calculadora_reactjs_vercel".
- Programa servidor cria o webservice na posta 80 no provedor Vercel(https://vercel.com/).
- Implementação do serviço utilizando REST e o método GET.
- A pasta src contêm os fontes do projeto.
- Classe Calculadora executa quatro operações: adição, subtração, multiplicação e divisão.

- Dependências:    
    - express,
    - cors.

- Execução:    
   <pre><code>npm start</code></pre>

- Atualização:

   Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.
   <pre><code>npm update</code></pre>

- Arquivos em src:
    - index.js - Programa principal com o servidor Express.
    - calculadora.js - Contêm a classe da calculadora.
    - calculadoraresultado.js - Contêm a classe de retorno ddas operações da calculadora.
    - calculadorarecurso.js - Contêm os métodos de acesso aos recursos da calculadora.
    - servicos.js - Contêm as rotas aos métodos de acesso a calculadora.

- Vercel   
    https://calculadora-nodejs-vercel.vercel.app/