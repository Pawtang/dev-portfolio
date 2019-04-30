const webRoot = 'document.getElementById("web-dev")';
const engRoot = 'document.getElementById("eng")';

document.getElementById("btn-eng").addEventListener('click', function() {
    toggleButton();
});

document.getElementById("btn-web").addEventListener('click', function(){
    toggleButton();
});

function toggleButton(){
    document.getElementById("btn-eng").classList.toggle('active');
    document.getElementById("btn-web").classList.toggle('active');
    document.getElementById("web-dev").classList.toggle('is-hidden');
    document.getElementById("eng").classList.toggle('is-hidden');
}