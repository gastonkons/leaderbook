function messageLinks(text){
    alert(`A ${text} aún no hemos creado!`);
}

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