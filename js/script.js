// Script principal para todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar los iconos de Feather
    feather.replace();
    
    // Manejar la bandeja de notificaciones
    const notificationButton = document.getElementById('notificationButton');
    const closeNotificationArrow = document.querySelector('.close-notification-arrow');
    const notificationTray = document.getElementById('notificationTray');
    
    if (notificationButton && notificationTray) {
        notificationButton.addEventListener('click', function() {
            notificationTray.classList.toggle('active');
        });
    }
    
    if (closeNotificationArrow && notificationTray) {
        closeNotificationArrow.addEventListener('click', function() {
            notificationTray.classList.remove('active');
        });
    }
    
    // Cerrar la bandeja de notificaciones al hacer clic fuera de ella
    document.addEventListener('click', function(event) {
        if (notificationTray && notificationButton) {
            const isClickInside = notificationTray.contains(event.target) || notificationButton.contains(event.target);
            if (!isClickInside && notificationTray.classList.contains('active')) {
                notificationTray.classList.remove('active');
            }
        }
    });
    
    // Manejar el carrusel del banner
    const bannerSlides = document.getElementById('bannerSlides');
    const prevSlideButton = document.getElementById('prevSlide');
    const nextSlideButton = document.getElementById('nextSlide');
    const bannerControls = document.querySelectorAll('.banner-control');
    
    if (bannerSlides) {
        const slides = bannerSlides.querySelectorAll('.banner-slide');
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            bannerControls.forEach(control => control.classList.remove('active'));
            
            slides[index].classList.add('active');
            bannerControls[index].classList.add('active');
            currentSlide = index;
        }
        
        if (prevSlideButton) {
            prevSlideButton.addEventListener('click', function() {
                let newIndex = currentSlide - 1;
                if (newIndex < 0) newIndex = slides.length - 1;
                showSlide(newIndex);
            });
        }
        
        if (nextSlideButton) {
            nextSlideButton.addEventListener('click', function() {
                let newIndex = currentSlide + 1;
                if (newIndex >= slides.length) newIndex = 0;
                showSlide(newIndex);
            });
        }
        
        bannerControls.forEach((control, index) => {
            control.addEventListener('click', function() {
                showSlide(index);
            });
        });
        
        // Inicializar el primer slide como activo
        showSlide(0);
        
        // Cambiar automáticamente los slides cada 7 segundos
        setInterval(function() {
            let newIndex = currentSlide + 1;
            if (newIndex >= slides.length) newIndex = 0;
            showSlide(newIndex);
        }, 7000);
    }
    
    // Manejar redirecciones desde la página principal
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const cartButton = document.getElementById('cartButton');
    
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            window.location.href = 'pages/registro.html';
        });
    }
    
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'pages/login.html';
        });
    }
    
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            // Redirigir a la página de tienda
            window.location.href = 'pages/tienda.html';
        });
    }
});