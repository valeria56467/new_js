// меню
const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

// открытие - закрытие меню

hamburger.addEventListener('click', () => {
   leftMenu.classList.toggle('openMenu');
   hamburger.classList.toggle('open');
});

document.body.addEventListener('click', (event) => {
    //console.log(event.target.closest ('.left-menu'))
    if (!event.target.closest ('.left-menu')){ //если мы кликаем внутри меню то получаем элемент
        //console.log('Клик не в меню');
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    };
});

leftMenu.addEventListener('click', (event) => {
    const  target = event.target;
    const dropDown = target.closest('.dropdown');
    //console.log(target.closest(".dropdown"))
    if (dropDown) { //те если переменная сожержит какой- либо код а не null то выполняем
        dropDown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
})
