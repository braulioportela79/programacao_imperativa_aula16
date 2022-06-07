// Objetivo
// Vamos calcular o número fatorial de um valor inteiro.

// O tech leader da equipe precisa criar um código onde seja calculado o número fatorial de um valor inteiro. Para isto, deveremos:

// Criar uma função que calcula o fatorial usando loop (for);
// Recriar esta mesma função usando recursividade (sem o uso de for)

let fatorialFor = num => {
    let fatorial = 1;
    for (let i = num; i > 1; i--) {
        fatorial *= i
    };
    console.log(fatorial);
};
fatorialFor(5);

let fatorialIf = num => {
    if (num == 0) {
        return 1;
    }
    else {
        return num * fatorialIf(num - 1);
    };
};
console.log(fatorialIf(5))


