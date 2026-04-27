let resultadovalor = 0
let operacao = null
let apagar = false
let funcao_executada = false
let visortxt = document.getElementById('atual')
let contaatual = document.getElementById('historico')

const visor = (event) => {
    if (apagar){
        visortxt.textContent = ''
        apagar = false
    }
    if (visortxt.textContent.length < 16){
        visortxt.textContent += event.target.textContent
        funcao_executada = true
    }
}

let numerosclasse = document.querySelectorAll('.numero')
numerosclasse.forEach((numeroclicado) => {
    numeroclicado.addEventListener('click', visor)
})

const calculo = () => {
    let numero = Number(visortxt.textContent)
    
    if (operacao === '+'){
        resultadovalor += numero
    } else if (operacao === '-'){
        resultadovalor -= numero
    } else if(operacao === 'x'){
        resultadovalor *= numero
    } else if (operacao === '/'){
        resultadovalor /= numero
    } else{
        resultadovalor = numero
    }

    visortxt.textContent = resultadovalor
    contaatual.textContent = resultadovalor
}

const somar = () => {
    if (visortxt.textContent != resultadovalor || funcao_executada == true){
        calculo()
        contaatual.textContent += ' +'
        operacao = '+'
        apagar = true
    } else{
        contaatual.textContent = `${visortxt.textContent} +`
        operacao = '+'
    }
    funcao_executada = false
}

let soma = document.getElementById('soma')
soma.addEventListener('click', somar)

const subtrair = () => {
    if (visortxt.textContent != resultadovalor || funcao_executada == true){
        calculo()
        contaatual.textContent += ' -'
        operacao = '-'
        apagar = true
    } else{
        contaatual.textContent = `${visortxt.textContent} -`
        operacao = '-'
    }
    funcao_executada = false
}

let subtrai = document.getElementById('subtracao')
subtrai.addEventListener('click', subtrair)

const multiplicar = () => {
    if (visortxt.textContent != resultadovalor || funcao_executada == true){
        calculo()
        contaatual.textContent += ' x'
        operacao = 'x'
        apagar = true
    } else{
        contaatual.textContent = `${visortxt.textContent} x`
        operacao = 'x'
    }
    funcao_executada = false
}

let multiplica = document.getElementById('multiplicacao')
multiplica.addEventListener('click', multiplicar)

const divisao = () => {
    if (visortxt.textContent != resultadovalor || funcao_executada == true){
        calculo()
        contaatual.innerHTML += ' &divide;'
        operacao = '/'
        apagar = true
    } else{
        contaatual.innerHTML = `${visortxt.textContent} &divide;`
        operacao = '/'
    }
    funcao_executada = false
}

let dividir = document.getElementById('divisao')
dividir.addEventListener('click', divisao)

const resultado = () => {
    let valor1 = resultadovalor
    let valor2 = visortxt.textContent
    if (operacao !== null){
        calculo()
        if (operacao == '/'){
            contaatual.innerHTML = `${valor1} &divide; ${valor2} =`
        } else{
            contaatual.textContent = `${valor1} ${operacao} ${valor2} =`
        }
        operacao = null
        apagar = true
    } else{
        contaatual.textContent = `${valor2} =`
    }
}

let igual = document.getElementById('resultado')
igual.addEventListener('click', resultado)

const clear = () => {
    resultadovalor = 0
    visortxt.textContent = resultadovalor
    contaatual.textContent = ''
    apagar = true
    operacao = null
}

let c = document.getElementById('Clear')
c.addEventListener('click', clear)

const backspace = () => {
    if (visortxt.textContent.length > 1){
        visortxt.textContent = visortxt.textContent.slice(0, -1)
    } else{
        visortxt.textContent = '0'
        apagar = true
    }
    
}

let backspaceapagar = document.getElementById('backspace')
backspaceapagar.addEventListener('click', backspace)

const clearentry = () => {
    visortxt.textContent = 0
    apagar = true
}

let ce = document.getElementById('Clearentry')
ce.addEventListener('click', clearentry)

const porcento = () => {
    if (operacao === '+' || operacao === '-'){
        visortxt.textContent = resultadovalor * visortxt.textContent/100
    } else{
        visortxt.textContent = visortxt.textContent/100
    }
}

let porcentagem_botao = document.getElementById('porcentagem')
porcentagem_botao.addEventListener('click', porcento)