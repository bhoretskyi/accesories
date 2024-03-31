import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide',  {
        type   : 'loop',
        padding: '20%',
      }).mount();
});  