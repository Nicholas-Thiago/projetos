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