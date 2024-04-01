import Splide from '@splidejs/splide';

new Splide('#slider1', {
  speed: 800,
  arrows: false,
  pagination: false,
  rewind: true,

  trimSpace: false,

  fixedWidth: 275,
  gap: 20,
  focus: 'center',
  perPage: 3,
}).mount();

new Splide('#slider2', {
  perPage: 1,
  perMove: 1,
  start: 1,

  speed: 500,
  width: '100%',
  rewind: true,
  pagination: false,
  // focus: 'center',
}).mount();
