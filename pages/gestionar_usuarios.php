<?php
// Iniciar sesión para manejar la autenticación
session_start();

// Verificar si el usuario está autenticado y es administrador
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true || $_SESSION["rol"] !== "admin") {
    header("location: ../index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Usuarios - Mi Mascota y Yo</title>
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/gestionar_usuarios.css">
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
                <button class="nav-button admin-panel-button active" id="adminPanelButton" style="display: none;">
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
        <button class="nav-button-mobile admin-panel-button active" id="adminPanelButtonMobile" style="display: none;">
            <i data-feather="users"></i>
            <span>Gestión</span>
        </button>
    </div>
    
    <main>
        <section class="admin-panel">
            <div class="container">
                <!-- Alertas para mostrar mensajes de éxito o error -->
                <div class="alert alert-success" id="successAlert"></div>
                <div class="alert alert-danger" id="errorAlert"></div>
                
                <div class="admin-header">
                    <h2 class="admin-title">Gestión de Usuarios</h2>
                    <div class="admin-actions">
                        <button class="primary-button" id="addUserBtn">
                            <i data-feather="user-plus"></i> Añadir Usuario
                        </button>
                    </div>
                </div>
                
                <!-- Buscador de usuarios -->
                <div class="search-container">
                    <input type="text" class="search-input" id="searchUsers" placeholder="Buscar usuarios...">
                </div>
                
                <!-- Spinner de carga -->
                <div class="loading-spinner" id="loadingSpinner">
                    <div class="spinner"></div>
                    <p>Cargando usuarios...</p>
                </div>
                
                <!-- Mensaje cuando no hay usuarios -->
                <div class="no-users-message" id="noUsersMessage">
                    <p>No se encontraron usuarios en la base de datos.</p>
                </div>
                
                <!-- Tabla de usuarios -->
                <table class="user-table" id="userTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Cargo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="userTableBody">
                        <!-- Los usuarios se cargarán dinámicamente aquí -->
                    </tbody>
                </table>
            </div>
        </section>
        
        <!-- Modal para añadir/editar usuario -->
        <div class="modal" id="userModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="modalTitle">Añadir Usuario</h3>
                    <button class="close-modal" id="closeModal">&times;</button>
                </div>
                <form id="userForm">
                    <input type="hidden" id="userId" name="id">
                    
                    <div class="form-group">
                        <label for="userName" class="form-label">Nombre</label>
                        <input type="text" id="userName" name="nombre" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="userEmail" class="form-label">Email</label>
                        <input type="email" id="userEmail" name="email" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="userPassword" class="form-label">Contraseña</label>
                        <input type="password" id="userPassword" name="password" class="form-input">
                        <small id="passwordHelp">Dejar en blanco para mantener la contraseña actual (solo al editar)</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="userRole" class="form-label">Rol</label>
                        <select id="userRole" name="rol" class="form-select" required>
                            <option value="user">Usuario</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="userCargo" class="form-label">Cargo</label>
                        <input type="text" id="userCargo" name="cargo" class="form-input">
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="cancel-btn" id="cancelBtn">Cancelar</button>
                        <button type="submit" class="submit-btn">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
        
        <!-- Modal de confirmación para eliminar usuario -->
        <div class="modal" id="deleteModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Confirmar Eliminación</h3>
                    <button class="close-modal" id="closeDeleteModal">&times;</button>
                </div>
                <p>¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.</p>
                <input type="hidden" id="deleteUserId">
                <div class="form-actions">
                    <button type="button" class="cancel-btn" id="cancelDeleteBtn">Cancelar</button>
                    <button type="button" class="submit-btn" id="confirmDeleteBtn">Eliminar</button>
                </div>
            </div>
        </div>
    </main>
    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Mi Mascota y Yo - Todos los derechos reservados</p>
        </div>
    </footer>

    <script src="../js/script.js"></script>
    <script src="../js/gestionar_usuarios.js"></script>
</body>
</html>