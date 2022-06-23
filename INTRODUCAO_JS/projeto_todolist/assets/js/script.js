//codigo base de: https://github.com/fernandoleonid/mini-projetos-js/blob/master/07-todo-List/app.js
'use strict';

//precisamos agora que o programa leia o que a pessoa irá digitar e quando dar enter, vamos guardar a tarefa no banco de dados (localStorage) e vamos fazer funcao que irá fazer leitura desse banco de dados e aparecerá a tarefa na tela; vamos fazer variavel q irá ligar ao localstorage
//variavel que vai lidar com banco de dados; é uma array [] de objetos
// a funcao atualizartela vai ler o banco de dados abaixo e cria item pra cada elemento desse array
/*let banco = [ 
	{'tarefa':'estudar JS', 'status':''},  //aqui temos tarefa estudar JS com status vazio
	{'tarefa': 'netflix', 'status':'checked'}
];*/


//localStorage será utilizado para que as tarefas escritas em tela continuem na tela quando a página for atualizada; inspecionar pag > aplicacao > localStorage (trabalha com key and value); localStorage.setItem('teste', 'fernando') <- teste é a chave, fernando é valor
//definindo localStorage; o banco teoricamente estará no localStorage
const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? []; //pegara o item da chave que esta no id todoList; o ?? nos diz que se o localStorage.getItem('todoList') for vazio, passa array vazio
//não pode mandar banco dessa forma: localStorage.setItem('todoList', banco) porque o localStorage só lê string(ficaria Objeto Objeto etc), portanto, transforma o json numa string; mas temos que receber item na forma de string e sim de array, portanto, JSON.parse(localStorage.getItem('todoList)); OU SEJA, pra enviar transforma em string e pra receber transforma em array, em JSON.

//atualiza banco:
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco)); //recebe banco, pega o local storage e o item é todoList e o que vamos enviar é o banco (passando como string para localStorage entender da forma correta)



// <label class="todo__item"> 
 //               <input type="checkbox">
   //             <div>teste de item 1</div>
     //           <input type="button" value="X">
       //     </label> 

//funcao do js para criar esses elementos label



//Abaixo, constante criarItem irá receber uma funcao anonima (por enquanto sem argumento) e irá retornar (=>) o label que fizemos anteriormente; criaremos uma id todoList na div onde tinha o label
// a tarefa será uma string e essa tarefa será substituida no teste item 1 no div; tarefa vai receber o que a pessoa vai digitar no todolist; se colocar criarItem("tarefa"); no console do site irá aparecer 
//status='' status vazio caso ngm passe info 
//pega indice abaixo pra poder diferenciar cada um dos itens no banco
const criarItem = (tarefa, status, indice) => {
	//vamos criar item na memoria, colocaremos o input (checkbox) dentro dele e a div com o texto e o outro input do tipo button
	const item = document.createElement('label'); //label ainda n esta no DOM
	item.classList.add('todo__item'); //acessa prop chamada classList e nela temos um metodo chamado add (adiciona classes); entao criou o label e adicionou uma classe a ele com isso
	// vamos colocar mais elementos na label pela propriedade abaixo
	// ao lado do checkbox,  colocaremos checked para marcar a tarefa  (a tarefa vai vir marcada); portanto, colocaremos variável status e passa status como atributo; se status estiver vazio, é porque checkbox n foi marcado; para analisar no site criarItem("Criar video", "checked")
	item.innerHTML = `
		<input type="checkbox" ${status} data-indice=${indice}>
		<div>${tarefa}</div> 
        <input type="button" value="X" data-indice=${indice}>
		 ` 
		 //data-indice, indice poderia ser qualquer nome;  vai receber o indice
		// pega o elemento que vai conter essa label 
	document.getElementById('todoList').appendChild(item); //append para adicionar o elemento que acabamos de criar, o item

} //se chamar essa funcao criarItem, irá adicionar no DOM; pode ver se ta funcionando no browser chamando a funcao criarItem()

const limparTarefas = () => {
	const todoList = document.getElementById('todoList');//id 'pai' 
	//enquanto existir o primeiro filho, irá remover o ultimo filho
	while(todoList.firstChild){
		todoList.removeChild(todoList.lastChild); // isso é pra quando chamar o atualizartela, n ficar copiando tarefas ja existente no site
	}
}
const atualizarTela = () => {
	limparTarefas(); // funcao vai limpar tarefas porque se chaamar atualizarTela duas vezes, repetirá as tarefas no site
	//abaixo, vamos pegar o indice tbm do array e mandar pro criarItem a tarefa, status e indice
	const banco = getBanco(); //como comentamos variavel banco, faremos isso pra pegar no localStorage
	banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
} //vai criar itens, a partir do banco de dados
//banco.forEach é um metodo do array vai percorrer todo o array item a item e o callback dele sera criarItem
// pega item, manda pra criarItem, mas so pega a tarefa do item

const inserirItem = (evento) => {
	const tecla = evento.key;
	const texto = evento.target.value; //será igual ao alvo onde aconteceu esse evento (na caixa de texto) e queremos o valor dessa caixa de texto  
	//verificar tecla que foi digitada a partir do evento que o eventlistener mandou
	//console.log(tecla); /*ver se realmente esta capturando tecla q foi acionada
	if (tecla === 'Enter'){

		const banco = getBanco(); //ler banco, trazer dados
		//acrescentar item ao banco d dados/array
		banco.push({'tarefa': texto, 'status':''});
		//mandar novamente pra localStorage:
		setBanco(banco); //enviando novamente
		atualizarTela();
		evento.target.value=''; //limpar caixa de texto após adicionar tarefa
		
	}
};


// quando alguem der enter na caixinha de input, ira adicionar uma tarefa ao banco, ao array
// pegaremos id newItem
document.getElementById('newItem').addEventListener('keypress', inserirItem);
// addEventListener captura um evento, o evento será o keypress; com esse keypress vamos inserir/adicionar um item
//o eventoListener manda pro callback (inserirItem) o evento que aconteceu 
const removerItem = (indice) => {
	const banco = getBanco(); //pega info do local storage
	banco.splice(indice,1); //splice é pra cortar, modificar um array; nesse caso vai remover a tarefa do indice (o 1 é pra remover um)
	setBanco(banco); //manda informacoes pro banco
	atualizarTela();
} 

// interrogacao é como se fosse um "então" e' : 'como 'se não'
const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTela();
}


const clickItem = (evento) => {
	const elemento = evento.target;//qual elemento html que clicamos
	// pra sabermos se foi o X, o checkbox ou label que foi clicado e excluir a tarefa e etc; dataset é prop do elemento para poder pegar esse valor do indice
	if(elemento.type === 'button'){
		const indice = elemento.dataset.indice; 
		removerItem(indice);

	}else if(elemento.type === 'checkbox'){
		const indice = elemento.dataset.indice;
		atualizarItem(indice);

	}
}
document.getElementById('todoList').addEventListener('click', clickItem); //vamos capturar qual item foi clicado, se clicou no label, no checkbox, se clicou pra excluir...


//toda vez que mudar const banco, irá atualizar tela abaixo 
atualizarTela();
 
















//CODIGO PRONTO:                 =======================================================================


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