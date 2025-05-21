// Script específico para la página de login
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")
  const passwordInput = document.getElementById("password")
  const cancelLoginButton = document.getElementById("cancelLoginButton")
  const goToRegisterButton = document.getElementById("goToRegisterButton")
  
  // Crear el modal
  createModal()
  
  // Función para crear el modal
  function createModal() {
    // Crear elementos del modal
    const modalOverlay = document.createElement("div")
    modalOverlay.className = "modal-overlay"
    modalOverlay.id = "messageModal"
  
    const modalContainer = document.createElement("div")
    modalContainer.className = "modal-container"
  
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
  
    const modalIcon = document.createElement("span")
    modalIcon.className = "modal-icon"
    modalIcon.id = "modalIcon"
    modalIcon.innerHTML = "⚠️"
  
    const modalTitle = document.createElement("h3")
    modalTitle.id = "modalTitle"
    modalTitle.textContent = "Error"
  
    const modalContent = document.createElement("div")
    modalContent.className = "modal-content"
  
    const modalMessage = document.createElement("p")
    modalMessage.id = "modalMessage"
  
    const modalFooter = document.createElement("div")
    modalFooter.className = "modal-footer"
  
    const modalButtons = document.createElement("div")
    modalButtons.className = "modal-buttons"
    modalButtons.id = "modalButtons"
  
    // Botón aceptar por defecto
    const acceptButton = document.createElement("button")
    acceptButton.className = "modal-button"
    acceptButton.textContent = "Aceptar"
    acceptButton.id = "modalAcceptButton"
    acceptButton.addEventListener("click", () => {
      closeModal()
    })
  
    // Construir el modal
    modalHeader.appendChild(modalIcon)
    modalHeader.appendChild(modalTitle)
  
    modalContent.appendChild(modalMessage)
  
    modalButtons.appendChild(acceptButton)
    modalFooter.appendChild(modalButtons)
  
    modalContainer.appendChild(modalHeader)
    modalContainer.appendChild(modalContent)
    modalContainer.appendChild(modalFooter)
  
    modalOverlay.appendChild(modalContainer)
  
    // Añadir el modal al body
    document.body.appendChild(modalOverlay)
  }
  
  // Función para mostrar el modal
  function showModal(message, isError = true, showRegisterOption = false) {
    const modalMessage = document.getElementById("modalMessage")
    const modalTitle = document.getElementById("modalTitle")
    const modalIcon = document.getElementById("modalIcon")
    const messageModal = document.getElementById("messageModal")
    const modalHeader = document.querySelector(".modal-header")
    const modalButtons = document.getElementById("modalButtons")
    
    // Limpiar botones anteriores
    modalButtons.innerHTML = ""
  
    modalMessage.textContent = message
  
    if (isError) {
      modalTitle.textContent = "Error"
      modalIcon.innerHTML = "⚠️"
      modalHeader.style.backgroundColor = "#f3f4f6" // Color gris claro original
      
      // Botón aceptar
      const acceptButton = document.createElement("button")
      acceptButton.className = "modal-button"
      acceptButton.textContent = "Aceptar"
      acceptButton.addEventListener("click", () => {
        closeModal()
      })
      modalButtons.appendChild(acceptButton)
      
      // Si se debe mostrar la opción de registro
      if (showRegisterOption) {
        // Añadir mensaje preguntando si desea registrarse
        modalMessage.textContent = `${message} ¿Desea registrarse?`
        
        // Botón para ir a registro
        const registerButton = document.createElement("button")
        registerButton.className = "modal-button register"
        registerButton.textContent = "Registrarse"
        registerButton.addEventListener("click", () => {
          window.location.href = "registro.php"
        })
        modalButtons.appendChild(registerButton)
      }
    } else {
      modalTitle.textContent = "¡Bienvenido!"
      modalIcon.innerHTML = "🎉"
      modalHeader.style.backgroundColor = "#d1fae5" // Color verde claro
      
      // Botón aceptar para éxito
      const acceptButton = document.createElement("button")
      acceptButton.className = "modal-button success"
      acceptButton.textContent = "Aceptar"
      acceptButton.addEventListener("click", () => {
        closeModal()
        // Redirigir al usuario a la página principal
        window.location.href = "../index.php"
      })
      modalButtons.appendChild(acceptButton)
    }
  
    messageModal.classList.add("active")
  
    // Evitar que se pueda hacer scroll en el fondo mientras el modal está abierto
    document.body.style.overflow = "hidden"
  }
  
  // Función para cerrar el modal
  function closeModal() {
    const messageModal = document.getElementById("messageModal")
    messageModal.classList.remove("active")
  
    // Restaurar el scroll
    document.body.style.overflow = ""
  }
  
  // JavaScript para el SVG personalizado
  const togglePasswordButton = document.getElementById("togglePassword")
  
  if (togglePasswordButton && passwordInput) {
    const eyeOpen = togglePasswordButton.querySelector(".eye-open")
    const eyeClosed = togglePasswordButton.querySelector(".eye-closed")
  
    togglePasswordButton.addEventListener("click", () => {
      if (passwordInput.getAttribute("type") === "password") {
        // Mostrar contraseña
        passwordInput.setAttribute("type", "text")
        eyeOpen.style.display = "none"
        eyeClosed.style.display = "block"
      } else {
        // Ocultar contraseña
        passwordInput.setAttribute("type", "password")
        eyeOpen.style.display = "block"
        eyeClosed.style.display = "none"
      }
    })
  }
  
  // Manejar el envío del formulario
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Validar el formulario
      const username = document.getElementById("username").value.trim()
      const password = document.getElementById("password").value
  
      // Validar campos obligatorios
      if (!username || !password) {
        showModal("Por favor complete todos los campos.")
        return
      }
  
      // Crear objeto con los datos del formulario
      const formData = new FormData()
      formData.append("username", username)
      formData.append("password", password)
  
      // Enviar datos al servidor mediante fetch
      fetch("../config/procesar_login.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Guardar información del usuario en localStorage para uso en el frontend
            localStorage.setItem("userRole", data.userData.rol)
            localStorage.setItem("userName", data.userData.nombre)
            if (data.userData.cargo) {
              localStorage.setItem("userCargo", data.userData.cargo)
            }
            
            showModal(data.message, false) // Mostrar modal de éxito
          } else {
            // Si el usuario no existe, mostrar modal con opción para registrarse
            if (data.userExists === false) {
              showModal(data.message, true, true) // Mostrar modal con opción de registro
            } else {
              showModal(data.message) // Mostrar modal de error genérico
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error)
          showModal("Ocurrió un error al procesar el inicio de sesión. Por favor, inténtelo de nuevo más tarde.")
        })
    })
  }
  
  // Manejar botones de navegación
  if (cancelLoginButton) {
    cancelLoginButton.addEventListener("click", () => {
      window.location.href = "../index.php"
    })
  }
  
  if (goToRegisterButton) {
    goToRegisterButton.addEventListener("click", () => {
      window.location.href = "registro.php"
    })
  }
})