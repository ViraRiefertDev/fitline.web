
//Логика для кнопки меню бургер

//При нажатии на header__Burger должен добавиться класс к header__burger и  header__menu
// К боди должен добавиться класс lock чтоб под бургером не скролилось меню

const headerBurger = document.querySelector(".header__burger");

const headerMenu = document.querySelector(".header__menu");

const header = document.querySelector("header");

const body = document.body;

const activeBurger = () => {
   headerBurger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   header.classList.toggle("active");
   body.classList.toggle("lock");
};

headerBurger.addEventListener("click", activeBurger);

//-----------------------------------------------------------------
//----Выпадающее меню в бургере

//переменная true, если сайт открыт на устройстве тачскрин
let isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   },
};


if(isMobile.any()){
   const listItemsWithSubMenu = document.querySelectorAll('li.sub-menu');

   for(let listItem of listItemsWithSubMenu){
      dropDownMenuByClick = ()=>{
         const subMenu = listItem.querySelector('.sub-list');
         subMenu.classList.toggle('drop-menu-touch');
      }
   
      listItem.addEventListener('click', dropDownMenuByClick)
   }
   
   
      
   }else{
      const subLists = document.querySelectorAll('.sub-list');
      console.log(subLists);
      for(let subList of subLists){
         subList.classList.add('drop-menu-mouse');
      }
   }


