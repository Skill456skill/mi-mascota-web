// Script específico para la página de registro
document.addEventListener("DOMContentLoaded", () => {
    const tipoMascotaSelect = document.getElementById("tipoMascota")
    const razaMascotaSelect = document.getElementById("razaMascota")
    const registroForm = document.getElementById("registroForm")
    const cancelRegisterButton = document.getElementById("cancelRegisterButton")
    const goToLoginButton = document.getElementById("goToLoginButton")
    const passwordInput = document.getElementById("password")
    const passwordStrengthBar = document.getElementById("passwordStrengthBar")
    const passwordStrengthText = document.getElementById("passwordStrengthText")
    const generoMascotaSelect = document.getElementById("generoMascota")
  
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
  
      const acceptButton = document.createElement("button")
      acceptButton.className = "modal-button"
      acceptButton.textContent = "Aceptar"
      acceptButton.addEventListener("click", () => {
        closeModal()
      })
  
      // Construir el modal
      modalHeader.appendChild(modalIcon)
      modalHeader.appendChild(modalTitle)
  
      modalContent.appendChild(modalMessage)
  
      modalFooter.appendChild(acceptButton)
  
      modalContainer.appendChild(modalHeader)
      modalContainer.appendChild(modalContent)
      modalContainer.appendChild(modalFooter)
  
      modalOverlay.appendChild(modalContainer)
  
      // Añadir el modal al body
      document.body.appendChild(modalOverlay)
    }
  
    // Función para mostrar el modal
    function showModal(message, isSuccess = false) {
      const modalMessage = document.getElementById("modalMessage")
      const modalTitle = document.getElementById("modalTitle")
      const modalIcon = document.getElementById("modalIcon")
      const messageModal = document.getElementById("messageModal")
      const modalHeader = document.querySelector(".modal-header")
      const modalButton = document.querySelector(".modal-button")
  
      modalMessage.textContent = message
  
      if (isSuccess) {
        modalTitle.textContent = "¡Bienvenido!"
        modalIcon.innerHTML = "🎉"
        modalHeader.style.backgroundColor = "#d1fae5" // Color verde claro
        modalButton.style.backgroundColor = "#10b981" // Color verde
      } else {
        modalTitle.textContent = "Error"
        modalIcon.innerHTML = "⚠️"
        modalHeader.style.backgroundColor = "#f3f4f6" // Color gris claro original
        modalButton.style.backgroundColor = "#0263b7" // Color azul original
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
  
    // Función para evaluar la fortaleza de la contraseña
    function evaluatePasswordStrength(password) {
      // Si no hay contraseña, no mostrar nada
      if (!password) {
        passwordStrengthBar.className = "password-strength-bar"
        passwordStrengthText.textContent = ""
        return
      }
  
      // Criterios de evaluación
      const hasLowerCase = /[a-z]/.test(password)
      const hasUpperCase = /[A-Z]/.test(password)
      const hasNumbers = /\d/.test(password)
      const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password)
      const isLongEnough = password.length >= 8
  
      // Calcular puntuación
      let score = 0
      if (hasLowerCase) score++
      if (hasUpperCase) score++
      if (hasNumbers) score++
      if (hasSpecialChars) score++
      if (isLongEnough) score++
  
      // Determinar fortaleza basada en la puntuación
      if (score <= 2) {
        passwordStrengthBar.className = "password-strength-bar weak"
        passwordStrengthText.textContent = "Débil"
        passwordStrengthText.style.color = "#ef4444"
      } else if (score <= 4) {
        passwordStrengthBar.className = "password-strength-bar medium"
        passwordStrengthText.textContent = "Media"
        passwordStrengthText.style.color = "#f59e0b"
      } else {
        passwordStrengthBar.className = "password-strength-bar strong"
        passwordStrengthText.textContent = "Fuerte"
        passwordStrengthText.style.color = "#10b981"
      }
    }
  
    // Evento para evaluar la contraseña mientras se escribe
    if (passwordInput) {
      passwordInput.addEventListener("input", function () {
        evaluatePasswordStrength(this.value)
      })
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
  
    // Razas por tipo de mascota
    const razasPorTipo = {
      perro: [
        "Labrador Retriever",
        "Pastor Alemán",
        "Bulldog",
        "Golden Retriever",
        "Beagle",
        "Poodle",
        "Chihuahua",
        "Boxer",
        "Dálmata",
        "Husky Siberiano",
        "Otro",
      ],
      gato: [
        "Persa",
        "Siamés",
        "Maine Coon",
        "Bengalí",
        "Ragdoll",
        "Sphynx",
        "Angora",
        "Británico de Pelo Corto",
        "Abisinio",
        "Otro",
      ],
      ave: ["Canario", "Periquito", "Loro", "Cacatúa", "Agapornis", "Otro"],
      pez: ["Goldfish", "Betta", "Guppy", "Tetra", "Otro"],
      reptil: ["Tortuga", "Iguana", "Gecko", "Camaleón", "Serpiente", "Otro"],
      roedor: ["Hámster", "Conejo", "Cobaya", "Ratón", "Chinchilla", "Otro"],
      otro: ["No aplica"],
    }
  
    // Función para cargar las razas según el tipo de mascota seleccionado
    function cargarRazas(tipo) {
      // Limpiar el select de razas
      razaMascotaSelect.innerHTML = ""
  
      // Agregar la opción por defecto
      const defaultOption = document.createElement("option")
      defaultOption.value = ""
      defaultOption.disabled = true
      defaultOption.selected = true
      defaultOption.textContent = "Tipo de raza"
      razaMascotaSelect.appendChild(defaultOption)
  
      // Si no hay tipo seleccionado, dejar el select de razas deshabilitado
      if (!tipo) {
        razaMascotaSelect.disabled = true
        return
      }
  
      // Habilitar el select de razas
      razaMascotaSelect.disabled = false
  
      // Agregar las razas correspondientes al tipo seleccionado
      const razas = razasPorTipo[tipo] || []
      razas.forEach((raza) => {
        const option = document.createElement("option")
        option.value = raza.toLowerCase().replace(/\s+/g, "-")
        option.textContent = raza
        razaMascotaSelect.appendChild(option)
      })
    }
  
    // Evento para cuando cambia el tipo de mascota
    if (tipoMascotaSelect) {
      tipoMascotaSelect.addEventListener("change", () => {
        cargarRazas(tipoMascotaSelect.value)
      })
  
      // Inicializar el formulario
      cargarRazas(tipoMascotaSelect.value)
    }
  
    // Manejar el envío del formulario
    if (registroForm) {
      registroForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Validar el formulario
        const nombre = document.getElementById("nombre").value.trim()
        const email = document.getElementById("email").value.trim()
        const password = document.getElementById("password").value
        const tipoMascota = document.getElementById("tipoMascota").value
        const nombreMascota = document.getElementById("nombreMascota").value.trim()
        const razaMascota = document.getElementById("razaMascota").value
        const edadMascota = document.getElementById("edadMascota").value
        const pesoMascota = document.getElementById("pesoMascota").value
        const generoMascota = document.getElementById("generoMascota").value
  
        // Validar campos obligatorios
        if (!nombre || !email || !password || !tipoMascota || !nombreMascota || !razaMascota || !generoMascota) {
          showModal("Por favor complete todos los campos obligatorios.")
          return
        }
  
        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          showModal("Por favor ingrese un email válido.")
          return
        }
  
        // Validar fortaleza de contraseña
        if (passwordStrengthText.textContent === "Débil") {
          showModal("Por favor elija una contraseña más segura.")
          return
        }
  
        // Validar que el género sea 'macho' o 'hembra'
        if (generoMascota !== "macho" && generoMascota !== "hembra") {
          showModal("Por favor seleccione un género válido para su mascota (macho o hembra).")
          return
        }
  
        // Crear objeto con los datos del formulario
        const formData = new FormData()
        formData.append("nombre", nombre)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("tipoMascota", tipoMascota)
        formData.append("nombreMascota", nombreMascota)
        formData.append("razaMascota", razaMascota)
        formData.append("edadMascota", edadMascota)
        formData.append("pesoMascota", pesoMascota)
        formData.append("generoMascota", generoMascota)
  
        // Enviar datos al servidor mediante fetch
        fetch("../config/procesar_registro.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              showModal(data.message, true) // Mostrar modal de éxito
              // Redirigir al usuario a la página principal después de cerrar el modal
              document.getElementById("messageModal").addEventListener("transitionend", function handler() {
                if (!this.classList.contains("active")) {
                  window.location.href = "../index.php"
                  this.removeEventListener("transitionend", handler)
                }
              })
            } else {
              showModal(data.message) // Mostrar modal de error
            }
          })
          .catch((error) => {
            console.error("Error:", error)
            showModal("Ocurrió un error al procesar el registro. Por favor, inténtelo de nuevo más tarde.")
          })
      })
    }
  
    // Manejar botones de navegación
    if (cancelRegisterButton) {
      cancelRegisterButton.addEventListener("click", () => {
        window.location.href = "../index.php"
      })
    }
  
    if (goToLoginButton) {
      goToLoginButton.addEventListener("click", () => {
        window.location.href = "../pages/login.php"
      })
    }
  })