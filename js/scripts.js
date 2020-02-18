// Esta funcion alerta de las páginas o links que aún no han sido creados

function messageLinks(text){
    alert(`A ${text} aún no lo hemos creado!`);
}

// Esta funcion muestra y oculta el Menu de navegacion en el modo Responsive

function showHide(){
    const menu = document.querySelector('.menu');
    const button = document.getElementById('menu__hamburguer');
    menu.classList.toggle('showMenu');
    menu.classList.forEach(item => {
        if (item === 'showMenu') {
            button.classList.remove('icon-menu');
            button.classList.add('icon-cross');
        } else {
            button.classList.remove('icon-cross');
            button.classList.add('icon-menu');
        }
    })
}

// Esta funcion revisa los datos almacenados en el navegador y establece el tipo de Plantilla guardada por el usuario

function darkMode(){
    if (localStorage.getItem('dark')) {
        let boolean = localStorage.getItem('dark');
        if (boolean == 'true') {
            document.getElementById('mode').selectedIndex = 1;
        } else {
            document.getElementById('mode').selectedIndex = 0;
        }
        themePage();
    } else {
        localStorage.setItem('dark', false);
    }
}

// Esta función lo que hace es agregar una clase .dark para modificar la Plantilla de la página y guardarla para que todas las páginas que visite tengan el mismo formato

function themePage(){
    let value = document.querySelector('#mode').value;
    let body = document.querySelector('body');
    if (value === 'dark') {
        body.classList.add('dark');
        localStorage.setItem('dark', true);
    } else {
        body.classList.remove('dark');
        localStorage.setItem('dark', false);
    }
}

// Esta linea carga la funcion darkMode una vez que el navegador haya cargado para revisar si el modo Dark existe en el navegador

document.addEventListener('DOMContentLoaded', darkMode);