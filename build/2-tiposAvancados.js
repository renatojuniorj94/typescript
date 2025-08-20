"use strict";
/* Tipos avançados ou especiais*/
//Union type - Quando um valor pode ser mais do que um único tipo
let myVariable; //pode ser uma string ou um número
myVariable = "Hello";
myVariable = 42;
//myVariable = true > erro
//any (qualquer) - É um tipo que desabilita a verificação de tipos e permite efetivamente que todos os tipos sejam usados
let teste = 100;
teste = "texto;";
/* ALERTA: any pode ser uma maneira útil de evitar erros, uma vez que desabilita a verificação de tipos, mas o TypeScript não será capaz de fornecer segurança de tipo e ferramentas que dependem em dados de tipo, como preenchimento automático, não funcionarão.
Lembre-se, deve ser evitado a "qualquer" custo...
*/
/* unknown (desconhecido) - é uma alternativa semelhante ao any, só que mais segura.
Esse tipo exige verificações ou conversões explícitas para garantir a segurança de tipo durante as operações. */
let valor = 100;
valor = "Agora é texto";
let converte = valor;
console.log(converte.length);
/* never (nunca) - Lança um erro sempre que ele é definido.
never é raramente usado, seu uso primário é em genéricos avançados. */
//let b: never = true;
//array - TypeScript tem uma sintaxe especifíca para matrizes.
const names = [];
names.push("Renato"); //sem erro
//names.push(3); > erro
/* A palavra chave 'readonly' (somente leitura) impede que matrizes sejam alteradas. */
const nomes = ['Renato', 'Junior'];
//nomes.push("Rodrigues"); > Erro
/* Inferência de tipo - TypeScript pode inferir o tipo de uma matriz se ela tiver valores. */
const numbers = [1, 2, 3]; // Infere tipo number[]
numbers.push(4); // Sem erro
//numbers.push("5"); > Erro
let y = numbers[0]; // Sem erro, pegou valor 1
/* tuplas - Uma tupla é um array tipado com um comprimento e tipos pré-definidos para cada índice. As tuplas são ótimas porque permitem que cada elemento na matriz seja um tipo conhecido de valor. */
let nossaTupla;
nossaTupla = [5, false, 'TypeScript'];
//Exemplo com erro:
//nossaTupla = [false, 'JavaScript', 5];
