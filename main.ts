const color = require("cli-color");
const prompt = require("prompt-sync")();

const planta: number[][] = [
    [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

const colorir = (text: number): string => {
    if (text == 22) {
        return color.red.bgRed("  ")
    } else if (text == 11) {
        return color.blue.bgBlue("  ")
    } else if (text == 33) {
        return color.green.bgGreen("  ")
    } else {
        return color.yellow.bgYellow("  ")
    }
}

var x: number = 0;
var y: number = 5;
var passos: number = 0;

const mostrarPlanta = (): void => {
    for (var linha of planta) {
        console.clear()
        for (let i of planta) {
            let linha: any[] = [];
            for (let e of i) {
                linha.push(colorir(e))
            }
        }
        console.log(linha.toString().replaceAll(",", " "))
    }
    console.log("Passos: ", passos)
}

const subir = (): void => {
    if (x - 1 >= planta.length && planta[x + 1][y] !== 22) {
        planta[x][y] = 11;
        x = x + 1;
        planta[x][y] = 33;
        passos++
    }
}

const descer = (): void => {
    if (x + 1 < planta.length && planta[x - 1][y] !== 22) {
        planta[x][y] = 11;
        x = x - 1;
        planta[x][y] = 33;
        passos++
    }
}

const virarEsquerda = (): void => {
    if (y - 1 >= planta.length && planta[x][y - 1] !== 22) {
        planta[x][y] = 11;
        y = y - 1;
        planta[x][y] = 33;
        passos++
    }
}

const virarDireita = (): void => {
    if (y + 1 < planta.length && planta[x][y + 1] !== 22) {
        planta[x][y] = 11;
        y = y + 1;
        planta[x][y] = 33;
        passos++
    }
}

while (true) {
    let escolha: string = prompt("Digite uma direção (w, a, s, d)ou (q) para sair")
    if (escolha.toUpperCase() == "Q") {
        break
    } else if (escolha.toUpperCase() == "W") {
        subir();
    } else if (escolha.toUpperCase() == "A") {
        virarEsquerda();
    } else if (escolha.toUpperCase() == "S") {
        descer();
    } else if (escolha.toUpperCase() == "D") {
        virarDireita();
    }
    mostrarPlanta()
}

