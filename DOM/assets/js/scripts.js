/* Atividade: Light Mode/Dark Mode
Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie o HTML e o CSS deste repositório
Crie um arquivo chamado scripts.js na sua pasta assets/js
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original */ 

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';

        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';

const button = document.getElementById('mode-selector');
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0]; 

button.addEventListener('click', changeMode);