let input = document.querySelector('#tarefa');
let adicionar = document.querySelector('.adicionar');
let lista = document.querySelector('.lista');

function criaLi() {
    let li = document.createElement('li');
    return li;
}

function limpaInput() {
    input.value = '';
    input.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    let botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar')
    botaoApagar.setAttribute('title','apagar esta tarefa')
    li.appendChild(botaoApagar);
}


input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if (!input.value) return
        criaTarefa(input.value);
        limpaInput();
    
    }
})

function criaTarefa(texto) {
    let li = criaLi();
    li.innerText = texto;
    lista.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
} 


adicionar.addEventListener('click', function(event) {
    if (!input.value) return
    criaTarefa(input.value);
    limpaInput();
})

document.addEventListener('click', function(e){
    let el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();