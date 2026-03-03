let sub = document.querySelector('.sub').classList.add('escondido')
let mult = document.querySelector('.mult').classList.add('escondido')
let divi = document.querySelector('.divi').classList.add('escondido')

const adicao = (n1t, n2t) => {
    let resad = document.getElementById('resad')
    let n1 = Number(n1t.value)
    let n2 = Number(n2t.value)
    resad.innerHTML = `<strong>${n1 + n2}</strong>`
}

const subtracao = (n1t, n2t) => {
    let ressub = document.getElementById('ressub')
    let n1 = Number(n1t.value)
    let n2 = Number(n2t.value)
    ressub.innerHTML = `<strong>${n1 - n2}</strong>`
}

const multiplicacao = (n1t, n2t) => {
    let resmult = document.getElementById('resmult')
    let n1 = Number(n1t.value)
    let n2 = Number(n2t.value)
    resmult.innerHTML = `<strong>${n1 * n2}</strong>`
}
const divisao = (n1t, n2t) => {
    let resdiv = document.getElementById('resdiv')
    let n1 = Number(n1t.value)
    let n2 = Number(n2t.value)
    resdiv.innerHTML = `<strong>${n1 / n2}</strong>`
}

const alternar = (classe) => {
    adi = document.querySelector('.adi').classList.add('escondido')
    sub = document.querySelector('.sub').classList.add('escondido')
    mult = document.querySelector('.mult').classList.add('escondido')
    divi = document.querySelector('.divi').classList.add('escondido')

    let escolhido = document.querySelector('.' + classe)
    escolhido.classList.remove('escondido')
}