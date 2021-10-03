let numero = 0
input.onButtonPressed(Button.A, function () {
    if (numero % 2 == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.AB, function () {
    numero = randint(0, 100)
    basic.showNumber(numero)
})
input.onButtonPressed(Button.B, function () {
    if (numero % 2 != 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
