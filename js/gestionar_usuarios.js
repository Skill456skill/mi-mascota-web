// Script para la gestión de usuarios
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado - Inicializando script de gestión de usuarios");

    // Referencias a elementos del DOM
    const userTable = document.getElementById("userTable");
    const userTableBody = document.getElementById("userTableBody");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const noUsersMessage = document.getElementById("noUsersMessage");
    const successAlert = document.getElementById("successAlert");
    const errorAlert = document.getElementById("errorAlert");
    const searchInput = document.getElementById("searchUsers");

    // Referencias al modal de añadir/editar usuario
    const userModal = document.getElementById("userModal");
    const modalTitle = document.getElementById("modalTitle");
    const userForm = document.getElementById("userForm");
    const userId = document.getElementById("userId");
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const userPassword = document.getElementById("userPassword");
    const userRole = document.getElementById("userRole");
    const userCargo = document.getElementById("userCargo");
    const passwordHelp = document.getElementById("passwordHelp");
    const addUserBtn = document.getElementById("addUserBtn");
    const closeModal = document.getElementById("closeModal");
    const cancelBtn = document.getElementById("cancelBtn");

    // Referencias al modal de confirmación de eliminación
    const deleteModal = document.getElementById("deleteModal");
    const deleteUserId = document.getElementById("deleteUserId");
    const closeDeleteModal = document.getElementById("closeDeleteModal");
    const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");
    const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

    // Cargar usuarios al iniciar la página
    loadUsers();

    // Función para mostrar alertas
    function showAlert(type, message) {
        const alert = type === 'success' ? successAlert : errorAlert;
        alert.textContent = message;
        alert.style.display = 'block';
        
        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);
    }

    // Función para cargar usuarios desde la base de datos
    function loadUsers() {
        loadingSpinner.style.display = 'block';
        userTable.style.display = 'none';
        noUsersMessage.style.display = 'none';
        
        fetch('../config/usuarios_crud.php?action=read')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }
                return response.json();
            })
            .then(data => {
                loadingSpinner.style.display = 'none';
                
                if (data.success && data.users && data.users.length > 0) {
                    renderUsers(data.users);
                    userTable.style.display = 'table';
                } else {
                    noUsersMessage.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error al cargar usuarios:', error);
                loadingSpinner.style.display = 'none';
                noUsersMessage.style.display = 'block';
                showAlert('error', 'Error al cargar usuarios: ' + error.message);
            });
    }

    // Función para renderizar usuarios en la tabla
    function renderUsers(users) {
        userTableBody.innerHTML = '';
        
        users.forEach(user => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nombre}</td>
                <td>${user.email}</td>
                <td>${user.rol === 'admin' ? 'Administrador' : 'Usuario'}</td>
                <td>${user.cargo || '-'}</td>
                <td class="user-actions">
                    <button class="user-action-btn edit-btn" data-id="${user.id}">
                        <i data-feather="edit"></i>
                    </button>
                    <button class="user-action-btn delete-btn" data-id="${user.id}">
                        <i data-feather="trash-2"></i>
                    </button>
                </td>
            `;
            
            userTableBody.appendChild(row);
        });
        
        // Reinicializar los iconos de Feather
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
        
        // Añadir event listeners a los botones de editar y eliminar
        addActionButtonListeners();
    }

    // Función para añadir event listeners a los botones de acción
    function addActionButtonListeners() {
        // Botones de editar
        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                openEditModal(userId);
            });
        });
        
        // Botones de eliminar
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                openDeleteModal(userId);
            });
        });
    }

    // Función para abrir el modal de edición
    function openEditModal(id) {
        modalTitle.textContent = 'Editar Usuario';
        passwordHelp.style.display = 'block';
        
        // Cargar datos del usuario
        fetch(`../config/usuarios_crud.php?action=get&id=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }
                return response.json();
            })
            .then(data => {
                if (data.success && data.user) {
                    const user = data.user;
                    
                    userId.value = user.id;
                    userName.value = user.nombre;
                    userEmail.value = user.email;
                    userPassword.value = ''; // No mostrar la contraseña actual
                    userRole.value = user.rol;
                    userCargo.value = user.cargo || '';
                    
                    userModal.style.display = 'flex';
                } else {
                    showAlert('error', 'Error al cargar datos del usuario');
                }
            })
            .catch(error => {
                console.error('Error al obtener usuario:', error);
                showAlert('error', 'Error al cargar datos del usuario: ' + error.message);
            });
    }

    // Función para abrir el modal de eliminación
    function openDeleteModal(id) {
        deleteUserId.value = id;
        deleteModal.style.display = 'flex';
    }

    // Event listener para el botón de añadir usuario
    if (addUserBtn) {
        addUserBtn.addEventListener('click', () => {
            // Resetear el formulario
            userForm.reset();
            userId.value = '';
            modalTitle.textContent = 'Añadir Usuario';
            passwordHelp.style.display = 'none';
            userModal.style.display = 'flex';
        });
    }

    // Event listeners para cerrar modales
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            userModal.style.display = 'none';
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            userModal.style.display = 'none';
        });
    }

    if (closeDeleteModal) {
        closeDeleteModal.addEventListener('click', () => {
            deleteModal.style.display = 'none';
        });
    }

    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', () => {
            deleteModal.style.display = 'none';
        });
    }

    // Event listener para el formulario de usuario
    if (userForm) {
        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const isEditing = userId.value !== '';
            
            formData.append('action', isEditing ? 'update' : 'create');
            
            fetch('../config/usuarios_crud.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    userModal.style.display = 'none';
                    showAlert('success', isEditing ? 'Usuario actualizado correctamente' : 'Usuario creado correctamente');
                    loadUsers(); // Recargar la lista de usuarios
                } else {
                    showAlert('error', data.message || 'Error al procesar la solicitud');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showAlert('error', 'Error al procesar la solicitud: ' + error.message);
            });
        });
    }

    // Event listener para confirmar eliminación de usuario
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
            const id = deleteUserId.value;
            
            fetch('../config/usuarios_crud.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `action=delete&id=${id}`
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }
                return response.json();
            })
            .then(data => {
                deleteModal.style.display = 'none';
                
                if (data.success) {
                    showAlert('success', 'Usuario eliminado correctamente');
                    loadUsers(); // Recargar la lista de usuarios
                } else {
                    showAlert('error', data.message || 'Error al eliminar el usuario');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                deleteModal.style.display = 'none';
                showAlert('error', 'Error al eliminar el usuario: ' + error.message);
            });
        });
    }

    // Event listener para el buscador de usuarios
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            const rows = userTableBody.querySelectorAll('tr');
            
            rows.forEach(row => {
                const name = row.cells[1].textContent.toLowerCase();
                const email = row.cells[2].textContent.toLowerCase();
                
                if (name.includes(searchTerm) || email.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Cerrar modales al hacer clic fuera de ellos
    window.addEventListener('click', function(event) {
        if (event.target === userModal) {
            userModal.style.display = 'none';
        }
        
        if (event.target === deleteModal) {
            deleteModal.style.display = 'none';
        }
    });
});