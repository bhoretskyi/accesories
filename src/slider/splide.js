import Splide from '@splidejs/splide';

new Splide('#slider1', {
  type   : 'loop',
  focus: 'center',

  speed: 800,
  arrows: false,
  pagination: false,
  trimSpace: false,
  fixedWidth: 275,
  gap: 20,
}).mount();

new Splide('#slider2', {
  perPage: 1,
  perMove: 1,
  start: 1,

  speed: 500,
  width: '100%',
  rewind: true,
  pagination: false,
  focus: 'center',
}).mount();
