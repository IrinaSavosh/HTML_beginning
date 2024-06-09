

const menuActive = document.querySelector(".menu-active"); //находим меню
const burger = document.getSelector('.btn_burger'); //находим кнопку бургера
// const menuClose = document.querySelector('.menu-close');//находим кнопку крестика

function toggleMenu(){
   menuActive.classList.toggle('hidden_burger'); //Функция удаляет или устанавливает класс с названием hidden_burger
}

burger.addEventListener('click', toggleMenu); //По клику на бургер срабатывает функция
// menuClose.addEventListener('click', toggleMenu);//По клику на крестик срабатывает функция