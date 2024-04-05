import Splide from '@splidejs/splide';

new Splide('#slider1', {
  type: 'loop',
  focus: 'center',
  speed: 800,
  pagination: false,
  classes: {
    arrows: 'splide__arrows banner_arrows',
    arrow: 'splide__arrow banner_arrow',
  },
  breakpoints: {
    1439: {
      start: 5,
      arrows: false,
      perPage: 3,
      gap: 20,
      fixedWidth: 275,
      fixedHeight: 149,
      trimSpace: false,
    },
  },
}).mount();

new Splide('#slider3', {
  pagination: false,
  perPage: 5,
  gap: 20,
  arrows: true,

  breakpoints: {
    1439: {
      arrows: false,
      perPage: 2,
      gap: 32,
    },
  },
}).mount();
