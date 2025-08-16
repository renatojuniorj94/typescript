/* Tipos avançados ou especiais*/

//Union type - Quando um valor pode ser mais do que um único tipo
let myVariable: string | number; //pode ser uma string ou um número
myVariable = "Hello";
myVariable = 42;
//myVariable = true > erro

//any (qualquer) - É um tipo que desabilita a verificação de tipos e permite efetivamente que todos os tipos sejam usados
let teste: any = 100;
teste = "texto;"

/* ALERTA: any pode ser uma maneira útil de evitar erros, uma vez que desabilita a verificação de tipos, mas o TypeScript não será capaz de fornecer segurança de tipo e ferramentas que dependem em dados de tipo, como preenchimento automático, não funcionarão.
Lembre-se, deve ser evitado a "qualquer" custo...
*/

/* unknown (desconhecido) - é uma alternativa semelhante ao any, só que mais segura.
Esse tipo exige verificações ou conversões explícitas para garantir a segurança de tipo durante as operações. */
let valor: unknown = 100;
valor = "Agora é texto";

let converte = valor as string;
console.log(converte.length)