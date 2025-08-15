"use strict";
let nome = "Renato";
//npx tsc -w   > Pede que o TypeScript fique observando toda vez que houver uma mudança nos nossos arquivos com extensão ".ts".
// Tipos básicos, simples, primitivos de dados
//string - valores de texto
let sobrenome = "Junior";
//number - números inteiros e valores de ponto flutuante
let idade = 31;
//boolean - valores verdadeiros (true) ou falsos (false)
let ativo = true;
//undefined (indefinido)
let bizarro = undefined;
//null (nulo)
let nada = null;
//Há também 2 tipos primitivos menos comuns, encontrados em versões mais recentes do JavaScript e TypeScript - bigint e symbol
/*Ao criar uma variável, há duas maneiras principais de o TypeScript atribuir um tipo:

- Explícito
- Implícito
*/
//Tipo explícito - Quando você atribui o tipo de dado na declaração
let nacionalidade = 'Brasileiro';
//nacionalidade = 'brasileiro' > TypeScript aponta erro.
//Tipo implícito - Quando o TypeScript irá "adivinhar" (inferir) o tipo, com base no valor atribuído.
let profissao = 'Programador';
//profissao = 100 > TypeScript aponta erro por ter atribuído uma string anteriormente
