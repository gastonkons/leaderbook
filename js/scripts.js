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
            button.classList.add('icon-home3');
        } else {
            button.classList.remove('icon-home3');
            button.classList.add('icon-menu');
        }
    })
}