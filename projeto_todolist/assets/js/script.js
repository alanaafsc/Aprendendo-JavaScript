//codigo base de: https://github.com/fernandoleonid/mini-projetos-js/blob/master/07-todo-List/app.js
'use strict';

/* <label class="todo__item"> 
                <input type="checkbox">
                <div>teste de item 1</div>
                <input type="button" value="X">
            </label> */

/*funcao do js para criar esses elementos label*/

/*Abaixo, constante criarItem irá receber uma funcao anonima (por enquanto sem argumento) e irá retornar (=>) o label que fizemos anteriormente; criaremos uma id todoList na div onde tinha o label*/
const criarItem = () => {
	/*vamos criar item na memoria, colocaremos o input (checkbox) dentro dele e a div com o texto e o outro input do tipo button*/
	const item = document.createElement('label'); /*label ainda n esta no DOM*/	
	item.classList.add('todo__item'); /*acessa prop chamada classList e nela temos um metodo chamado add (adiciona classes); entao criou o label e adicionou uma classe a ele com isso*/
	/* vamos colocar mais elementos na label pela propriedade abaixo*/
	item.innerHTML = `
		<input type="checkbox">
		<div>teste de item 1</div>
        <input type="button" value="X">
		 ` 
		/* pega o elemento que vai conter essa label */
	document.getElementById('todoList').appendChild(item); /*append para adicionar o elemento que acabamos de criar, o item*/

} /*se chamar essa funcao criarItem, irá adicionar no DOM; pode ver se ta funcionando no browser chamando a funcao criarItem()*/




























/* let banco = [];

const getBanco = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem ('todoList', JSON.stringify(banco));

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco(); 
    banco.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const banco = getBanco();
        banco.push ({'tarefa': texto, 'status': ''});
        setBanco(banco);
        atualizarTela();
        evento.target.value = '';
    }
}

const removerItem = (indice) => {
    const banco = getBanco();
    banco.splice (indice, 1);
    setBanco(banco);
    atualizarTela();
}

const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    console.log (elemento.type);
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem (indice);
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela(); */