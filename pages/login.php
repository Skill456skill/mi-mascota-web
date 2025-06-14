<?php
// Iniciar sesión para manejar la autenticación
session_start();

// Redirigir si ya está logueado
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    header("location: ../index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión - Mi Mascota y Yo</title>
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/login.css">
    <!-- Fuente Inter de Google -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Iconos de Feather -->
    <script src="https://unpkg.com/feather-icons"></script>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <!-- Logo y Nombre del Sitio -->
                <div class="logo-container" id="logoHome">
                    <div class="logo-circle">
                        <img src="/Images/Logotipo.jpg" alt="Mi Mascota y Yo Logo">
                    </div>
                    <div class="site-name">
                        <h1>Mi Mascota y Yo</h1>
                    </div>
                </div>
                
                <!-- Acciones de Usuario -->
                <div class="user-actions">
                    <!-- Botón de Notificaciones -->
                    <div class="notification-container">
                        <button class="icon-button" id="notificationButton">
                            <i data-feather="bell"></i>
                            <span class="sr-only">Notificaciones</span>
                        </button>
                        
                        <!-- Bandeja de Notificaciones -->
                        <div class="notification-tray" id="notificationTray">
                            <div class="notification-header">
                                <h3>Notificaciones</h3>
                            </div>
                            <div class="notification-content">
                                <div class="notification-item">
                                    <div class="notification-icon">🐾</div>
                                    <div class="notification-text">
                                        <p class="notification-title">Nuevos consejos disponibles</p>
                                        <p class="notification-time">Hace 2 horas</p>
                                    </div>
                                </div>
                                <div class="notification-item">
                                    <div class="notification-icon">🏥</div>
                                    <div class="notification-text">
                                        <p class="notification-title">Recordatorio de vacunación</p>
                                        <p class="notification-time">Hace 1 día</p>
                                    </div>
                                </div>
                                <div class="notification-item">
                                    <div class="notification-icon">🛍️</div>
                                    <div class="notification-text">
                                        <p class="notification-title">Nuevos productos en la tienda</p>
                                        <p class="notification-time">Hace 3 días</p>
                                    </div>
                                </div>
                            </div>
                            <div class="notification-footer">
                                <div class="close-notification-arrow">
                                    <i data-feather="chevron-up"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <!-- Navegación Principal (debajo del header) -->
    <div class="main-nav-container">
        <div class="container">
            <nav class="main-nav">
                <button class="nav-button">
                    <i data-feather="shopping-bag"></i>
                    <span>Tienda</span>
                </button>
            </nav>
        </div>
    </div>
    
    <main class="login-main">
        <div class="login-container">
            <div class="login-logo">
                <div class="logo-circle large">
                    <img src="https://via.placeholder.com/120" alt="Mi Mascota y Yo Logo">
                </div>
            </div>
            
            <form class="login-form" id="loginForm">
                <div class="form-group">
                    <input type="text" id="username" class="form-input" placeholder="Nombre de usuario">
                </div>
                <div class="form-group">
                    <div class="password-input-container">
                        <input type="password" id="password" class="form-input" placeholder="Contraseña">
                        <!-- Reemplazar el botón en registro.html y login.html -->
                        <button type="button" id="togglePassword" class="toggle-password-btn">
                            <svg class="eye-icon eye-open" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5C7.45455 5 3.57273 7.90909 2 12C3.57273 16.0909 7.45455 19 12 19C16.5455 19 20.4273 16.0909 22 12C20.4273 7.90909 16.5455 5 12 5Z" fill="#333333"/>
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"/>
                            </svg>
                            <svg class="eye-icon eye-closed" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                <path d="M12 5C7.45455 5 3.57273 7.90909 2 12C3.57273 16.0909 7.45455 19 12 19C16.5455 19 20.4273 16.0909 22 12C20.4273 7.90909 16.5455 5 12 5Z" fill="#333333"/>
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"/>
                                <line x1="4" y1="4" x2="20" y2="20" stroke="#333333" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>    
                <div class="login-buttons">
                    <button type="button" class="secondary-button" id="cancelLoginButton">Cancelar</button>
                    <button type="submit" class="primary-button">Iniciar Sesión</button>
                </div>
                <div class="login-links">
                    <button type="button" class="link-button" id="goToRegisterButton">¿No tienes cuenta? <br> Regístrate</button>
                    <button type="button" class="link-button">¿Olvidaste tu contraseña?</button>
                </div>
            </form>
        </div>
    </main>
    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Mi Mascota y Yo - Todos los derechos reservados</p>
        </div>
    </footer>

    <script src="../js/script.js"></script>
    <script src="../js/login.js"></script>
</body>
</html>