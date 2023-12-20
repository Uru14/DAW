document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var covers = document.querySelectorAll('.div8, .div9, .div10, .div11, .div12, .div13, .div14');

    navLinks.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Elimina la clase 'active' de todas las portadas
            covers.forEach(function (cover) {
                cover.classList.remove('active');
            });

            // Agrega la clase 'active' a la portada correspondiente
            covers[index].classList.add('active');
        });
    });
});