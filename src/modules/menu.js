const menu = () => {
   const menuBtn = document.querySelector('.menu');
   const menu = document.querySelector('menu');
   const closeBtn = menu.querySelector('.close-btn');
   const menuItems = menu.querySelectorAll('ul>li>a');
   // const main = document.querySelector('main');
   const mainBtn = document.querySelector('main>a');

   console.log(mainBtn);

   const handleMenu = () => {

      menu.classList.toggle('active-menu');
   }
   //открытие бургер меню
   menuBtn.addEventListener('click', handleMenu);
   //Закрытие бургер меню
   closeBtn.addEventListener('click', handleMenu)
   // Находим каждый элемент меню и его атрибут href 
   menuItems.forEach(menuItem => menuItem.addEventListener('click', (e) => {
      e.preventDefault();
      const block = menuItem.getAttribute('href');
      document.querySelector(block).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
      handleMenu();
   }));
   // При нажатии на кнопку mainBtn мы плавно перемещаемся на следующий слайд
   mainBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const block = mainBtn.getAttribute('href')
      document.querySelector(block).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   })
}
export default menu