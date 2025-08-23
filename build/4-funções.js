"use strict";
/* Funções

TypeScript tem uma sintaxe específica para digitar parâmetros de função e valores de retorno.
*/
//Definindo o tipo do retorno da função
function getTime() {
    return new Date().getTime();
}
//Void - Quando a função não tem retorno
function printHello() {
    console.log("Hello!");
}
//Tipos de parâmetros de função
function multiplicacao(a, b) {
    return a * b;
}
//Parametros opcionais
//O operador "?" aqui marca que o parametro "c" é opcional
function add(a, b, c) {
    return a + b + (c || 0);
}
//Parâmetros com valores iniciais padrão
function saudacao(name = "Renato") {
    console.log(`Olá ${name}`);
}
saudacao(); // Olá Renato
saudacao("Mariza"); // Olá Mariza
//Parâmetros nomeados (Named Parameters)
function hello({ nome, idade }) {
    console.log(`Hello, ${nome}! Você tem ${idade} anos.`);
}
hello({ nome: "Renato", idade: 31 }); // Hello, Renato! Você tem 31 anos.
