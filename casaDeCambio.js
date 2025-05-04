// Código 2: Conversor de Moedas

function converterMoeda() {
    let tipoConversao = prompt("Qual conversão deseja fazer? (1: Real para Dólar, 2: Real para Euro)");
    let valorReais = parseFloat(prompt("Informe o valor em Reais:"));
    let cotacao;
  
    if (tipoConversao === "1") {
      cotacao = parseFloat(prompt("Informe a cotação do Dólar:"));
      let valorConvertido = valorReais / cotacao;
      alert(`O valor em Dólares é: $${valorConvertido.toFixed(2)}`);
  
  
    } else if (tipoConversao === "2") {
      cotacao = parseFloat(prompt("Informe a cotação do Euro:"));
      let valorConvertido = valorReais / cotacao;
      alert(`O valor em Euros é: €${valorConvertido.toFixed(2)}`);
  
  
    } else {
      alert("Opção inválida!");
    }
  }
  
  converterMoeda();