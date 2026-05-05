let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = true;

let logicaAnd = "#AND Você vai ao cinema?";
logicaAnd += temDinheiro && estaChovendo;
console.log(logicaAnd);

let logicaOr = "#OR Voçê vai ao cinema";
logicaOr += estaChovendo || carroEstaNaGaragem;
console.log(logicaOr);
