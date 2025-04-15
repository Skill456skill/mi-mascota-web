// Script específico para la página de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cancelLoginButton = document.getElementById('cancelLoginButton');
    const goToRegisterButton = document.getElementById('goToRegisterButton');
    const passwordInput = document.getElementById('password');

    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica de validación y autenticación
            // Por ahora, simplemente redirigimos al usuario a la página principal
            window.location.href = '../index.html';
        });
    }
    
    if (cancelLoginButton) {
        cancelLoginButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }
    
    if (goToRegisterButton) {
        goToRegisterButton.addEventListener('click', function() {
            window.location.href = '../pages/registro.html';
        });
    }

    // JavaScript para el SVG personalizado
    const togglePasswordButton = document.getElementById('togglePassword');

    if (togglePasswordButton && passwordInput) {
        const eyeOpen = togglePasswordButton.querySelector('.eye-open');
        const eyeClosed = togglePasswordButton.querySelector('.eye-closed');
        
        togglePasswordButton.addEventListener('click', function() {
            if (passwordInput.getAttribute('type') === 'password') {
                // Mostrar contraseña
                passwordInput.setAttribute('type', 'text');
                eyeOpen.style.display = 'none';
                eyeClosed.style.display = 'block';
            } else {
                // Ocultar contraseña
                passwordInput.setAttribute('type', 'password');
                eyeOpen.style.display = 'block';
                eyeClosed.style.display = 'none';
            }
        });
    }
});


