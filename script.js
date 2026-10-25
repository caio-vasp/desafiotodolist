
/* adicionar.addEventListener('click', function() {
    let textodigitado = campo.value

    if (textodigitado == '') {
        alert("Digite alguma coisa")
        return
    }
    let li = document.createElement('li')
    li.textContent = textodigitado
    lista.appendChild(li)

    li.addEventListener('click', function() {
    li.style.textDecoration =  li.style.textDecoration ? '' : 'line-through'

    })

}) */


let campo = document.querySelector('#campo')
let adicionar = document.querySelector('#btnadd')
let lista = document.querySelector('#lista')
let remover = document.querySelector('#btnremove')


let tarefas = []

let dadosSalvos = localStorage.getItem('tarefas')

if(dadosSalvos != null) {
    tarefas = JSON.parse(dadosSalvos)
}

function salvar() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}


function renderizarlista() {
    lista.innerHTML = ''

    tarefas.forEach(function(ponteiro) {
        let li = document.createElement('li')
        li.textContent = `${ponteiro.tarefa}`

        lista.appendChild(li)
    })
}

adicionar.addEventListener('click', function() {
    let tarefadigitada = campo.value

    if (tarefadigitada == "") {
        alert("preencha o campo")
        return
    }

    tarefas.push({
        tarefa: tarefadigitada
    })

    salvar()
    renderizarlista()
})

renderizarlista()

remover.addEventListener('click', function() {
    tarefas = []
    salvar()
    renderizarlista()
})