<?php
// Iniciar sesión para manejar la autenticación
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Mascota y Yo - Tu sitio de cuidado para mascotas</title>
    <link rel="stylesheet" href="css/styles.css">
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
                            <span class="notification-count" id="notificationCountBadge">3</span>
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
                    
                    <!-- Botón de Carrito -->
                    <div class="cart-container">
                        <button class="icon-button" id="cartButton">
                            <i data-feather="shopping-cart"></i>
                            <span class="sr-only">Carrito de compras</span>
                            <span class="cart-count" id="cartCountBadge">0</span>
                        </button>
                        
                        <!-- Bandeja del Carrito -->
                        <div class="cart-tray" id="cartTray">
                            <div class="cart-header">
                                <h3>Tu Carrito</h3>
                                <button class="close-cart-button" id="closeCartButton">
                                    <i data-feather="x"></i>
                                </button>
                            </div>
                            <div class="cart-content" id="cartContent">
                                <!-- Los items del carrito se cargarán dinámicamente -->
                                <div class="empty-cart-message" id="emptyCartMessage">
                                    <i data-feather="shopping-bag" class="empty-cart-icon"></i>
                                    <p>Tu carrito está vacío</p>
                                </div>
                            </div>
                            <div class="cart-footer">
                                <div class="cart-total">
                                    <span>Total:</span>
                                    <span id="cartTotal">$0.00</span>
                                </div>
                                <button class="checkout-button" id="checkoutButton" disabled>
                                    Proceder al pago
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Información del usuario logueado -->
                    <div class="user-profile-container" id="userProfileContainer" style="display: none;">
                        <button class="user-profile-button" id="userProfileButton">
                            <i data-feather="user"></i>
                        </button>
                        <div class="user-profile-dropdown" id="userProfileDropdown">
                            <div class="user-profile-header">
                                <h3 id="userFullNameDisplay"></h3>
                                <p id="userRoleDisplay"></p>
                            </div>
                            <div class="user-profile-actions">
                                <button class="profile-action-button" id="logoutButton">
                                    <i data-feather="log-out"></i>
                                    <span>Cerrar Sesión</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Botón de Registro -->
                    <button class="register-button" id="registerButton">
                        Registrarse
                    </button>
                    
                    <!-- Botón de Inicio de Sesión -->
                    <button class="login-button" id="loginButton">
                        Iniciar Sesión
                    </button>
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
                <button class="nav-button admin-panel-button" id="adminPanelButton" style="display: none;">
                    <i data-feather="users"></i>
                    <span>Gestión de Usuarios</span>
                </button>
            </nav>
        </div>
    </div>
    
    <!-- Navegación Móvil -->
    <div class="mobile-nav">
        <button class="nav-button-mobile">
            <i data-feather="shopping-bag"></i>
            <span>Tienda</span>
        </button>
        <button class="nav-button-mobile admin-panel-button" id="adminPanelButtonMobile" style="display: none;">
            <i data-feather="users"></i>
            <span>Gestión</span>
        </button>
    </div>
    
    <main>
        <!-- Banner para Consejos (estilo similar a Netflix) -->
        <section class="banner">
            <div class="banner-slides" id="bannerSlides">
                <!-- Slide 1 -->
                <div class="banner-slide active">
                    <div class="banner-image">
                        <img src="/Images/paginaPrincipal/alimentacionBalanceada.jpeg" alt="Alimentacion Balanceada">
                    </div>
                    <div class="banner-overlay"></div>
                    <div class="container">
                        <div class="banner-content">
                            <h2 class="banner-title">Alimentación Balanceada</h2>
                            <p class="banner-description">
                                Una dieta equilibrada es fundamental para la salud de tu mascota. Descubre qué alimentos son los más adecuados según la edad, tamaño y necesidades específicas de tu compañero.
                            </p>
                            <!-- Se han eliminado los botones "Ver consejos" y "Guardar" -->
                        </div>
                    </div>
                </div>
                
                <!-- Slide 2 -->
                <div class="banner-slide">
                    <div class="banner-image">
                        <img src="/Images/paginaPrincipal/Ejercicio de mascotas.jpg" alt="Ejercicio para mascotas">
                    </div>
                    <div class="banner-overlay"></div>
                    <div class="container">
                        <div class="banner-content">
                            <h2 class="banner-title">Ejercicio Diario</h2>
                            <p class="banner-description">
                                El ejercicio regular no solo mantiene a tu mascota en forma, sino que también estimula su mente y mejora su comportamiento. Aprende rutinas de ejercicio adaptadas a cada tipo de mascota.
                            </p>
                            <!-- Se han eliminado los botones "Ver consejos" y "Guardar" -->
                        </div>
                    </div>
                </div>
                
                <!-- Slide 3 -->
                <div class="banner-slide">
                    <div class="banner-image">
                        <img src="/Images/paginaPrincipal/Veterinaria.jpg" alt="Cuidado veterinario">
                    </div>
                    <div class="banner-overlay"></div>
                    <div class="container">
                        <div class="banner-content">
                            <h2 class="banner-title">Cuidado Veterinario</h2>
                            <p class="banner-description">
                                Las visitas regulares al veterinario son esenciales para prevenir enfermedades. Conoce cuándo debes llevar a tu mascota al veterinario y qué vacunas son necesarias según su edad.
                            </p>
                            <!-- Se han eliminado los botones "Ver consejos" y "Guardar" -->
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Controles del Banner -->
            <div class="banner-controls">
                <button class="banner-control" data-slide="0"></button>
                <button class="banner-control" data-slide="1"></button>
                <button class="banner-control" data-slide="2"></button>
            </div>
            
            <!-- Flechas de navegación -->
            <button class="banner-arrow banner-arrow-left" id="prevSlide">
                <i data-feather="chevron-left"></i>
            </button>
            <button class="banner-arrow banner-arrow-right" id="nextSlide">
                <i data-feather="chevron-right"></i>
            </button>
        </section>
        
        <!-- Productos Destacados -->
        <section class="container">
            <h2 class="section-title">Productos Destacados</h2>
            <div class="featured-products-grid" id="featuredProductsGrid">
                <!-- Los productos destacados se cargarán dinámicamente -->
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300" alt="Producto 1">
                        <div class="product-badge">Destacado</div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Collar Premium para Perros</h3>
                        <p class="product-price">$19.99</p>
                    </div>
                    <div class="product-actions">
                        <a href="pages/tienda.php" class="view-product-button">
                            <i data-feather="eye"></i> Ver producto
                        </a>
                    </div>
                </div>
                
                <div class="product-card highlighted">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300" alt="Producto 2">
                        <div class="product-badge">Destacado</div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Juguete Interactivo para Gatos</h3>
                        <p class="product-price"><span class="original-price">$24.99</span> $19.99</p>
                    </div>
                    <div class="product-actions">
                        <a href="pages/tienda.php" class="view-product-button">
                            <i data-feather="eye"></i> Ver producto
                        </a>
                    </div>
                </div>
                
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300" alt="Producto 3">
                        <div class="product-badge">Destacado</div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Alimento Premium Natural</h3>
                        <p class="product-price">$39.99</p>
                    </div>
                    <div class="product-actions">
                        <a href="pages/tienda.php" class="view-product-button">
                            <i data-feather="eye"></i> Ver producto
                        </a>
                    </div>
                </div>
            </div>
            <div class="view-all-products">
                <a href="pages/tienda.php" class="primary-button">
                    <i data-feather="shopping-bag"></i> Ver todos los productos
                </a>
            </div>
        </section>
        
        <!-- Desarrolladores -->
        <section class="container">
            <h2 class="section-title-dev">Desarrolladores</h2>
            <div class="developers-grid">
                <div class="developer-card">
                    <div class="developer-image">
                        <img src="https://via.placeholder.com/300" alt="Desarrollador 2">
                    </div>
                    <div class="developer-info">
                        <h3>Nikol Alejandra Lancheros</h3>
                        <p class="developer-role">Desarrolladora</p>
                        <p class="developer-description">Especialista en crear interfaces de usuario intuitivas y atractivas. Con más de 5 años de experiencia en desarrollo web.</p>
                    </div>
                </div>
                <div class="developer-card featured">
                    <div class="developer-image">
                        <img src="/Images/paginaPrincipal/Desarrollador Lider.jpg" alt="Desarrollador 1">
                    </div>
                    <div class="developer-info">
                        <h3>Javier Barreto</h3>
                        <p class="developer-role">Desarrollador Líder</p>
                        <p class="developer-description">Experto en arquitectura de sistemas y bases de datos. Apasionado por crear soluciones eficientes y escalables.</p>
                    </div>
                </div>
                <div class="developer-card">
                    <div class="developer-image">
                        <img src="" alt="Desarrollador 3">
                    </div>
                    <div class="developer-info">
                        <h3>Lina Parra</h3>
                        <p class="developer-role">Quality Assurance (QA)</p>
                        <p class="developer-description">Creativa y detallista, enfocada en mejorar la experiencia del usuario. Combina estética y funcionalidad en cada proyecto.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Mi Mascota y Yo - Todos los derechos reservados</p>
        </div>
    </footer>

    <script src="js/script.js"></script>
    <script src="js/index.js"></script>
</body>
</html>