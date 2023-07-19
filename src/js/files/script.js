import { isMobile } from "./functions.js";
import Swiper from "swiper";

window.onload = function(){
	const swiperImage = new Swiper('.body-swiper', {
		loop: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		speed: 2000,
		preloadImages: false,
		parallax: true,
		pallowTouchMove:false,
	 });
	 


	 const swiperTex = new Swiper('.main__nav', {
		loop: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		speed: 2000,
		preloadImages: false,
		parallax: true,
		breakpoints: {
			// when window width is >= 320px
			310:{
				slidesPerView: 2,
			},
			420: {
			  slidesPerView: 3,
			},
			// // when window width is >= 480px
			570: {
			  slidesPerView: 4,
			},
			// when window width is >= 640px
			760: {
			  slidesPerView: 5
			}
		 }
	 });


	 const titleTub =document.querySelectorAll('.nav__item');

	 for(let item of titleTub){
		item.addEventListener("click", function(e) {
			titleTub.forEach(el => el.classList.remove('active-tab'))
			item.classList.add('active-tab')
		});
	}


	 for(let i = 0, lgt = titleTub.length; i < lgt; i++) { 
		titleTub[i].onclick = function(e) { 
			e.preventDefault()
			 var titleTubGetData = titleTub[i].getAttribute('data-slide');
			 swiperImage.slideTo(titleTubGetData, 2000);   
  
		}
  }
	 
}