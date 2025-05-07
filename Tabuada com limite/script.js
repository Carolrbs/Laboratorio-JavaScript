function gerarTabuadaSimples(numero) {
    let resultado = "";
    for (let i = 0; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    return resultado;
}

function gerarTabuadaComLimite(numero, limite) {
    let resultado = "";
    for (let i = 0; i <= limite; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    return resultado;
}

function main() {
    let escolha = prompt("Você quer a tabuada com limite ou sem limite?\nDigite: 'com' ou 'sem'");

    if (escolha === "com") {
        let numero = Number(prompt("Qual número você quer ver a tabuada?"));
        let limite = Number(prompt("Até qual número você quer a tabuada?"));
        
        let resultado = gerarTabuadaComLimite(numero, limite);
        console.log(resultado);
        alert(resultado);
        
    } else if (escolha === "sem") {
        let numero = Number(prompt("Qual número você quer ver a tabuada?"));
        
        let resultado = gerarTabuadaSimples(numero);
        console.log(resultado);
        alert(resultado);
        
    } else {
        alert("Opção inválida! Escolha entre 'com' ou 'sem'.");
    }
}

main(); // Executa o programa
