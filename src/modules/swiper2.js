const swiper2 = () => {
   const swiper = new Swiper('.swiper2', {
      // navigation: {
      //    nextEl: '.benefits__arrow--right',
      //    prevEl: '.benefits__arrow--left',
      // },
      grabCursor: true,
      loop: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      breakpoints: {

         // Если ширина окна больше или равна 576px
         576: {
            slidesPerView: 3,
            spaceBetween: 5
         }
      }
   });
};
export default swiper2