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