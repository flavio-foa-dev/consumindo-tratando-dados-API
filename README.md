# js-consumindo-dados-api
```
console.log('oiiiii............1')
function manda(){
  console.log('oiiiii.................2')
  console.log('oiiiii.................3')
  console.log('oiiiii.................4')
}
// setTimeout(() => {
//   manda()
// }, 3000);
setTimeout(manda, 3000);
console.log('oiiiii.................5')
```

- Por padrão o JavaScript funciona de modo síncrono, executando as tarefas linha a linha.
- O callback é uma função que é passada como argumento para uma outra função.
- Geralmente, callbacks são executados quando alguma operação é concluída ou quando um evento específico ocorre.
- Callbacks são assíncronos, portanto são funções que são ativadas por algum fator pré-determinado, podendo ser um tempo específico, a partir de uma ação do usuário, depois da conclusão de alguma coisa.


- Criar funções que recebem como parâmetros outras funções (callbacks);
- Identificar uma API;
- Consumir dados de uma API através do método fetch;
- Compreender o funcionamento das promises.

```
Ao fazer uma requisição para uma API com o fetch, é necessário converter os dados recebidos com o método .json(). isso necessário porque
Pois os dados chegam em formato de bytes e precisamos transformar em outro formato para manipulá-los.

O corpo da resposta de uma requisição chega em formato de bytes. Desta forma o .json() transforma o corpo e retorna um json formatado. O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe que a de um objeto JS.
```

- Uma requisição é composta de uma request (solicitação) e uma response (resposta).
- Request e Response são dois tipos de mensagem diferentes quando falamos de HTTP.
- Em uma response é retornado um response code (código de resposta) e um motivo, que dá significado ao código.
-  A estrutura padrão desse código tem três dígitos, sendo o primeiro referente a classificação dele.
-   Elas são:

1. 1XX: Informativo – a solicitação foi aceita ou está em andamento;
2. 2XX: Confirmação – a solicitação foi concluída ou entendida;
3. 3XX: Redirecionamento – faltou alguma coisa na solicitação;
4. 4XX: Erro do cliente – houve um erro na solicitação;
5. 5XX: Erro no servidor – houve uma falha no servidor durante a solicitação.

# vimos
- Tratar promises a partir dos seus métodos;
- Utilizar o método then para acessar o valor retornado do fetch API;
- Converter dados em JSON através do método json();
- Lidar com possíveis erros com o método catch;
- Enviar respostas independente do retorno com o método finally.


### callback hell.
 Quando produzimos um código assíncrono com o uso do .then nós fazemos uso de callback dentro deles.
 O maior problema com callbacks é que eles não são bem dimensionados mesmo para códigos assíncronos moderadamente complexos, onde temos vários .then em seguida do outro. O código resultante geralmente se torna difícil de ler, fácil de quebrar e difícil de depurar.
 Para resolver isso, foi desenvolvido outra forma de construir um código assíncrono: o async await, que funciona de forma semelhante ao then, trazendo mais nitidez de codigo eliminando suas linhas dee callback hell ,   é o que chamamos de syntax sugar.

 Em ciência da computação, syntax sugar ou açúcar sintático (em tradução literal), é a sintaxe dentro de uma linguagem de programação que foi concebido para tornar as coisas mais fáceis de ler ou expressar. Isso torna a linguagem "mais doce" para uso humano: as coisas podem ser expressas de forma mais clara, de forma mais concisa, ou em um estilo alternativo

 O async/await apesar de ser uma opção mais "legível" ao .then() é importante frisar que não são logicamente equivalentes:
 o async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido.
 a partir da versão 10 do Node.js, ambas as formas são equivalentes em termos de performance.
 O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez.
# vimos
- funções assíncronas com async;
- requisições com await;
- Tratar erros com try catch;
- Implementar requisições simultaneamente com Promise All.
- Selecionar elementos pelo seu id através do getElementById;
- Incluir valores em elementos com a propriedade value;
- Detectar interação do usuário com auxílio do addEventListener;
- Inserir elementos HTML a partir do innerHTML.

