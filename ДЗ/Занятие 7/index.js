
document.body.onload = function() {
    alert('Body Загрузился ');
}




window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        alert("Вы проскролили страницу");
    }
}; 