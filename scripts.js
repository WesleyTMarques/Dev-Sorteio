function generateNumber() {
    const min = Math.ceil(document.querySelector('.first-number').value)
    const max = Math.floor(document.querySelector('.second-number').value)
    const palpite = document.querySelector('.shotNumber').value

    const result = Math.floor(Math.random() * (max - min + 1) + min)

    if (palpite == 0) {
        alert("O número sorteado foi: " + result)
    } else {
        if (palpite == result) {
            alert("Parabens, você acertou o número sorteado!\nNúmero sorte: " + result + "\nSeu palpite: " + palpite)
        } else {
            alert("Puxa, seu palpite não está correto, mais sorte na próxima jogada!\nNúmero sorteado: " + result + "\nSeu palpite: " + palpite)
        }
    }
}