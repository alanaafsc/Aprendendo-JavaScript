/* Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". */
function SomaDiferentes(n1, n2){
    const somaNumeros = n1 + n2;
    let comparaDez = '';
    let comparaVinte = '';
    let comparaNumeros = '';
    if (n1 !== n2){
        if(somaNumeros>10 && somaNumeros<20){
            comparaDez = 'maior';
            comparaVinte = 'menor';
            comparaNumeros = 'diferentes';
        }else if(somaNumeros>10 && somaNumeros>20){
            comparaDez = 'maior';
            comparaVinte = 'maior';
            comparaNumeros = 'diferentes';
            
        }else if(somaNumeros<10){
            comparaDez = 'menor';
            comparaVinte = 'menor';
            comparaNumeros = 'diferentes';
        }
    }
    return `Os números ${n1} e ${n2} são ${comparaNumeros}. Sua soma é ${somaNumeros}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`;

}

function SomaIguais(n1, n2){
    let somaNumeros = n1 + n2;
    let comparaDez = '';
    let comparaVinte = '';
    let comparaNumeros = '';
    if (n1 === n2){
        if(somaNumeros>10 && somaNumeros<20){
            comparaDez = 'maior';
            comparaVinte = 'menor';
            comparaNumeros = 'iguais';
        }else if(somaNumeros>10 && somaNumeros>20){
            comparaDez = 'maior';
            comparaVinte = 'maior';
            comparaNumeros = 'iguais';
            
        }else if(somaNumeros<10){
            comparaDez = 'menor';
            comparaVinte = 'menor';
            comparaNumeros = 'iguais';
        }}
    return `Os números ${n1} e ${n2} são ${comparaNumeros}. Sua soma é ${somaNumeros}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`;

}

function compararNumeros(n1, n2){
    if(!n1 || !n2){
        return "Defina dois números!";
    }else{
        if(n1 === n2){
            return SomaIguais(n1, n2);
        }else{
            return SomaDiferentes(n1, n2);
    }}

}

console.log(compararNumeros(2,4));
