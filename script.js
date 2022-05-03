function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    var valorEmReal = valorEmDolarNumerico / 4.99
    var valorEmRealFixo = valorEmReal.toFixed(2)
    console.log(valorEmRealFixo)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em Dolar é " + valorEmRealFixo;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter1() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmEuroNumerico = parseFloat(valor)
    var valorEmReal = valorEmEuroNumerico / 5.25
    var valorEmRealFixo = valorEmReal.toFixed(2)
    console.log(valorEmRealFixo)

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O valor em Euro é " + valorEmRealFixo;
    elementoValorConvertido.innerHTML = valorConvertido;
}