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
/* Uma boa prática é fazer sua tupla sempre readonly. Por que? Por que as tuplas só tem tipos fortemente definidos para os valores iniciais. */
//Tupla com os tipos de dados definidos
let outTuple;
outTuple = [5, false, 'Brasil'];
//Sem 'readonly' perdemos o controle de novas inserções na tupla
outTuple.push('Rio de Janeiro');
//Com readonly
const tuplaReadonly = [13, true, 'Março'];
//Lançando erro
//tuplaReadonly.push('Fevereiro')
//Objetos
const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2019
};
//O TypeScript pode inferir os tipos de propriedades com base em seus valores
const carro2 = {
    marca: "Toyota"
};
carro2.marca = "BMW"; // Nenhum erro, pois continua sendo uma string.
//carro2.marca = 6 > Erro, porque tentamos atribuir um 'number' a uma 'string'
/* No TypeScript um objeto pode ter propriedades opcionais. Propriedades opcionais são propriedades que não precisam ser definidas na definição do objeto. Elas podem ser usadas depois ou não, são opcionais. */
const celular = {
    marca: "Xiaomi",
};
celular.modelo = 9;
//Nesse caso, não especificamos o modelo no momentos em que o objeto foi criado.
//Assinaturas de índice - As assinaturas de índice podem ser usadas para objetos sem uma lista definida de propriedades.
const nomeIdade = {};
nomeIdade["Renato"] = 31;
