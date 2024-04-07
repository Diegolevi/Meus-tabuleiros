var btn = document.querySelector('#botao');
var projeto1 = document.querySelector('.projeto1');

btn.addEventListener('click', function() {
    if(projeto1.style.display === 'block') {
        projeto1.style.display = 'none';
    } else {
        projeto1.style.display = 'block'
    }
})