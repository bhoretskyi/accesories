let modal = document.getElementById('modal');
let openModalBtns = document.querySelectorAll('.openModalImg');
let closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modal.style.display = 'block';

    });
});
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}); 
