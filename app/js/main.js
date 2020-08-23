let mySwiper = new Swiper('.swiper-container', {
  speed: 800,
  initialSlide: 0,
  slideToClickedSlide: true,
  spaceBetween: 60,
  slidesPerView: 4,
  waitForTransition: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    clickable: true,
  },
});

// const swiperSlide = document.getElementsByClassName('swiper-slide');//  вохвращаю HTMLCollection нтмл колекция похожа на масив но не масив, не может использовать методы push/pop shift/unshift, forEach, map, и других.;
// console.log(swiperSlide);// HTMLCollection вывожу в консоль 
// // console.log(swiperSlide[3]);// див с классом swiper-slide которому первому даётся swiper-slide-prev.
// for (let i = 0; i < swiperSlide.length; i++) { // количевство итераций равен длинне HTMLCollection - 1 потому что длинна 'length' это количевство елементов и счёт ведут с 1, а в масиве счёт индексов 'i' начинаеться с 0;
//   if (swiperSlide[i].classList.contains('swiper-slide-prev')) { // при каждой итерации проверяем каждый елемент масива а значит и каждый div с классом swiper-slide на наличии еще одного класса в нутри swiper-slide-prev
//     // console.log(swiperSlide[i]); //если 'true' правда то вывожу в консоль див с классом swiper-slide которому первому даётся класс swiper-slide-prev
//       // console.log('red');// если 'true' правда то вывожу в консоль 'red' для проверки 
//     const swiperSlidePrev = swiperSlide[i] // константа для прощего понимания
//     console.log(swiperSlidePrev);// проверяю и вывожу swiperSlidePrev в консоль
//     for (let k = 0; k < swiperSlidePrev.childNodes.length; k++) { // повторяю итерацию столько раз сколько в swiperSlidePrev детей - 1
//         // console.log(swiperSlide[i].childNodes.length); // количевство вложенных елементов 
//       if (swiperSlidePrev.classList.contains('swiper-slide__img')) { // по условию хочу найти 
//         console.log('blue');// если 'true' правда то вывожу в консоль 'blue' для проверки
//         }
//       }
//     }
//   }




const swiperSlide = document.getElementsByClassName('swiper-slide');
console.log(swiperSlide);
function searchUrl() {
  for (let i = 0; i < swiperSlide.length; i++) {
    if (swiperSlide[i].classList.contains('swiper-slide-prev')) {
      const swiperSlideImg = swiperSlide[i].lastElementChild;
      console.log(swiperSlideImg);
      if (swiperSlideImg.classList.contains('swiper-slide__img')) {
        const srcImg = swiperSlideImg.getAttribute("src");
        console.log(srcImg);
        return srcImg
      }
      else {
        console.log('ты еблан думать нада');
      }
    }
  }
}
searchUrl()
const headerBg = document.querySelector('.header__bg');
function chengeBackgraund() {
  headerBg.style.backgroundImage = `url(${searchUrl()})`;
};
chengeBackgraund()


swiperSlide.addEventListener('chenge',{
  handleEvent: function (event) {
    alert('Событие вызвал handleEvent!');
  } 
})
