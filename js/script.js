// Script principal para todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado - Inicializando script principal")

  // Declare feather if not using a module bundler and including Feather icons via CDN
  // Asegurarse de que feather esté disponible globalmente
  window.feather = window.feather || {
    replace: () => {
      console.warn("Feather icons not properly initialized. Ensure Feather icons are included in your project.")
    },
  }

  // Inicializar los iconos de Feather
  feather.replace()

  // Verificar si el usuario está autenticado
  checkUserAuthentication()

  // Manejar la bandeja de notificaciones
  const notificationButton = document.getElementById("notificationButton")
  const closeNotificationArrow = document.querySelector(".close-notification-arrow")
  const notificationTray = document.getElementById("notificationTray")

  if (notificationButton && notificationTray) {
    notificationButton.addEventListener("click", () => {
      notificationTray.classList.toggle("active")
    })
  }

  // CORRECCIÓN: Eliminado el bloque duplicado que causaba el error en la línea 30
  
  if (closeNotificationArrow && notificationTray) {
    closeNotificationArrow.addEventListener("click", () => {
      notificationTray.classList.remove("active")
    })
  }

  // Cerrar la bandeja de notificaciones al hacer clic fuera de ella
  document.addEventListener("click", (event) => {
    if (notificationTray && notificationButton) {
      const isClickInside = notificationTray.contains(event.target) || notificationButton.contains(event.target)
      if (!isClickInside && notificationTray.classList.contains("active")) {
        notificationTray.classList.remove("active")
      }
    }
  })

  // Función para verificar si el usuario está autenticado y mostrar/ocultar botones
  function checkUserAuthentication() {
    // Obtener información del usuario desde localStorage
    const userRole = localStorage.getItem("userRole")
    const userName = localStorage.getItem("userName")
    const userCargo = localStorage.getItem("userCargo")

    console.log("Verificando autenticación del usuario:", {
      userRole,
      userName,
      userCargo,
    })

    // Verificar si el usuario está autenticado (tiene nombre y rol)
    // Importante: Verificamos que userRole y userName existan y no sean null o undefined
    const isLoggedIn = userRole !== null && userName !== null && userRole !== undefined && userName !== undefined

    console.log("¿Usuario autenticado?", isLoggedIn)

    // Elementos de la interfaz
    const registerButton = document.getElementById("registerButton")
    const loginButton = document.getElementById("loginButton")
    const userProfileContainer = document.getElementById("userProfileContainer")
    const userNameDisplay = document.getElementById("userNameDisplay")
    const userFullNameDisplay = document.getElementById("userFullNameDisplay")
    const userRoleDisplay = document.getElementById("userRoleDisplay")
    const adminPanelButton = document.getElementById("adminPanelButton")
    const adminPanelButtonMobile = document.getElementById("adminPanelButtonMobile")

    if (isLoggedIn) {
      console.log("Usuario autenticado. Rol:", userRole)

      // Ocultar botones de registro e inicio de sesión
      if (registerButton) {
        registerButton.style.display = "none"
        console.log("Botón de registro ocultado")
      } else {
        console.log("Botón de registro no encontrado")
      }

      if (loginButton) {
        loginButton.style.display = "none"
        console.log("Botón de inicio de sesión ocultado")
      } else {
        console.log("Botón de inicio de sesión no encontrado")
      }

      // Mostrar información del usuario
      if (userProfileContainer) {
        userProfileContainer.style.display = "block"
        console.log("Contenedor de perfil de usuario mostrado")
      } else {
        console.log("Contenedor de perfil de usuario no encontrado")
      }

      if (userNameDisplay) {
        userNameDisplay.textContent = userName
        console.log("Nombre de usuario mostrado:", userName)
      } else {
        console.log("Elemento para mostrar nombre de usuario no encontrado")
      }

      if (userFullNameDisplay) {
        userFullNameDisplay.textContent = userName
        console.log("Nombre completo de usuario mostrado:", userName)
      } else {
        console.log("Elemento para mostrar nombre completo de usuario no encontrado")
      }

      // Mostrar rol y cargo del usuario
      if (userRoleDisplay) {
        if (userRole === "admin") {
          userRoleDisplay.innerHTML = `${userCargo || "Administrador"} <span class="user-type">(Administrador)</span>`
          console.log("Rol de administrador mostrado con cargo:", userCargo || "Administrador")
        } else {
          userRoleDisplay.innerHTML = `Usuario <span class="user-type">(Usuario Común)</span>`
          console.log("Rol de usuario regular mostrado")
        }
      } else {
        console.log("Elemento para mostrar rol de usuario no encontrado")
      }

      // Mostrar botón de panel de administración solo si es admin
      if (userRole === "admin") {
        console.log("Usuario es administrador, mostrando botones de panel de administración")

        if (adminPanelButton) {
          adminPanelButton.style.display = "flex"
          console.log("Botón de panel de administración mostrado (escritorio)")
        } else {
          console.log("Botón de panel de administración (escritorio) no encontrado")
        }

        if (adminPanelButtonMobile) {
          adminPanelButtonMobile.style.display = "flex"
          console.log("Botón de panel de administración mostrado (móvil)")
        } else {
          console.log("Botón de panel de administración (móvil) no encontrado")
        }
      } else {
        console.log("Usuario no es administrador, ocultando botones de panel de administración")

        if (adminPanelButton) {
          adminPanelButton.style.display = "none"
          console.log("Botón de panel de administración ocultado (escritorio)")
        } else {
          console.log("Botón de panel de administración (escritorio) no encontrado")
        }

        if (adminPanelButtonMobile) {
          adminPanelButtonMobile.style.display = "none"
          console.log("Botón de panel de administración ocultado (móvil)")
        } else {
          console.log("Botón de panel de administración (móvil) no encontrado")
        }
      }
    } else {
      console.log("Usuario no autenticado")

      // Mostrar botones de registro e inicio de sesión
      if (registerButton) {
        registerButton.style.display = "block"
        console.log("Botón de registro mostrado")
      } else {
        console.log("Botón de registro no encontrado")
      }

      if (loginButton) {
        loginButton.style.display = "block"
        console.log("Botón de inicio de sesión mostrado")
      } else {
        console.log("Botón de inicio de sesión no encontrado")
      }

      // Ocultar información del usuario
      if (userProfileContainer) {
        userProfileContainer.style.display = "none"
        console.log("Contenedor de perfil de usuario ocultado")
      } else {
        console.log("Contenedor de perfil de usuario no encontrado")
      }

      // Ocultar botón de panel de administración
      if (adminPanelButton) {
        adminPanelButton.style.display = "none"
        console.log("Botón de panel de administración ocultado (escritorio)")
      } else {
        console.log("Botón de panel de administración (escritorio) no encontrado")
      }

      if (adminPanelButtonMobile) {
        adminPanelButtonMobile.style.display = "none"
        console.log("Botón de panel de administración ocultado (móvil)")
      } else {
        console.log("Botón de panel de administración (móvil) no encontrado")
      }
    }
  }

  // Manejar el carrusel del banner
  const bannerSlides = document.getElementById("bannerSlides")
  const prevSlideButton = document.getElementById("prevSlide")
  const nextSlideButton = document.getElementById("nextSlide")
  const bannerControls = document.querySelectorAll(".banner-control")

  if (bannerSlides) {
    const slides = bannerSlides.querySelectorAll(".banner-slide")
    let currentSlide = 0

    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"))
      bannerControls.forEach((control) => control.classList.remove("active"))

      slides[index].classList.add("active")
      bannerControls[index].classList.add("active")
      currentSlide = index
    }

    if (prevSlideButton) {
      prevSlideButton.addEventListener("click", () => {
        let newIndex = currentSlide - 1
        if (newIndex < 0) newIndex = slides.length - 1
        showSlide(newIndex)
      })
    }

    if (nextSlideButton) {
      nextSlideButton.addEventListener("click", () => {
        let newIndex = currentSlide + 1
        if (newIndex >= slides.length) newIndex = 0
        showSlide(newIndex)
      })
    }

    bannerControls.forEach((control, index) => {
      control.addEventListener("click", () => {
        showSlide(index)
      })
    })

    // Inicializar el primer slide como activo
    showSlide(0)

    // Cambiar automáticamente los slides cada 7 segundos
    setInterval(() => {
      let newIndex = currentSlide + 1
      if (newIndex >= slides.length) newIndex = 0
      showSlide(newIndex)
    }, 7000)
  }

  // Manejar redirecciones desde la navegación principal
  const navButtons = document.querySelectorAll(".nav-button, .nav-button-mobile")

  if (navButtons) {
    navButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonText = this.querySelector("span").textContent

        if (buttonText === "Tienda") {
          // Determinar la ruta correcta a tienda.php
          const currentPath = window.location.pathname

          if (currentPath.includes("/pages/")) {
            // Si estamos en una subpágina
            if (currentPath.endsWith("/tienda.php")) {
              // Ya estamos en tienda.php, no hacer nada
              return
            }
            window.location.href = "tienda.php"
          } else {
            // Si estamos en la página principal
            window.location.href = "pages/tienda.php"
          }
        } else if (buttonText === "Gestión de Usuarios" || buttonText === "Gestión") {
          // Determinar la ruta correcta a gestionar_usuarios.php
          const currentPath = window.location.pathname

          if (currentPath.includes("/pages/")) {
            // Si estamos en una subpágina
            if (currentPath.endsWith("/gestionar_usuarios.php")) {
              // Ya estamos en gestionar_usuarios.php, no hacer nada
              return
            }
            window.location.href = "gestionar_usuarios.php"
          } else {
            // Si estamos en la página principal
            window.location.href = "pages/gestionar_usuarios.php"
          }
        }
      })
    })
  }

  // Manejar redirecciones desde la página principal
  const registerButton = document.getElementById("registerButton")
  const loginButton = document.getElementById("loginButton")

  if (registerButton) {
    registerButton.addEventListener("click", () => {
      const currentPath = window.location.pathname
      if (currentPath.includes("/pages/")) {
        window.location.href = "registro.php"
      } else {
        window.location.href = "pages/registro.php"
      }
    })
  }

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      const currentPath = window.location.pathname
      if (currentPath.includes("/pages/")) {
        window.location.href = "login.php"
      } else {
        window.location.href = "pages/login.php"
      }
    })
  }

  // Manejar el botón de perfil de usuario y cerrar sesión
  const userProfileButton = document.getElementById("userProfileButton")
  const userProfileDropdown = document.getElementById("userProfileDropdown")
  const logoutButton = document.getElementById("logoutButton")

  if (userProfileButton && userProfileDropdown) {
    userProfileButton.addEventListener("click", () => {
      userProfileDropdown.classList.toggle("active")
    })

    // Cerrar el dropdown al hacer clic fuera de él
    document.addEventListener("click", (event) => {
      const isClickInside = userProfileDropdown.contains(event.target) || userProfileButton.contains(event.target)
      if (!isClickInside && userProfileDropdown.classList.contains("active")) {
        userProfileDropdown.classList.remove("active")
      }
    })
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      // Redirigir a la página de logout
      const currentPath = window.location.pathname
      if (currentPath.includes("/pages/")) {
        window.location.href = "../config/cerrar_sesion.php"
      } else {
        window.location.href = "config/cerrar_sesion.php"
      }
    })
  }

  // Manejar clic en el logo para ir a la página principal
  const logoHome = document.getElementById("logoHome")
  if (logoHome) {
    logoHome.addEventListener("click", () => {
      const currentPath = window.location.pathname
      if (currentPath.includes("/pages/")) {
        window.location.href = "../index.php"
      } else {
        window.location.href = "index.php"
      }
    })
    logoHome.style.cursor = "pointer"
  }

  // Manejar la bandeja del carrito
  const cartButton = document.getElementById("cartButton")
  const cartTray = document.getElementById("cartTray")
  const closeCartButton = document.getElementById("closeCartButton")
  const cartContent = document.getElementById("cartContent")
  const emptyCartMessage = document.getElementById("emptyCartMessage")
  const cartTotal = document.getElementById("cartTotal")
  const checkoutButton = document.getElementById("checkoutButton")
  const cartCountBadge = document.getElementById("cartCountBadge")
  const notificationCountBadge = document.getElementById("notificationCountBadge")

  // Función para cargar el carrito desde localStorage
  function loadCartFromLocalStorage() {
    try {
      const cartData = localStorage.getItem("cartItems")
      return cartData ? JSON.parse(cartData) : []
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
      return []
    }
  }

  // Función para guardar el carrito en localStorage
  function saveCartToLocalStorage(cartItems) {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    } catch (error) {
      console.error("Error saving cart to localStorage:", error)
    }
  }

  // Cargar los items del carrito desde localStorage
  const cartItems = loadCartFromLocalStorage()

  if (cartButton && cartTray) {
    cartButton.addEventListener("click", () => {
      cartTray.classList.toggle("active")
    })
  }

  if (closeCartButton && cartTray) {
    closeCartButton.addEventListener("click", () => {
      cartTray.classList.remove("active")
    })
  }

  // Cerrar la bandeja del carrito al hacer clic fuera de ella
  document.addEventListener("click", (event) => {
    if (cartTray && cartButton && closeCartButton) {
      const isClickInside = cartTray.contains(event.target) || cartButton.contains(event.target)
      if (!isClickInside && !closeCartButton.contains(event.target) && cartTray.classList.contains("active")) {
        cartTray.classList.remove("active")
      }
    }
  })

  // Función para formatear precios en COP
  function formatPrice(price) {
    return new Intl.NumberFormat("es-CO", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Función para actualizar el carrito
  function updateCart() {
    // Actualizar contador
    if (cartCountBadge) {
      cartCountBadge.textContent = cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
    }

    // Actualizar contenido del carrito
    if (cartItems.length === 0) {
      if (emptyCartMessage) emptyCartMessage.style.display = "flex"
      if (checkoutButton) checkoutButton.disabled = true
      if (cartTotal) cartTotal.textContent = "$0"

      // Limpiar todos los elementos del carrito excepto el mensaje de carrito vacío
      if (cartContent) {
        const cartItemElements = cartContent.querySelectorAll(".cart-item")
        cartItemElements.forEach((item) => item.remove())
      }
    } else {
      if (emptyCartMessage) emptyCartMessage.style.display = "none"
      if (checkoutButton) checkoutButton.disabled = false

      // Limpiar contenido actual
      if (cartContent) {
        // Eliminar todos los elementos del carrito antes de agregar los nuevos
        const cartItemElements = cartContent.querySelectorAll(".cart-item")
        cartItemElements.forEach((item) => item.remove())

        // Calcular total
        let total = 0

        // Agregar items al carrito
        cartItems.forEach((item, index) => {
          const cartItem = document.createElement("div")
          cartItem.className = "cart-item"
          cartItem.innerHTML = `
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.title || item.name}">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title || item.name}</h4>
            <p class="cart-item-price">${formatPrice(item.price)}</p>
            <p class="cart-item-quantity">Cantidad: ${item.quantity || 1}</p>
          </div>
          <button class="cart-item-remove" data-index="${index}">
            <i data-feather="x"></i>
          </button>
        `
          cartContent.appendChild(cartItem)

          total += item.price * (item.quantity || 1)
        })

        // Inicializar iconos en los nuevos elementos
        if (window.feather) {
          feather.replace()
        }

        // Agregar eventos a los botones de eliminar
        const removeButtons = cartContent.querySelectorAll(".cart-item-remove")
        removeButtons.forEach((button) => {
          button.addEventListener("click", function (event) {
            event.stopPropagation()
            const index = Number.parseInt(this.getAttribute("data-index"))
            removeFromCart(index)
          })
        })

        // Actualizar total
        if (cartTotal) cartTotal.textContent = `${formatPrice(total)}`
      }
    }
  }

  // Función para eliminar X cantidad de un producto del carrito
  function removeFromCart(index, qtyToRemove = 1) {
    if (cartItems[index]) {
      cartItems[index].quantity -= qtyToRemove

      // Si la cantidad llega a 0 o menos, eliminar el producto
      if (cartItems[index].quantity <= 0) {
        cartItems.splice(index, 1)
      }

      saveCartToLocalStorage(cartItems)
      updateCart()
    }
  }

  // Función para mostrar notificación de producto añadido
  function showAddToCartNotification(productName) {
    // Crear y mostrar una notificación temporal
    const notification = document.createElement("div")
    notification.className = "add-to-cart-notification"
    notification.innerHTML = `
      <div class="notification-content">
        <i data-feather="check-circle"></i>
        <span>${productName} añadido al carrito</span>
      </div>
    `
    document.body.appendChild(notification)

    // Inicializar el icono de Feather en la notificación
    if (window.feather) {
      feather.replace()
    }

    // Mostrar la notificación
    setTimeout(() => {
      notification.classList.add("show")
    }, 100)

    // Ocultar y eliminar la notificación después de 3 segundos
    setTimeout(() => {
      notification.classList.remove("show")
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  // Función para mostrar notificación de producto ya existente
  function showProductExistsNotification(productTitle) {
    // Crear y mostrar una notificación temporal
    const notification = document.createElement("div")
    notification.className = "add-to-cart-notification product-exists"
    notification.innerHTML = `
      <div class="notification-content">
        <i data-feather="info"></i>
        <span>${productTitle} ya está en tu carrito</span>
      </div>
    `
    document.body.appendChild(notification)

    // Inicializar el icono de Feather en la notificación
    if (window.feather) {
      feather.replace()
    }

    // Mostrar la notificación
    setTimeout(() => {
      notification.classList.add("show")
    }, 100)

    // Ocultar y eliminar la notificación después de 3 segundos
    setTimeout(() => {
      notification.classList.remove("show")
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  // Inicializar el contador de notificaciones (simulando 3 notificaciones)
  if (notificationCountBadge) {
    notificationCountBadge.textContent = "3"
  }

  // Inicializar carrito
  updateCart()

  // Modificar el evento del botón de checkout para redirigir a tienda.php y mostrar el modal de pago
  if (checkoutButton) {
    checkoutButton.addEventListener("click", (event) => {
      // Prevenir el comportamiento por defecto
      event.preventDefault()

      // Guardar un flag en localStorage para indicar que se debe mostrar el modal de pago
      localStorage.setItem("showCheckoutModal", "true")

      // Redirigir a tienda.php
      const currentPath = window.location.pathname
      if (currentPath.includes("/pages/")) {
        window.location.href = "tienda.php"
      } else {
        window.location.href = "pages/tienda.php"
      }
    })
  }

  // Cargar productos destacados para la página principal
  const featuredProductsGrid = document.getElementById("featuredProductsGrid")

  if (featuredProductsGrid) {
    try {
      // Intentar cargar los datos de productos del localStorage
      const productsData = localStorage.getItem("productsData")
      let products = []

      if (productsData) {
        // Si hay datos en localStorage, usarlos
        products = JSON.parse(productsData)
      } else {
        // Si no hay datos, usar productos por defecto (los que ya están en el HTML)
        console.log("No hay datos de productos en localStorage")
        return // CORRECCIÓN: Agregado return para evitar error en línea 702
      }

      // Filtrar productos en oferta (que tienen originalPrice)
      const productsOnSale = products.filter((product) => product.originalPrice && product.sale)

      // Ordenar productos por precio (de menor a mayor)
      const cheapestProductsOnSale = productsOnSale.sort((a, b) => a.price - b.price).slice(0, 3)

      if (cheapestProductsOnSale.length > 0) {
        // Limpiar el contenedor
        featuredProductsGrid.innerHTML = ""

        // Agregar los productos más baratos en oferta
        cheapestProductsOnSale.forEach((product, index) => {
          const isHighlighted = index === 1 // Destacar el producto del medio

          const productCard = document.createElement("div")
          productCard.className = `product-card ${isHighlighted ? "highlighted" : ""}`

          productCard.innerHTML = `
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
              <div class="product-badge sale">Oferta</div>
            </div>
            <div class="product-info">
              <h3 class="product-title">${product.name}</h3>
              <p class="product-price">
                <span class="original-price">${formatPrice(product.originalPrice)}</span>
                ${formatPrice(product.price)}
              </p>
            </div>
            <div class="product-actions">
              <a href="pages/tienda.php" class="view-product-button">
                <i data-feather="eye"></i> Ver producto
              </a>
            </div>
          `

          featuredProductsGrid.appendChild(productCard)
        })

        // Recargar iconos Feather
        if (window.feather) {
          feather.replace()
        }
      }
    } catch (error) {
      console.error("Error al cargar los productos destacados:", error)
    }
  }
})