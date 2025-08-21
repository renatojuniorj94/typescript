/* Aliases e interfaces
Basicamente é criar os seus próprios tipos personalizados

Os aliases de tipo permitem definir tipos com um nome personalizado (um alias) de tipos primitivos ou complexos.

As interfaces são a mesma coisa que os aliases, exceto que só se aplicam ao tipo de objeto.
*/

//Aliases (Criando nossos tipos personalizados)
//OBS: Em 'type', a primeira letra deve ser maiuscula, como boa pratica de desenvolvimento.
type AnoVeiculo = number;
type MarcaVeiculo = string;
type ModeloVeiculo = string;
type Carro = {
    ano: AnoVeiculo,
    marca: MarcaVeiculo,
    modelo: ModeloVeiculo
};

//Exemplo de uso
const uno: AnoVeiculo = 2001;
const gol: MarcaVeiculo = "Volkswagen";
const TSI: ModeloVeiculo = "Up";
const laFerrari: Carro = {
    ano: 2002,
    marca: 'Ferrari',
    modelo: 'La Ferrari'
};

//Interfaces
interface Retangulo {
    altura: number,
    largura: number
};

//Exemplo de uso
const novoItem: Retangulo = {
    altura: 20,
    largura: 10
}

//Estendendo interface - Herdar propriedades do original e adicionar algo.
interface RetanguloColorido extends Retangulo {
    cor: string
}

//Uso
const outroItem: RetanguloColorido = {
    altura:20,
    largura:10,
    cor: 'azul'
}