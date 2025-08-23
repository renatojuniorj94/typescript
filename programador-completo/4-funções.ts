/* Funções

TypeScript tem uma sintaxe específica para digitar parâmetros de função e valores de retorno.
*/

//Definindo o tipo do retorno da função
function getTime(): number {
    return new Date().getTime();
}

//Void - Quando a função não tem retorno
function printHello(): void {
    console.log("Hello!");
}

//Tipos de parâmetros de função
function multiplicacao(a: number, b:number): number{
    return a * b;
}
