const modal = () => {
   const modal = document.querySelector('.popup');
   const buttons = document.querySelectorAll('.popup-btn');
   const closeBtn = modal.querySelector('.popup-close');
   const body = document.querySelector('body');
   const popupContent = document.querySelector('.popup-content');

   //Переменные для анимации
   let end = 0,
      step = 0.01,
      popUpInterval = 0;

   function popUpAnimation() {
      end += step;
      if (end >= 1) {
         end = 1;
         cancelAnimationFrame(popUpInterval);
      }
      modal.style.opacity = end;
      popUpInterval = requestAnimationFrame(popUpAnimation);
   }

   buttons.forEach(btn => {
      btn.addEventListener('click', () => {

         //Проверка размера экрана
         if (window.screen.width < 768) {
            modal.style.display = 'block';
            body.style.overflow = 'hidden'; /*запрещаем прокручивание страницы при открытом меню*/
         } else {
            modal.style.display = 'block';
            body.style.overflow = 'hidden'; /*запрещаем прокручивание страницы при открытом меню*/
            modal.style.opacity = '0';
            popUpInterval = requestAnimationFrame(popUpAnimation);
         }
      })
   });
   closeBtn.addEventListener('click', () => {

      //Проверка размера экрана
      if (window.screen.width < 768) {
         modal.style.display = 'none'
         body.style.overflow = 'auto'; /*запрещаем прокручивание страницы при открытом меню*/
      } else {
         modal.style.display = 'none'
         body.style.overflow = 'auto'; /*запрещаем прокручивание страницы при открытом меню*/
         end = 0;
         cancelAnimationFrame(popUpInterval);
      }
   })
}
export default modal