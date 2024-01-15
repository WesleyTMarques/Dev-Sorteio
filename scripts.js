function generateNumber() {
    const min = Math.ceil(document.querySelector('.first-number').value)
    const max = Math.floor(document.querySelector('.second-number').value)
    // const palpite = document.querySelector('.shotNumber').value
    let answer = document.querySelector('.result')

    const result = Math.floor(Math.random() * (max - min + 1) + min)

    if(min === 0 && max == 0){
        alert("Digite um valor minimo e um maximo para realizar o sorteio")
    } else{
        answer.innerHTML = `O numero sorteado é ${result}`
    }
}