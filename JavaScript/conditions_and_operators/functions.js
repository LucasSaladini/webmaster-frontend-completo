window.onload = function () {
    var name = "João"
    var age = 2023 - 1993

    // === -> alé de ser igual a variável tem que ser do mesmo tipo
    // == -> apenas o valor precisa ser igual
    // != -> diferente
    // !== -> diferente valor e tipo
    // >=
    // <=
    // >
    // <

    if(name == "Lucas") {
        console.log("Condição verdadeira")
    } else if (name == "João") {
        console.log("Condição verdadeira")
    } else {
        console.log("Condição falsa")
    }

    if(age > 23) {
        console.log("Eu tenho mais de 23 anos de idade!")
    } else {
        console.log("Eu sou menor ou igual a 23 anos")
    }
}