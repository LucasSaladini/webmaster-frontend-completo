window.onload = function() {
    var rep = 0

    // while -> precisamos de uma variável inicial
    while(rep < 10) {
        console.log("Olá, número: " + rep)
        rep++
    }

    console.log("Cheguei até o final!")

    for( var number = 0; number < 10; number++) {
        console.log("Olá mundo")
    }

    do {
        console.log("Olá, mundo")
        name = "João"
    }while(name == "Lucas")
}