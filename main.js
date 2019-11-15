const bookFlightBtn = document.querySelector('.book-flight');

const close = document.querySelector('.fa-times');

bookFlightBtn.addEventListener("click", function(){
    const overlay = document.querySelector('.form-overlay');
    overlay.classList.add('cover');
})

close.addEventListener('click', function(){
    const overlay = document.querySelector('.form-overlay');
    overlay.classList.remove('cover');
})