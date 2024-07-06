document.addEventListener("DOMContentLoaded", function() {


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    //Função para inicializar o Particles.js
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'json/particlesjs.json', function() {
    console.log('callback - particlesJS.js config loaded');
  });

    // Função para Inicializar o AOS
    document.addEventListener("DOMContentLoaded", function() {
        AOS.init();
    });
    


    // Função para mostrar a seção correspondente ao menu clicado
    const menuItems = document.querySelectorAll('.menu-item a');
    const sections = document.querySelectorAll('main > section');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            
            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            menuItems.forEach(menu => {
                menu.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

    // Mostrar a primeira seção por padrão
    if (sections.length > 0) {
        sections[0].classList.add('active');
        menuItems[0].classList.add('active');
    }
});
