// Script específico para la página de registro
document.addEventListener('DOMContentLoaded', function() {
    const tipoMascotaSelect = document.getElementById('tipoMascota');
    const razaMascotaSelect = document.getElementById('razaMascota');
    const registroForm = document.getElementById('registroForm');
    const cancelRegisterButton = document.getElementById('cancelRegisterButton');
    const goToLoginButton = document.getElementById('goToLoginButton');
    const passwordInput = document.getElementById('password');
    const passwordStrengthBar = document.getElementById('passwordStrengthBar');
    const passwordStrengthText = document.getElementById('passwordStrengthText');
    
    // Función para evaluar la fortaleza de la contraseña
    function evaluatePasswordStrength(password) {
        // Si no hay contraseña, no mostrar nada
        if (!password) {
            passwordStrengthBar.className = 'password-strength-bar';
            passwordStrengthText.textContent = '';
            return;
        }
        
        // Criterios de evaluación
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;
        
        // Calcular puntuación
        let score = 0;
        if (hasLowerCase) score++;
        if (hasUpperCase) score++;
        if (hasNumbers) score++;
        if (hasSpecialChars) score++;
        if (isLongEnough) score++;
        
        // Determinar fortaleza basada en la puntuación
        if (score <= 2) {
            passwordStrengthBar.className = 'password-strength-bar weak';
            passwordStrengthText.textContent = 'Débil';
            passwordStrengthText.style.color = '#ef4444';
        } else if (score <= 4) {
            passwordStrengthBar.className = 'password-strength-bar medium';
            passwordStrengthText.textContent = 'Media';
            passwordStrengthText.style.color = '#f59e0b';
        } else {
            passwordStrengthBar.className = 'password-strength-bar strong';
            passwordStrengthText.textContent = 'Fuerte';
            passwordStrengthText.style.color = '#10b981';
        }
    }
    
    // Evento para evaluar la contraseña mientras se escribe
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            evaluatePasswordStrength(this.value);
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
        
    // Razas por tipo de mascota
    const razasPorTipo = {
        perro: [
            'Labrador Retriever',
            'Pastor Alemán',
            'Bulldog',
            'Golden Retriever',
            'Beagle',
            'Poodle',
            'Chihuahua',
            'Boxer',
            'Dálmata',
            'Husky Siberiano',
            'Otro'
        ],
        gato: [
            'Persa',
            'Siamés',
            'Maine Coon',
            'Bengalí',
            'Ragdoll',
            'Sphynx',
            'Angora',
            'Británico de Pelo Corto',
            'Abisinio',
            'Otro'
        ],
        ave: [
            'Canario',
            'Periquito',
            'Loro',
            'Cacatúa',
            'Agapornis',
            'Otro'
        ],
        pez: [
            'Goldfish',
            'Betta',
            'Guppy',
            'Tetra',
            'Otro'
        ],
        reptil: [
            'Tortuga',
            'Iguana',
            'Gecko',
            'Camaleón',
            'Serpiente',
            'Otro'
        ],
        roedor: [
            'Hámster',
            'Conejo',
            'Cobaya',
            'Ratón',
            'Chinchilla',
            'Otro'
        ],
        otro: ['No aplica']
    };
    
    // Función para cargar las razas según el tipo de mascota seleccionado
    function cargarRazas(tipo) {
        // Limpiar el select de razas
        razaMascotaSelect.innerHTML = '';
        
        // Agregar la opción por defecto
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = 'Tipo de raza';
        razaMascotaSelect.appendChild(defaultOption);
        
        // Si no hay tipo seleccionado, dejar el select de razas deshabilitado
        if (!tipo) {
            razaMascotaSelect.disabled = true;
            return;
        }
        
        // Habilitar el select de razas
        razaMascotaSelect.disabled = false;
        
        // Agregar las razas correspondientes al tipo seleccionado
        const razas = razasPorTipo[tipo] || [];
        razas.forEach(raza => {
            const option = document.createElement('option');
            option.value = raza.toLowerCase().replace(/\s+/g, '-');
            option.textContent = raza;
            razaMascotaSelect.appendChild(option);
        });
    }
    
    // Evento para cuando cambia el tipo de mascota
    if (tipoMascotaSelect) {
        tipoMascotaSelect.addEventListener('change', function() {
            cargarRazas(tipoMascotaSelect.value);
        });
        
        // Inicializar el formulario
        cargarRazas(tipoMascotaSelect.value);
    }
    
    // Manejar el envío del formulario
    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica de validación y registro
            // Por ahora, simplemente redirigimos al usuario a la página principal
            window.location.href = '../index.html';
        });
    }
    
    // Manejar botones de navegación
    if (cancelRegisterButton) {
        cancelRegisterButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }
    
    if (goToLoginButton) {
        goToLoginButton.addEventListener('click', function() {
            window.location.href = '../pages/login.html';
        });
    }
});
