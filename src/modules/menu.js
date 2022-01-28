const menu = () => {
   const menu = document.querySelector('menu');
   const main = document.querySelector('main');
   const body = document.querySelector('body');



   body.addEventListener('click', (e) => {

      const eTarget = e.target.closest('a[href*="#"]');

      const handleMenu = () => {
         menu.classList.toggle('active-menu');
      };
      // Открытие меню при нажатии на бургер кнопку
      if (e.target.closest('.menu')) {
         handleMenu();
         // Закрытие меню на крестик
      } else if (e.target.closest('.close-btn')) {
         e.preventDefault()
         handleMenu();
         // Плавно перемещаемся к первому блоку при нажатии на кнопку 
      } else if (eTarget && main.contains(e.target)) {
         e.preventDefault();
         const block = eTarget.getAttribute('href');
         document.querySelector(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
         // Плавно перемещаемся к выбранному блоку из списка меню
      } else if (eTarget && menu.contains(e.target)) {
         e.preventDefault();
         const block = e.target.getAttribute('href');
         document.querySelector(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
         handleMenu();
         // Возможность закрыть окно меню нажатием на пустое поле в не меню.
      } else if (!menu.contains(e.target) && menu.classList.contains('active-menu')) {
         handleMenu();
      }
   });
};
export default menu;