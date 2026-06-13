// Armazena o peso (em kg) e a altura (em metros)
let peso = 70;
let altura = 1.75;

// Calcula o IMC: peso dividido por (altura vezes altura)
let imc = peso / (altura * altura);

// Variável para guardar a classificação textual
let classificacao = '';

// Estrutura condicional para determinar a classificação do IMC
if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = 'Peso normal';
} else {
    classificacao = 'Acima do peso';
}

// Exibe o IMC formatado com 2 casas decimais e a sua classificação
console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);