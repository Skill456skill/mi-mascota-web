<?php
// Iniciar sesión para manejar la autenticación
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda - Mi Mascota y Yo</title>
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/tienda.css">
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
                    
                    <!-- Botón de Carrito - SOLO VISIBLE PARA USUARIOS LOGUEADOS -->
                    <div class="cart-container" id="cartContainer" style="display: none;">
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
                                    <span id="cartTotal">$0</span>
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
                <button class="nav-button active" id="tiendaButton">
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
        <button class="nav-button-mobile active" id="tiendaButtonMobile">
            <i data-feather="shopping-bag"></i>
            <span>Tienda</span>
        </button>
        <button class="nav-button-mobile admin-panel-button" id="adminPanelButtonMobile" style="display: none;">
            <i data-feather="users"></i>
            <span>Gestión</span>
        </button>
    </div>
    
    <!-- Modal de Login Requerido -->
    <div class="modal" id="loginRequiredModal" style="display: none;">
        <div class="modal-content login-required-modal-content">
            <div class="modal-header">
                <h3>Iniciar Sesión Requerido</h3>
                <button class="close-modal-button" id="closeLoginRequiredModalButton">
                    <i data-feather="x"></i>
                </button>
            </div>
            <div class="modal-body login-required-modal-body">
                <div class="login-required-message">
                    <i data-feather="lock" class="login-required-icon"></i>
                    <p>Debes iniciar sesión para poder realizar compras y acceder al carrito de compras.</p>
                </div>
            </div>
            <div class="modal-footer login-required-modal-footer">
                <button class="secondary-button" id="cancelLoginRequiredButton">Cancelar</button>
                <button class="primary-button" id="goToLoginButton">Iniciar Sesión</button>
            </div>
        </div>
    </div>
    
    <main class="tienda-main">
        <div class="container">
            <!-- Barra de búsqueda -->
            <div class="search-container">
                <div class="search-input-wrapper">
                    <i data-feather="search" class="search-icon"></i>
                    <input type="text" class="search-input" id="searchInput" placeholder="Buscar productos">
                </div>
                <button class="search-button" id="searchButton">
                    <i data-feather="search"></i>
                    <span>Buscar</span>
                </button>
            </div>
            
            <!-- Contenido principal de la tienda -->
            <div class="tienda-content">
                <!-- Barra lateral de categorías -->
                <aside class="tienda-sidebar">
                    <h3 class="sidebar-title">Categorías</h3>
                    <ul class="category-list">
                        <li class="category-item active">
                            <a href="#" class="category-link" data-category="Todos los productos">Todos los productos</a>
                        </li>
                        <li class="category-item">
                            <a href="#" class="category-link" data-category="Alimentos">Alimentos</a>
                        </li>
                        <li class="category-item">
                            <a href="#" class="category-link" data-category="Accesorios">Accesorios</a>
                        </li>
                        <li class="category-item">
                            <a href="#" class="category-link" data-category="Juguetes">Juguetes</a>
                        </li>
                        <li class="category-item">
                            <a href="#" class="category-link" data-category="Higiene">Higiene</a>
                        </li>
                        <li class="category-item">
                            <a href="#" class="category-link" data-category="Salud">Salud</a>
                        </li>
                        <li class="category-item">
                            <a href="#" class="category-link" data-category="Camas y casas">Camas y casas</a>
                        </li>
                    </ul>
                    
                    <h3 class="sidebar-title">Filtrar por</h3>
                    <div class="filter-section">
                        <h4 class="filter-title">Precio</h4>
                        <div class="price-range">
                            <div class="price-inputs">
                                <div class="price-input-wrapper">
                                    <span class="price-currency">$</span>
                                    <input type="number" min="0" placeholder="Min" class="price-input" id="minPrice">
                                </div>
                                <span>-</span>
                                <div class="price-input-wrapper">
                                    <span class="price-currency">$</span>
                                    <input type="number" min="0" placeholder="Max" class="price-input" id="maxPrice">
                                </div>
                            </div>
                            <div class="price-currency-label">Precios en Pesos Colombianos (COP)</div>
                        </div>
                    </div>
                    
                    <div class="filter-section">
                        <h4 class="filter-title">Mascota</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" name="pet" value="perro"> Perro
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" name="pet" value="gato"> Gato
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" name="pet" value="ave"> Ave
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" name="pet" value="pez"> Pez
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" name="pet" value="reptil"> Reptil
                            </label>
                        </div>
                    </div>
                    
                    <div class="filter-section">
                        <h4 class="filter-title">Marca</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" name="brand" value="premium"> Premium Pet
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" name="brand" value="natural"> Natural Care
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" name="brand" value="happy"> Happy Pets
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" name="brand" value="royal"> Royal Canin
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" name="brand" value="purina"> Purina
                            </label>
                        </div>
                    </div>
                    
                    <button class="apply-filters-button" id="applyFiltersButton">Aplicar filtros</button>
                </aside>
                
                <!-- Productos -->
                <div class="products-container">
                    <!-- Producto destacado -->
                    <div class="featured-product" id="featuredProduct">
                        <div class="featured-product-image">
                            <img src="https://via.placeholder.com/500x300" alt="Producto destacado" id="featuredProductImage">
                        </div>
                        <div class="featured-product-info">
                            <h2 class="featured-product-title" id="featuredProductTitle">Alimento Premium para Perros</h2>
                            <p class="featured-product-description" id="featuredProductDescription">
                                Alimento balanceado de alta calidad para perros de todas las edades. Contiene todos los nutrientes esenciales para mantener a tu mascota saludable y feliz.
                            </p>
                            <div class="featured-product-price">
                                <span class="original-price" id="featuredProductOriginalPrice">$59.990</span>
                                <span class="current-price" id="featuredProductCurrentPrice">$49.990</span>
                            </div>
                            <div class="featured-product-actions">
                                <button class="secondary-button" id="featuredProductDetailsButton">Ver detalles</button>
                                <button class="primary-button" id="featuredProductAddToCartButton">
                                    <i data-feather="shopping-cart"></i> Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Sección de productos -->
                    <h3 class="products-section-title">Productos</h3>
                    <div class="products-grid" id="productsGrid">
                        <!-- Los productos se cargarán dinámicamente -->
                    </div>
                    
                    <!-- Mensaje de no resultados -->
                    <div class="no-results-message" id="noResultsMessage" style="display: none;">
                        <i data-feather="search" class="no-results-icon"></i>
                        <h3>No se encontraron productos</h3>
                        <p>Intenta con otra búsqueda o ajusta los filtros</p>
                    </div>
                    
                    <!-- Paginación -->
                    <div class="pagination" id="pagination">
                        <!-- La paginación se generará dinámicamente -->
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <!-- Modal de Pago -->
    <div class="modal" id="checkoutModal">
        <div class="modal-content checkout-modal-content">
            <div class="modal-header">
                <h3>Finalizar Compra</h3>
                <button class="close-modal-button" id="closeModalButton">
                    <i data-feather="x"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="checkout-form">
                    <div class="checkout-grid">
                        <div class="form-group">
                            <label for="fullName">Nombre completo</label>
                            <input type="text" id="fullName" class="form-input" placeholder="Ingresa tu nombre completo" data-type="text">
                            <span class="input-error-message" id="fullNameError">Solo se permiten letras y espacios</span>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo electrónico</label>
                            <input type="email" id="email" class="form-input" placeholder="Ingresa tu correo electrónico" data-type="email">
                            <span class="input-error-message" id="emailError">Formato de correo electrónico inválido</span>
                        </div>
                        <div class="form-group">
                            <label for="phone">Teléfono</label>
                            <input type="tel" id="phone" class="form-input" placeholder="Ingresa tu número de teléfono" data-type="phone">
                            <span class="input-error-message" id="phoneError">Solo se permiten números y caracteres + - ()</span>
                        </div>
                        <div class="form-group">
                            <label for="address">Dirección</label>
                            <input type="text" id="address" class="form-input" placeholder="Ingresa tu dirección" data-type="address">
                            <span class="input-error-message" id="addressError">La dirección debe tener al menos 5 caracteres</span>
                        </div>
                        <div class="form-group">
                            <label for="city">Ciudad</label>
                            <select id="city" class="form-input" data-type="select">
                                <option value="">Selecciona una ciudad</option>
                                <option value="Buenos Aires">Buenos Aires, Argentina</option>
                                <option value="La Paz">La Paz, Bolivia</option>
                                <option value="Sao Paulo">Sao Paulo, Brasil</option>
                                <option value="Santiago">Santiago, Chile</option>
                                <option value="Bogotá">Bogotá, Colombia</option>
                                <option value="San José">San José, Costa Rica</option>
                                <option value="La Habana">La Habana, Cuba</option>
                                <option value="Quito">Quito, Ecuador</option>
                                <option value="San Salvador">San Salvador, El Salvador</option>
                                <option value="Guatemala">Ciudad de Guatemala, Guatemala</option>
                                <option value="Tegucigalpa">Tegucigalpa, Honduras</option>
                                <option value="Ciudad de México">Ciudad de México, México</option>
                                <option value="Managua">Managua, Nicaragua</option>
                                <option value="Panamá">Ciudad de Panamá, Panamá</option>
                                <option value="Asunción">Asunción, Paraguay</option>
                                <option value="Lima">Lima, Perú</option>
                                <option value="Santo Domingo">Santo Domingo, República Dominicana</option>
                                <option value="Montevideo">Montevideo, Uruguay</option>
                                <option value="Caracas">Caracas, Venezuela</option>
                            </select>
                            <span class="input-error-message" id="cityError">Debes seleccionar una ciudad</span>
                        </div>
                        <div class="form-group">
                            <label for="cardNumber">Número de tarjeta</label>
                            <input type="text" id="cardNumber" class="form-input" placeholder="XXXX XXXX XXXX XXXX" data-type="card">
                            <span class="input-error-message" id="cardNumberError">Formato de tarjeta inválido</span>
                        </div>
                        <div class="form-group">
                            <label for="expiryDate">Fecha de expiración</label>
                            <input type="text" id="expiryDate" class="form-input" placeholder="MM/AA" data-type="expiry">
                            <span class="input-error-message" id="expiryDateError">Formato debe ser MM/AA</span>
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" class="form-input" placeholder="XXX" data-type="cvv">
                            <span class="input-error-message" id="cvvError">El CVV debe tener 3 o 4 dígitos</span>
                        </div>
                    </div>
                    
                    <div class="checkout-summary">
                        <h4>Resumen de la Compra</h4>
                        <div class="checkout-items" id="checkoutItems">
                            <!-- Los items se cargarán dinámicamente -->
                        </div>
                        <div class="checkout-total">
                            <div class="checkout-subtotal">
                                <span>Subtotal:</span>
                                <span id="checkoutSubtotal">$0</span>
                            </div>
                            <div class="checkout-shipping">
                                <span>Envío:</span>
                                <span id="checkoutShipping">$5.000</span>
                            </div>
                            <div class="checkout-total-amount">
                                <span>Total:</span>
                                <span id="checkoutTotal">$0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="secondary-button" id="cancelCheckoutButton">Cancelar</button>
                <button class="primary-button" id="completeCheckoutButton">Completar Compra</button>
            </div>
        </div>
    </div>
    
    <!-- Modal de Producto -->
    <div class="modal" id="productModal">
        <div class="modal-content product-modal-content">
            <div class="modal-header">
                <h3 id="productModalTitle">Detalles del Producto</h3>
                <button class="close-modal-button" id="closeProductModalButton">
                    <i data-feather="x"></i>
                </button>
            </div>
            <div class="modal-body product-modal-body">
                <div class="product-modal-grid">
                    <div class="product-modal-image">
                        <img src="/placeholder.svg" alt="Imagen del producto" id="productModalImage">
                    </div>
                    <div class="product-modal-details">
                        <h2 class="product-modal-name" id="productModalName"></h2>
                        <p class="product-modal-description" id="productModalDescription"></p>
                        
                        <!-- Mover el selector de cantidad arriba del precio -->
                        <div class="product-modal-quantity">
                            <label for="productQuantity">Cantidad:</label>
                            <div class="quantity-selector">
                                <button class="quantity-button decrease" id="decreaseQuantity">-</button>
                                <input type="number" id="productQuantity" value="1" min="1" max="10">
                                <button class="quantity-button increase" id="increaseQuantity">+</button>
                            </div>
                        </div>
                        
                        <!-- Precio que se actualizará según la cantidad -->
                        <div class="product-modal-price">
                            <div class="price-per-unit">
                                <span class="price-label">Precio unitario:</span>
                                <span class="original-price" id="productModalOriginalPrice"></span>
                                <span class="current-price" id="productModalUnitPrice"></span>
                            </div>
                            <div class="price-total">
                                <span class="price-label">Subtotal:</span>
                                <span class="current-price" id="productModalSubtotal"></span>
                            </div>
                            <div class="shipping-info">
                                <span class="price-label">Envío:</span>
                                <span class="shipping-price">$5.000</span>
                            </div>
                            <div class="price-total">
                                <span class="price-label">Total con envío:</span>
                                <span class="current-price" id="productModalCurrentPrice"></span>
                            </div>
                        </div>
                        
                        <!-- Aviso de costo de envío -->
                        <div class="shipping-notice">
                            <i data-feather="truck" class="shipping-icon"></i>
                            <p>Por cada pedido se cobrará un costo de envío de $5.000 COP</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer product-modal-footer">
                <button class="secondary-button" id="continueShoppingButton">Continuar comprando</button>
                <button class="primary-button" id="proceedToCheckoutButton">
                    <i data-feather="shopping-cart"></i> Proceder al pago
                </button>
            </div>
        </div>
    </div>
    
    <div class="modal" id="errorModal">
        <div class="modal-content error-modal-content">
            <div class="modal-header">
                <h3>Error</h3>
                <button class="close-modal-button" id="closeErrorModalButton">
                    <i data-feather="x"></i>
                </button>
            </div>
            <div class="modal-body error-modal-body">
                <div class="error-message">
                    <i data-feather="alert-circle" class="error-icon"></i>
                    <p>Hay campos incompletos. Por favor, complete todos los campos requeridos.</p>
                </div>
            </div>
            <div class="modal-footer error-modal-footer">
                <button class="primary-button" id="acceptErrorButton">Aceptar</button>
            </div>
        </div>
    </div>
    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Mi Mascota y Yo - Todos los derechos reservados</p>
        </div>
    </footer>

    <script src="../js/script.js"></script>
    <script src="../js/tienda.js"></script>
</body>
</html>