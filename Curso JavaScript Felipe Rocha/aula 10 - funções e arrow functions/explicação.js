// ===== FUNÇÕES EM JAVASCRIPT =====
// As funções são blocos de código reutilizáveis que executam uma tarefa específica.
// Pense nelas como pequenos programas dentro do seu programa!

// 1. FUNÇÃO DECLARADA (Function Declaration)
// Esta é a forma tradicional de criar funções. O JavaScript "hoista" (eleva)
// essas funções, então você pode chamá-las antes de declará-las.
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // Olá, Maria!

// 2. FUNÇÃO EXPRESSÃO (Function Expression)
// Aqui atribuímos uma função a uma variável. Essa função SÓ pode ser usada
// DEPOIS de ser declarada (não sofre hoisting).
const dobrar = function (numero) {
  // Multiplica o número recebido por 2 e retorna o resultado
  return numero * 2;
};

console.log(dobrar(5)); // 10

// 3. ARROW FUNCTIONS (Funções de Seta)
// Introduzidas no ES6, são mais concisas e modernas! Use quando precisar
// de funções pequenas e simples.
// Sintaxe básica: const nome = (parâmetros) => { corpo }

// Arrow function com um parâmetro
// Quando há um parâmetro, os parênteses são opcionais, mas é bom manter para clareza
const quadrado = (x) => {
  return x * x;
};

console.log(quadrado(4)); // 16

// Arrow function simplificada (retorno implícito)
// Se tem apenas uma linha, podemos omitir as chaves e o 'return'
// O valor é retornado automaticamente!
const cubo = (x) => x * x * x;

console.log(cubo(3)); // 27

// Arrow function sem parâmetros
// Sem parâmetros? Use parênteses vazios ()
const dataAtual = () => new Date().getFullYear();

console.log(dataAtual()); // 2024

// Arrow function com múltiplos parâmetros
// Com 2 ou mais parâmetros, os parênteses são obrigatórios
const somar = (a, b) => a + b;

console.log(somar(10, 20)); // 30

// 4. CASOS DE USO COM ARRAYS
// Aqui está a mágica! Arrow functions são PERFEITAS para trabalhar com arrays.
// Vamos explorar os três métodos mais poderosos:

const numeros = [1, 2, 3, 4, 5];

// Map - transformar elementos
// Aplica uma função a CADA elemento e cria um novo array com os resultados
const dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

// Filter - filtrar elementos
// Mantém APENAS os elementos que atendem à condição (retornam true)
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4]

// Reduce - acumular valores
// Reduz um array a um único valor, acumulando resultados passo a passo
// 'acc' é o acumulador que guarda o resultado anterior, 'n' é o elemento atual
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma); // 15
