// Neste exercício, você terá que criar uma função "FizzBuzz" que recebe dois parâmetros numéricos.

// A função deve atender aos seguintes requisitos:
// ● Você deve imprimir os números de 1 a 100;
// ● Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
// ● Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra &quot;Buzz&quot; em vez do número correspondente;
// ● Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.

// Avançado: Como crédito extra, pense em como otimizar seu programa para que as palavras sejam passadas de forma dinâmica e seja você quem decide quais palavras ele deve dizer.

let fizzBuzz = (num1, num2, str1, str2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 == 0 && i % num2 != 0) {
            console.log(`${i} - É múltiplo de ${num1} - ${str1}`);
        } else if (i % num2 == 0 && i % num1 != 0) {
            console.log(`${i} - É múltiplo de ${num2} - ${str2}`);
        } else if (i % num1 == 0 && i % num2 == 0) {
            console.log(`${i} - É múltiplo de ${num1} e ${num2} - ${str1 + str2}`);
        } else {
            console.log(`${i} - NÃO é multiplo de ${num1} nem de ${num2}`);
        };
    };
};
fizzBuzz(2, 5, 'Fizz', 'Buzz');