# verificacaoFibonacci
Informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

1.baixar o projeto, entrar na raiz do projeto e baixar as dependências.
    npm install
    
2.Na raiz do projeto executar o projeto.
    npm run dev

3.Fazer uma requisição post ou get para o endpoint http://localhost:3030/check-fibonacci/{numero_que_deseja_verificar}

4. Retorno json com duas propriedades.

   number:numeroQueVoceEscolheu.
   isFibonacci: booleano, que retorna true se for da sequência e false se não for.
   
5. Verificação de string post ou get para o endpoint http://localhost:3030/check-string/{string_que_deseja_verificar}

6. Retorno json com três propriedades.
   string:stringQueVoceDigitou.
   contains:Se contém a letra a na string, true ou false.
   count:Quantas vezes ela aparece na string.
