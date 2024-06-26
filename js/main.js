let swiper = new Swiper(".gallery-swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
      el: ".gallery-pagination",
      type: "fraction"
  },
  navigation: {
      nextEl: ".gallery__btn-next",
      prevEl: ".gallery__btn-prev"
  },
  breakpoints: {
      500: {
          slidesPerView: 2,
          spaceBetween: 15,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 15,
      },
      950: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1250: {
          slidesPerView: 5,
          spaceBetween: 15,
      },
  },
});

(function() {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.scrollY > 50) {
			header.classList.add('header_active');
		}
		else {
			header.classList.remove('header_active');
		}
	};
}());

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight+50;
        let startPosition = window.scrollY;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());