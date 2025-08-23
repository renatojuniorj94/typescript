/* Generics (Genéricos)
Pense nso generics como "caixas" flexíveis, onde você pode colocar diferentes tipos de dados. É um coringa, que você pode aceitar um valor.
 */

function imprimirValor<T>(valor: T): void {
    console.log(valor);    
}

imprimirValor<number>(42); // imprime 42
imprimirValor<string>('Olá'); // imprime 'Olá