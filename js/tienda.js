// Script específico para la página de tienda
document.addEventListener("DOMContentLoaded", () => {
  // Declare feather variable
  var feather = window.feather || {}

  // Base de datos de productos - MODIFICADA para tener solo 3 productos en oferta
  const products = [
    {
      id: 1,
      name: "Alimento Premium para Perros",
      price: 49990,
      originalPrice: 59990,
      image: "/Images/tienda/alimentoPremiumPerros.jpg",
      category: "Alimentos",
      pet: "perro",
      brand: "premium",
      description:
        "Alimento balanceado de alta calidad para perros de todas las edades. Contiene todos los nutrientes esenciales para mantener a tu mascota saludable y feliz.",
      featured: true,
      sale: true,
      addCount: 0,
    },
    {
      id: 2,
      name: "Collar Ajustable para Perros",
      price: 19990,
      originalPrice: null,
      image: "/Images/tienda/collarAjustablePerro.webp",
      category: "Accesorios",
      pet: "perro",
      brand: "premium",
      description:
        "Collar resistente y ajustable para perros de todos los tamaños. Fabricado con materiales duraderos y cómodos.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 3,
      name: "Juguete Interactivo para Gatos",
      price: 15990,
      originalPrice: 24990,
      image: "/Images/tienda/jugueteInteractivoGato.jpg",
      category: "Juguetes",
      pet: "gato",
      brand: "happy",
      description:
        "Juguete interactivo que estimula el instinto de caza de tu gato. Perfecto para mantener a tu felino activo y entretenido durante horas.",
      featured: false,
      sale: true,
      addCount: 0,
    },
    {
      id: 4,
      name: "Cama Ortopédica para Mascotas",
      price: 10990,
      originalPrice: null,
      image: "/Images/tienda/camaMascotas.jpg",
      category: "Camas y casas",
      pet: "perro",
      brand: "natural",
      description:
        "Cama ortopédica diseñada para proporcionar el máximo confort a tu mascota. Ideal para perros mayores o con problemas articulares.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 5,
      name: "Champú Hipoalergénico",
      price: 12990,
      originalPrice: 14990,
      image: "/Images/tienda/ShampooHipoaler.png",
      category: "Higiene",
      pet: "perro",
      brand: "natural",
      description:
        "Champú hipoalergénico formulado especialmente para mascotas con piel sensible. Limpia profundamente sin causar irritaciones.",
      featured: false,
      sale: true,
      addCount: 0,
    },
    {
      id: 6,
      name: "Vitaminas para Mascotas",
      price: 29990,
      originalPrice: null,
      image: "/Images/tienda/vitaminasMascotas.jpg",
      category: "Salud",
      pet: "perro",
      brand: "premium",
      description:
        "Suplemento vitamínico completo para fortalecer el sistema inmunológico de tu mascota. Contiene vitaminas A, B, C, D y E.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 7,
      name: "Rascador para Gatos",
      price: 34990,
      originalPrice: null,
      image: "/Images/tienda/rascadorGatos.jpg",
      category: "Accesorios",
      pet: "gato",
      brand: "happy",
      description:
        "Rascador de sisal con múltiples niveles y juguetes colgantes. Perfecto para que tu gato ejercite sus garras y se mantenga activo.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 8,
      name: "Correa Retráctil",
      price: 22990,
      originalPrice: null,
      image: "/Images/tienda/correaRetractil.jpg",
      category: "Accesorios",
      pet: "perro",
      brand: "premium",
      description:
        "Correa retráctil de alta resistencia con mango ergonómico. Extiende hasta 5 metros para dar mayor libertad a tu mascota durante los paseos.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 9,
      name: "Comedero Automático",
      price: 59990,
      originalPrice: null,
      image: "/Images/tienda/comederoAutomatico.jpg",
      category: "Accesorios",
      pet: "perro",
      brand: "premium",
      description:
        "Comedero automático programable para alimentar a tu mascota a horas específicas. Ideal para dueños con horarios ocupados.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 10,
      name: "Arena para Gatos Premium",
      price: 18990,
      originalPrice: null,
      image: "/Images/tienda/arenaPremiumGatos.png",
      category: "Higiene",
      pet: "gato",
      brand: "natural",
      description:
        "Arena aglomerante de alta absorción y control de olores. Fórmula natural que no daña las patas de tu gato.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 11,
      name: "Transportadora para Mascotas",
      price: 45990,
      originalPrice: null,
      image: "/Images/tienda/transportadoraMascotas.jpg",
      category: "Accesorios",
      pet: "perro",
      brand: "premium",
      description:
        "Transportadora resistente y segura para viajes. Cuenta con ventilación adecuada y cierre de seguridad.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 12,
      name: "Juguete Dispensador de Premios",
      price: 14990,
      originalPrice: null,
      image: "/Images/tienda/jugueteDispensador.jpg",
      category: "Juguetes",
      pet: "perro",
      brand: "happy",
      description:
        "Juguete interactivo que dispensa premios mientras tu mascota juega. Estimula la actividad mental y física.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 13,
      name: "Alimento Húmedo para Gatos",
      price: 3990,
      originalPrice: null,
      image: "/Images/tienda/alimentoHumedo.jpg",
      category: "Alimentos",
      pet: "gato",
      brand: "premium",
      description:
        "Alimento húmedo de alta calidad con trozos de carne real. Rico en proteínas y nutrientes esenciales para tu gato.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 14,
      name: "Cepillo Deslanador",
      price: 12990,
      originalPrice: null,
      image: "/Images/tienda/cepilloDeslanador.png",
      category: "Higiene",
      pet: "perro",
      brand: "natural",
      description:
        "Cepillo especial para eliminar el pelo muerto y reducir la caída. Ideal para perros de pelo largo o doble capa.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 15,
      name: "Snacks Dentales",
      price: 9990,
      originalPrice: null,
      image: "/Images/tienda/snacksDentales.jpg",
      category: "Alimentos",
      pet: "perro",
      brand: "natural",
      description:
        "Snacks especiales para la limpieza dental. Ayudan a reducir el sarro y mantener el aliento fresco de tu mascota.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 16,
      name: "Bebedero Automático para Gatos",
      price: 29990,
      originalPrice: null,
      image: "/Images/tienda/bebederoAutomaticoGatos.jpg",
      category: "Accesorios",
      pet: "perro",
      brand: "premium",
      description:
        "Bebedero con filtro que mantiene el agua fresca y limpia. Capacidad de 3 litros para menos recargas.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 17,
      name: "Arnés para Perros",
      price: 17990,
      originalPrice: null,
      image: "/Images/tienda/arnesPerros.jpg",
      category: "Accesorios",
      pet: "perro",
      brand: "premium",
      description:
        "Arnés acolchado y ajustable para mayor comodidad y control durante los paseos. Material resistente y reflectante.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 18,
      name: "Juguete de Plumas para Gatos",
      price: 7990,
      originalPrice: null,
      image: "/Images/tienda/plumasGatos.jpg",
      category: "Juguetes",
      pet: "gato",
      brand: "happy",
      description:
        "Juguete con plumas naturales que estimula el instinto cazador de tu gato. Incluye caña extensible para mayor diversión.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 19,
      name: "Alimento para Peces Tropicales",
      price: 5990,
      originalPrice: null,
      image: "/Images/tienda/pecesTropical.jpg",
      category: "Alimentos",
      pet: "pez",
      brand: "natural",
      description:
        "Alimento completo para peces tropicales. Fórmula que realza los colores y fortalece el sistema inmunológico.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 20,
      name: "Casa para Hámster",
      price: 14990,
      originalPrice: null,
      image: "/Images/tienda/casaHamsters.jpg",
      category: "Camas y casas",
      pet: "reptil",
      brand: "happy",
      description: "Casa de madera natural para hámsters y pequeños roedores. Proporciona un refugio seguro y cómodo.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 21,
      name: "Terrario para Reptiles",
      price: 89990,
      originalPrice: null,
      image: "/Images/tienda/terrarioReptiles.jpg",
      category: "Camas y casas",
      pet: "reptil",
      brand: "premium",
      description:
        "Terrario completo con sistema de ventilación y control de temperatura. Ideal para reptiles pequeños y medianos.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 22,
      name: "Jaula para Aves",
      price: 69990,
      originalPrice: null,
      image: "/Images/tienda/jaulaAves.jpg",
      category: "Camas y casas",
      pet: "ave",
      brand: "premium",
      description: "Jaula espaciosa con múltiples perchas y comederos. Diseño elegante y fácil de limpiar.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 23,
      name: "Semillas para Aves",
      price: 8990,
      originalPrice: null,
      image: "/Images/tienda/semillasAves.jpg",
      category: "Alimentos",
      pet: "ave",
      brand: "natural",
      description:
        "Mezcla premium de semillas seleccionadas para aves. Rica en nutrientes esenciales para su salud y plumaje.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 24,
      name: "Acuario Completo",
      price: 129990,
      originalPrice: null,
      image: "/Images/tienda/acuarioCompleto.jpg",
      category: "Camas y casas",
      pet: "pez",
      brand: "premium",
      description:
        "Acuario completo con filtro, iluminación LED y decoración. Capacidad de 50 litros, ideal para principiantes.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 25,
      name: "Filtro para Acuario",
      price: 24990,
      originalPrice: null,
      image: "/Images/tienda/filtroAcuario.webp",
      category: "Accesorios",
      pet: "pez",
      brand: "premium",
      description:
        "Filtro de alta eficiencia para acuarios de hasta 100 litros. Sistema de filtración triple para agua cristalina.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 26,
      name: "Lámpara para Terrario",
      price: 19990,
      originalPrice: null,
      image: "/Images/tienda/LamparaTerrario.jpg",
      category: "Accesorios",
      pet: "reptil",
      brand: "premium",
      description: "Lámpara UVB para reptiles que proporciona la radiación necesaria para su metabolismo y salud ósea.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 27,
      name: "Alimento para Tortugas",
      price: 7990,
      originalPrice: null,
      image: "/Images/tienda/alimentoTortugas.jpg",
      category: "Alimentos",
      pet: "reptil",
      brand: "natural",
      description: "Alimento completo para tortugas acuáticas y semiacuáticas. Rico en calcio y vitaminas esenciales.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 28,
      name: "Juguete para Loros",
      price: 12990,
      originalPrice: null,
      image: "/Images/tienda/jugueteLoros.jpg",
      category: "Juguetes",
      pet: "ave",
      brand: "happy",
      description:
        "Juguete colorido con diferentes texturas y sonidos. Estimula la actividad mental de tu ave y previene el aburrimiento.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 29,
      name: "Sustrato para Reptiles",
      price: 14990,
      originalPrice: null,
      image: "/Images/tienda/sustratoReptiles.jpg",
      category: "Accesorios",
      pet: "reptil",
      brand: "natural",
      description:
        "Sustrato natural que mantiene la humedad adecuada para reptiles. Libre de químicos y seguro para tu mascota.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 30,
      name: "Decoración para Acuario",
      price: 9990,
      originalPrice: null,
      image: "/Images/tienda/decoracionAcuario.jpg",
      category: "Accesorios",
      pet: "pez",
      brand: "happy",
      description: "Set de decoraciones naturales para acuario. Incluye plantas artificiales y refugios para peces.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 31,
      name: "Alimento para Perros Senior",
      price: 54990,
      originalPrice: null,
      image: "/Images/tienda/alimentoPerrosSenior.jpg",
      category: "Alimentos",
      pet: "perro",
      brand: "premium",
      description:
        "Alimento especial para perros mayores de 7 años. Fórmula con glucosamina para articulaciones y antioxidantes para el sistema inmune.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 32,
      name: "Cepillo para Gatos",
      price: 11990,
      originalPrice: null,
      image: "/Images/tienda/cepilloGatos.jpg",
      category: "Higiene",
      pet: "gato",
      brand: "natural",
      description:
        "Cepillo suave diseñado específicamente para el pelaje de los gatos. Elimina pelo muerto y reduce bolas de pelo.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 33,
      name: "Juguete Mordedor para Cachorros",
      price: 8990,
      originalPrice: null,
      image: "/Images/tienda/mordedorCachorros.jpg",
      category: "Juguetes",
      pet: "perro",
      brand: "happy",
      description:
        "Juguete resistente para cachorros en etapa de dentición. Alivia las encías y promueve la salud dental.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 34,
      name: "Arenero Cubierto para Gatos",
      price: 29990,
      originalPrice: null,
      image: "/Images/tienda/arencubierGatos.jpg",
      category: "Higiene",
      pet: "gato",
      brand: "premium",
      description: "Arenero cubierto con filtro de carbón para control de olores. Entrada amplia y fácil limpieza.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 35,
      name: "Alimento para Gatitos",
      price: 22990,
      originalPrice: null,
      image: "/Images/tienda/alimenGatitos.jpg",
      category: "Alimentos",
      pet: "gato",
      brand: "premium",
      description:
        "Alimento especial para gatitos hasta 12 meses. Rico en proteínas y nutrientes esenciales para su crecimiento.",
      featured: false,
      sale: false,
      addCount: 0,
    },
    {
      id: 36,
      name: "Placa de Identificación",
      price: 7990,
      originalPrice: null,
      image: "/Images/tienda/placaIden.jpg",
      category: "Accesorios",
      pet: "perro",
      brand: "premium",
      description: "Placa de identificación personalizable de acero inoxidable. Resistente al agua y duradera.",
      featured: false,
      sale: false,
      addCount: 0,
    },
  ]

  // NUEVA FUNCIÓN: Verificar si el usuario está logueado
  function isUserLoggedIn() {
    const userRole = localStorage.getItem("userRole")
    const userName = localStorage.getItem("userName")
    return userRole !== null && userName !== null && userRole !== undefined && userName !== undefined
  }

  // Declaración de funciones para localStorage
  function loadCartFromLocalStorage() {
    try {
      const cartData = localStorage.getItem("cartItems")
      return cartData ? JSON.parse(cartData) : []
    } catch (error) {
      console.error("Error al cargar el carrito desde localStorage:", error)
      return []
    }
  }

  function saveCartToLocalStorage(cartItems) {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    } catch (error) {
      console.error("Error al guardar el carrito en localStorage:", error)
    }
  }

  // Modificar la función para guardar el estado de los productos en localStorage
  function saveProductsToLocalStorage() {
    try {
      localStorage.setItem("productsData", JSON.stringify(products))
    } catch (error) {
      console.error("Error al guardar los productos en localStorage:", error)
    }
  }

  // Costo de envío fijo
  const SHIPPING_COST = 5000

  // NUEVA FUNCIÓN: Obtener el producto más añadido al carrito como destacado
  function getMostAddedProduct() {
    // Encontrar el producto con mayor addCount
    const mostAddedProduct = products.reduce((max, product) => {
      return product.addCount > max.addCount ? product : max
    }, products[0])
    
    console.log("Producto más añadido al carrito:", mostAddedProduct.name, "- Veces añadido:", mostAddedProduct.addCount)
    
    return mostAddedProduct
  }

  // Variables de estado
  let currentPage = 1
  const productsPerPage = 12
  let filteredProducts = [...products]
  let currentCategory = "Todos los productos"
  let cartItems = loadCartFromLocalStorage() // Cargar desde localStorage
  let featuredProductId = 1
  let currentProductId = null // Para el modal de producto
  let currentProductQuantity = 1
  let currentProductUnitPrice = 0

  // Inicializar el producto destacado como el más añadido al carrito
  const mostAddedProduct = getMostAddedProduct()
  featuredProductId = mostAddedProduct.id

  // Verificar si se debe mostrar el modal de pago
  const showCheckoutModalFlag = localStorage.getItem("showCheckoutModal")
  if (showCheckoutModalFlag === "true") {
    // Limpiar el flag
    localStorage.removeItem("showCheckoutModal")

    // Esperar a que se cargue todo para mostrar el modal
    setTimeout(() => {
      // Verificar si el usuario está logueado antes de mostrar el modal
      if (isUserLoggedIn()) {
        // Mostrar el modal de pago
        showCheckoutModal()
      } else {
        // Mostrar modal de login requerido
        if (window.showLoginRequiredModal) {
          window.showLoginRequiredModal()
        }
      }
    }, 500) // Pequeño retraso para asegurar que todo esté cargado
  }

  // Elementos del DOM para productos
  const productsGrid = document.getElementById("productsGrid")
  const pagination = document.getElementById("pagination")
  const noResultsMessage = document.getElementById("noResultsMessage")
  const categoryLinks = document.querySelectorAll(".category-link")
  const searchInput = document.getElementById("searchInput")
  const searchButton = document.getElementById("searchButton")
  const applyFiltersButton = document.getElementById("applyFiltersButton")
  const minPriceInput = document.getElementById("minPrice")
  const maxPriceInput = document.getElementById("maxPrice")
  const petCheckboxes = document.querySelectorAll('input[name="pet"]')
  const brandCheckboxes = document.querySelectorAll('input[name="brand"]')
  const cartContent = document.getElementById("cartContent")
  const emptyCartMessage = document.getElementById("emptyCartMessage")
  const cartTotal = document.getElementById("cartTotal")
  const cartCountBadge = document.getElementById("cartCountBadge")
  const checkoutButton = document.getElementById("checkoutButton")
  const checkoutModal = document.getElementById("checkoutModal")
  const closeModalButton = document.getElementById("closeModalButton")
  const cancelCheckoutButton = document.getElementById("cancelCheckoutButton")
  const completeCheckoutButton = document.getElementById("completeCheckoutButton")
  const checkoutItems = document.getElementById("checkoutItems")
  const checkoutSubtotal = document.getElementById("checkoutSubtotal")
  const checkoutShipping = document.getElementById("checkoutShipping")
  const checkoutTotal = document.getElementById("checkoutTotal")
  const notificationCountBadge = document.getElementById("notificationCountBadge")
  const featuredProductImage = document.getElementById("featuredProductImage")
  const featuredProductTitle = document.getElementById("featuredProductTitle")
  const featuredProductDescription = document.getElementById("featuredProductDescription")
  const featuredProductOriginalPrice = document.getElementById("featuredProductOriginalPrice")
  const featuredProductCurrentPrice = document.getElementById("featuredProductCurrentPrice")
  const featuredProductAddToCartButton = document.getElementById("featuredProductAddToCartButton")
  const featuredProductDetailsButton = document.getElementById("featuredProductDetailsButton")

  // Elementos del DOM para el modal de producto
  const productModal = document.getElementById("productModal")
  const closeProductModalButton = document.getElementById("closeProductModalButton")
  const productModalImage = document.getElementById("productModalImage")
  const productModalName = document.getElementById("productModalName")
  const productModalDescription = document.getElementById("productModalDescription")
  const productModalOriginalPrice = document.getElementById("productModalOriginalPrice")
  const productModalUnitPrice = document.getElementById("productModalUnitPrice")
  const productModalSubtotal = document.getElementById("productModalSubtotal")
  const productModalCurrentPrice = document.getElementById("productModalCurrentPrice")
  const continueShoppingButton = document.getElementById("continueShoppingButton")
  const proceedToCheckoutButton = document.getElementById("proceedToCheckoutButton")

  // Añadir variables para los nuevos elementos
  const productQuantityInput = document.getElementById("productQuantity")
  const decreaseQuantityButton = document.getElementById("decreaseQuantity")
  const increaseQuantityButton = document.getElementById("increaseQuantity")
  const errorModal = document.getElementById("errorModal")
  const closeErrorModalButton = document.getElementById("closeErrorModalButton")
  const acceptErrorButton = document.getElementById("acceptErrorButton")

  // Elementos del formulario de pago
  const formInputs = document.querySelectorAll(".form-input")

  // Función para formatear precios en COP
  function formatPrice(price) {
    return new Intl.NumberFormat("es-CO", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Función para renderizar productos en la cuadrícula
  function renderProducts() {
    if (!productsGrid) return

    // Limpiar la cuadrícula de productos
    productsGrid.innerHTML = ""

    // Calcular índices para la paginación
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

    // Mostrar mensaje de no resultados si no hay productos
    if (paginatedProducts.length === 0) {
      if (noResultsMessage) noResultsMessage.style.display = "flex"
      if (pagination) pagination.style.display = "none"
    } else {
      if (noResultsMessage) noResultsMessage.style.display = "none"
      if (pagination) pagination.style.display = "flex"

      // Renderizar cada producto
      paginatedProducts.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.className = "product-card"
        // Solo aplicar la clase highlighted si featuredProductId es válido y coincide con el ID del producto
        if (featuredProductId !== null && product.id === featuredProductId) {
          productCard.classList.add("highlighted")
        }

        productCard.innerHTML = `
        <div class="product-image" data-id="${product.id}">
          <img src="${product.image}" alt="${product.name}">
          ${product.sale ? '<div class="product-badge sale">Oferta</div>' : ""}
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">
            ${product.originalPrice && product.sale ? `<span class="original-price">$${formatPrice(product.originalPrice)}</span>` : ""}
            $${formatPrice(product.price)}
          </p>
        </div>
        <div class="product-actions">
          <button class="add-to-cart-button" data-id="${product.id}">
            <i data-feather="shopping-cart"></i> Añadir al carrito
          </button>
        </div>
      `

        productsGrid.appendChild(productCard)
      })

      // Inicializar iconos de Feather en los nuevos elementos
      feather.replace()

      // Agregar eventos a los botones de añadir al carrito
      const addToCartButtons = document.querySelectorAll(".add-to-cart-button")
      addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const productId = Number.parseInt(this.getAttribute("data-id"))
          
          // NUEVA VERIFICACIÓN: Comprobar si el usuario está logueado antes de añadir al carrito
          if (!isUserLoggedIn()) {
            if (window.showLoginRequiredModal) {
              window.showLoginRequiredModal()
            }
            return
          }
          
          addToCart(productId)
        })
      })

      // Agregar eventos a las imágenes de productos para mostrar el modal
      addProductImageClickEvents()

      // Renderizar paginación
      renderPagination()
    }
  }

  // Función para renderizar la paginación
  function renderPagination() {
    if (!pagination) return

    pagination.innerHTML = ""

    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    // Botón anterior
    const prevButton = document.createElement("button")
    prevButton.className = "pagination-button"
    prevButton.innerHTML = '<i data-feather="chevron-left"></i>'
    prevButton.disabled = currentPage === 1
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--
        renderProducts()
        window.scrollTo(0, 0)
      }
    })
    pagination.appendChild(prevButton)

    // Botones de página
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button")
      pageButton.className = `pagination-button ${i === currentPage ? "active" : ""}`
      pageButton.textContent = i
      pageButton.addEventListener("click", () => {
        currentPage = i
        renderProducts()
        window.scrollTo(0, 0)
      })
      pagination.appendChild(pageButton)
    }

    // Botón siguiente
    const nextButton = document.createElement("button")
    nextButton.className = "pagination-button"
    nextButton.innerHTML = '<i data-feather="chevron-right"></i>'
    nextButton.disabled = currentPage === totalPages
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++
        renderProducts()
        window.scrollTo(0, 0)
      }
    })
    pagination.appendChild(nextButton)

    // Inicializar iconos de Feather en los nuevos elementos
    feather.replace()
  }

  // Función para filtrar productos
  function filterProducts() {
    // Filtrar por categoría
    if (currentCategory === "Todos los productos") {
      filteredProducts = [...products]
    } else {
      filteredProducts = products.filter((product) => product.category === currentCategory)
    }

    // Filtrar por búsqueda
    if (searchInput) {
      const searchTerm = searchInput.value.trim().toLowerCase()
      if (searchTerm) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
        )
      }
    }

    // Filtrar por precio en pesos colombianos
    if (minPriceInput && maxPriceInput) {
      const minPrice = minPriceInput.value ? Number.parseInt(minPriceInput.value) : 0
      const maxPrice = maxPriceInput.value ? Number.parseInt(maxPriceInput.value) : Number.POSITIVE_INFINITY

      filteredProducts = filteredProducts.filter((product) => {
        // Asegurarse de que el precio es un número entero (pesos colombianos no usan decimales)
        const productPrice = Math.round(product.price)
        return productPrice >= minPrice && productPrice <= maxPrice
      })
    }

    // Filtrar por mascota
    const selectedPets = Array.from(petCheckboxes || [])
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)

    if (selectedPets.length > 0) {
      filteredProducts = filteredProducts.filter((product) => selectedPets.includes(product.pet))
    }

    // Filtrar por marca
    const selectedBrands = Array.from(brandCheckboxes || [])
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)

    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter((product) => selectedBrands.includes(product.brand))
    }

    // Resetear a la primera página después de filtrar
    currentPage = 1

    // Renderizar productos filtrados
    renderProducts()
  }

  // Modificar la función addToCart para que guarde los productos actualizados
  function addToCart(productId) {
    // NUEVA VERIFICACIÓN: Comprobar si el usuario está logueado
    if (!isUserLoggedIn()) {
      if (window.showLoginRequiredModal) {
        window.showLoginRequiredModal()
      }
      return
    }

    const product = products.find((p) => p.id === productId)

    if (product) {
      // Incrementar contador de veces añadido
      product.addCount++

      // Guardar el estado de los productos en localStorage
      saveProductsToLocalStorage()

      // Actualizar producto destacado si es necesario
      updateFeaturedProduct()

      // Verificar si el producto ya está en el carrito
      const existingItem = cartItems.find((item) => item.id === productId)

      if (existingItem) {
        existingItem.quantity++
      } else {
        cartItems.push({
          id: product.id,
          title: product.name,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }

      // Guardar en localStorage y actualizar carrito
      saveCartToLocalStorage(cartItems)
      updateCart()

      // Mostrar notificación
      showAddToCartNotification(product.name)

      // Mostrar la bandeja del carrito
      const cartTray = document.getElementById("cartTray")
      if (cartTray) {
        cartTray.classList.add("active")
      }
    }
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
            <p class="cart-item-price">$${formatPrice(item.price)}</p>
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
        feather.replace()

        // Agregar eventos a los botones de eliminar
        const removeButtons = cartContent.querySelectorAll(".cart-item-remove")
        removeButtons.forEach((button) => {
          button.addEventListener("click", function () {
            event.stopPropagation()
            const index = Number.parseInt(this.getAttribute("data-index"))
            removeFromCart(index)
          })
        })

        // Actualizar total
        if (cartTotal) cartTotal.textContent = `$${formatPrice(total)}`
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
    feather.replace()

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

  // Función para actualizar el producto destacado
  function updateFeaturedProduct() {
    // Obtener el producto más añadido al carrito
    const mostAddedProduct = getMostAddedProduct()
    
    if (mostAddedProduct) {
      // Establecer el producto más añadido como destacado
      featuredProductId = mostAddedProduct.id
      const featuredProduct = mostAddedProduct

      // Actualizar la información del producto destacado en la página
      if (featuredProductImage) featuredProductImage.src = featuredProduct.image
      if (featuredProductTitle) featuredProductTitle.textContent = featuredProduct.name
      if (featuredProductDescription) featuredProductDescription.textContent = featuredProduct.description

      if (featuredProduct.originalPrice) {
        if (featuredProductOriginalPrice) {
          featuredProductOriginalPrice.textContent = `$${formatPrice(featuredProduct.originalPrice)}`
          featuredProductOriginalPrice.style.display = "inline"
        }
      } else {
        if (featuredProductOriginalPrice) featuredProductOriginalPrice.style.display = "none"
      }

      if (featuredProductCurrentPrice)
        featuredProductCurrentPrice.textContent = `$${formatPrice(featuredProduct.price)}`
      
      // Re-renderizar productos para actualizar el destacado
      renderProducts()
    }
  }

  // Función para mostrar el modal de pago con el resumen de compra actualizado
  function showCheckoutModal() {
    // NUEVA VERIFICACIÓN: Comprobar si el usuario está logueado
    if (!isUserLoggedIn()) {
      if (window.showLoginRequiredModal) {
        window.showLoginRequiredModal()
      }
      return
    }

    // Actualizar resumen de compra
    if (checkoutItems) {
      checkoutItems.innerHTML = ""
      let subtotal = 0

      cartItems.forEach((item) => {
        const itemTotal = item.price * (item.quantity || 1)
        subtotal += itemTotal

        const checkoutItem = document.createElement("div")
        checkoutItem.className = "checkout-item"
        checkoutItem.innerHTML = `
        <span class="checkout-item-name">${item.title || item.name} x${item.quantity || 1}</span>
        <span class="checkout-item-price">$${formatPrice(itemTotal)}</span>
      `
        checkoutItems.appendChild(checkoutItem)
      })

      const total = subtotal + SHIPPING_COST

      if (checkoutSubtotal) checkoutSubtotal.textContent = `$${formatPrice(subtotal)}`
      if (checkoutShipping) checkoutShipping.textContent = `$${formatPrice(SHIPPING_COST)}`
      if (checkoutTotal) checkoutTotal.textContent = `$${formatPrice(total)}`
    }

    // Mostrar modal
    if (checkoutModal) checkoutModal.classList.add("active")
  }

  // Modificar el evento del botón de checkout para usar la nueva función
  if (checkoutButton) {
    checkoutButton.addEventListener("click", (event) => {
      // Prevenir el comportamiento por defecto que causa la recarga
      event.preventDefault()
      
      // NUEVA VERIFICACIÓN: Comprobar si el usuario está logueado
      if (!isUserLoggedIn()) {
        if (window.showLoginRequiredModal) {
          window.showLoginRequiredModal()
        }
        return
      }
      
      // Mostrar el modal de checkout
      showCheckoutModal()
    })
  }

  // Declare allCheckoutButtons variable
  const allCheckoutButtons = document.querySelectorAll(".checkout-button")

  if (allCheckoutButtons && allCheckoutButtons.length > 0) {
    allCheckoutButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        // Prevenir el comportamiento por defecto que causa la recarga
        event.preventDefault()
        
        // NUEVA VERIFICACIÓN: Comprobar si el usuario está logueado
        if (!isUserLoggedIn()) {
          if (window.showLoginRequiredModal) {
            window.showLoginRequiredModal()
          }
          return
        }
        
        // Mostrar el modal de checkout
        showCheckoutModal()
      })
    })
  }

  // Función para cerrar el modal de pago
  function closeCheckoutModal() {
    if (checkoutModal) checkoutModal.classList.remove("active")
  }

  // Función para mostrar el modal de producto
  function showProductModal(productId) {
    const product = products.find((p) => p.id === productId)

    if (product && productModal) {
      // Guardar el ID del producto actual
      currentProductId = productId

      // Guardar el precio unitario
      currentProductUnitPrice = product.price

      // Resetear la cantidad a 1
      currentProductQuantity = 1
      if (productQuantityInput) {
        productQuantityInput.value = "1"
      }

      // Actualizar la información del producto en el modal
      if (productModalImage) productModalImage.src = product.image
      if (productModalName) productModalName.textContent = product.name
      if (productModalDescription) productModalDescription.textContent = product.description

      if (product.originalPrice && product.sale) {
        if (productModalOriginalPrice) {
          productModalOriginalPrice.textContent = `$${formatPrice(product.originalPrice)}`
          productModalOriginalPrice.style.display = "inline"
        }
      } else {
        if (productModalOriginalPrice) productModalOriginalPrice.style.display = "none"
      }

      // Mostrar precio unitario
      if (productModalUnitPrice) productModalUnitPrice.textContent = `$${formatPrice(product.price)}`

      // Calcular y mostrar subtotal (inicialmente igual al unitario)
      if (productModalSubtotal) productModalSubtotal.textContent = `$${formatPrice(product.price)}`

      // Calcular y mostrar precio total con envío
      if (productModalCurrentPrice)
        productModalCurrentPrice.textContent = `$${formatPrice(product.price + SHIPPING_COST)}`

      // Mostrar el modal
      productModal.classList.add("active")
    }
  }

  // Función para cerrar el modal de producto
  function closeProductModal() {
    if (productModal) {
      productModal.classList.remove("active")
      currentProductId = null
    }
  }

  // NUEVA FUNCIÓN: Manejar el cambio de cantidad
  function handleQuantityChange(change) {
    if (productQuantityInput) {
      let quantity = Number.parseInt(productQuantityInput.value)
      quantity += change

      // Limitar la cantidad entre 1 y 10
      if (quantity < 1) quantity = 1
      if (quantity > 10) quantity = 10

      productQuantityInput.value = quantity
      currentProductQuantity = quantity

      // Actualizar el precio total dinámicamente
      updateTotalPrice()
    }
  }

  // NUEVA FUNCIÓN: Actualizar el precio total según la cantidad
  function updateTotalPrice() {
    const subtotal = currentProductUnitPrice * currentProductQuantity

    if (productModalSubtotal) {
      productModalSubtotal.textContent = `$${formatPrice(subtotal)}`
    }

    if (productModalCurrentPrice) {
      const totalPrice = subtotal + SHIPPING_COST
      productModalCurrentPrice.textContent = `$${formatPrice(totalPrice)}`
    }
  }

  // NUEVA FUNCIÓN: Validar campos del formulario
  function validateField(input) {
    const value = input.value.trim()
    const type = input.getAttribute("data-type")
    const errorElement = document.getElementById(`${input.id}Error`)
    let isValid = true

    // Quitar clase de error inicialmente
    input.classList.remove("invalid")
    if (errorElement) {
      errorElement.classList.remove("visible")
    }

    // Validar según el tipo de campo
    switch (type) {
      case "text":
        // Solo letras y espacios
        if (value === "" || !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value)) {
          isValid = false
        }
        break
      case "email":
        // Formato de email
        if (value === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          isValid = false
        }
        break
      case "phone":
        // Solo números y algunos caracteres especiales
        if (value === "" || !/^[0-9+\-$$$$\s]+$/.test(value)) {
          isValid = false
        }
        break
      case "address":
        // Al menos 5 caracteres
        if (value === "" || value.length < 5) {
          isValid = false
        }
        break
      case "select":
        // Debe seleccionar una opción
        if (value === "") {
          isValid = false
        }
        break
      case "card":
        // Formato de tarjeta: números y espacios, 16 dígitos en total
        const cardDigits = value.replace(/\D/g, "")
        if (value === "" || cardDigits.length !== 16 || !/^[0-9\s]+$/.test(value)) {
          isValid = false
        }
        break
      case "expiry":
        // Formato MM/AA
        if (value === "" || !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value)) {
          isValid = false
        }
        break
      case "cvv":
        // 3 o 4 dígitos
        if (value === "" || !/^[0-9]{3,4}$/.test(value)) {
          isValid = false
        }
        break
      default:
        // Validación genérica: no vacío
        if (value === "") {
          isValid = false
        }
    }

    // Marcar como inválido si no pasa la validación
    if (!isValid) {
      input.classList.add("invalid")
      if (errorElement) {
        errorElement.classList.add("visible")
      }
    }

    return isValid
  }

  // NUEVA FUNCIÓN: Validar todos los campos del formulario
  function validateAllFields() {
    let allValid = true

    formInputs.forEach((input) => {
      if (!validateField(input)) {
        allValid = false
      }
    })

    return allValid
  }

  // NUEVA FUNCIÓN: Completar la compra
  function completeCheckout() {
    // Validar todos los campos
    if (!validateAllFields()) {
      // Mostrar modal de error
      if (errorModal) {
        errorModal.classList.add("active")
      }
      return
    }

    // Si todos los campos están completos, proceder con la compra
    cartItems = []
    saveCartToLocalStorage(cartItems)
    updateCart()
    closeCheckoutModal()

    // Mostrar mensaje de éxito
    const notification = document.createElement("div")
    notification.className = "add-to-cart-notification"
    notification.innerHTML = `
      <div class="notification-content">
        <i data-feather="check-circle"></i>
        <span>¡Compra realizada con éxito!</span>
      </div>
    `
    document.body.appendChild(notification)

    // Inicializar el icono de Feather en la notificación
    feather.replace()

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

  // Función para agregar eventos de clic a las imágenes de productos
  function addProductImageClickEvents() {
    const productImages = document.querySelectorAll(".product-image")
    productImages.forEach((image) => {
      image.addEventListener("click", function () {
        const productId = Number.parseInt(this.getAttribute("data-id"))
        showProductModal(productId)
      })
    })
  }

  // Eventos para categorías
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Actualizar categoría activa
      categoryLinks.forEach((l) => l.parentElement.classList.remove("active"))
      this.parentElement.classList.add("active")

      // Actualizar categoría actual
      currentCategory = this.getAttribute("data-category")

      // Filtrar productos
      filterProducts()
    })
  })

  // Eventos para búsqueda
  if (searchButton) {
    searchButton.addEventListener("click", filterProducts)
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        filterProducts()
      }
    })
  }

  // Evento para aplicar filtros
  if (applyFiltersButton) {
    applyFiltersButton.addEventListener("click", filterProducts)
  }

  // Evento para el botón de añadir al carrito del producto destacado
  if (featuredProductAddToCartButton) {
    featuredProductAddToCartButton.addEventListener("click", () => {
      if (featuredProductId) {
        addToCart(featuredProductId)
      }
    })
  }

  // Evento para el botón de ver detalles del producto destacado
  if (featuredProductDetailsButton) {
    featuredProductDetailsButton.addEventListener("click", () => {
      if (featuredProductId) {
        showProductModal(featuredProductId)
      }
    })
  }

  // Eventos para el modal de producto
  if (closeProductModalButton) {
    closeProductModalButton.addEventListener("click", closeProductModal)
  }

  if (continueShoppingButton) {
    continueShoppingButton.addEventListener("click", closeProductModal)
  }

  // MODIFICADO: Evento para el botón de proceder al pago en el modal de producto
  if (proceedToCheckoutButton) {
    proceedToCheckoutButton.addEventListener("click", () => {
      if (currentProductId) {
        const product = products.find((p) => p.id === currentProductId)
        if (product) {
          // Añadir al carrito con la cantidad seleccionada
          for (let i = 0; i < currentProductQuantity; i++) {
            addToCart(currentProductId)
          }
        }
      }
      // NUEVO: Cerrar el modal de producto antes de mostrar el de checkout
      closeProductModal()
      showCheckoutModal()
    })
  }

  // NUEVOS EVENTOS: Añadir eventos para los botones de cantidad
  if (decreaseQuantityButton) {
    decreaseQuantityButton.addEventListener("click", () => {
      handleQuantityChange(-1)
    })
  }

  if (increaseQuantityButton) {
    increaseQuantityButton.addEventListener("click", () => {
      handleQuantityChange(1)
    })
  }

  if (productQuantityInput) {
    productQuantityInput.addEventListener("change", () => {
      let quantity = Number.parseInt(productQuantityInput.value)

      // Validar y limitar la cantidad
      if (isNaN(quantity) || quantity < 1) quantity = 1
      if (quantity > 10) quantity = 10

      productQuantityInput.value = quantity
      currentProductQuantity = quantity

      // Actualizar el precio total
      updateTotalPrice()
    })
  }

  // NUEVOS EVENTOS: Añadir eventos para validación de campos
  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this)
    })

    input.addEventListener("input", function () {
      // Validar en tiempo real para quitar el error cuando se corrige
      if (this.classList.contains("invalid")) {
        validateField(this)
      }
    })
  })

  // Eventos para el checkout
  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeCheckoutModal)
  }

  if (cancelCheckoutButton) {
    cancelCheckoutButton.addEventListener("click", closeCheckoutModal)
  }

  // MODIFICADO: Evento para completar la compra con validación
  if (completeCheckoutButton) {
    completeCheckoutButton.addEventListener("click", completeCheckout)
  }

  // Añadir eventos para el modal de error
  if (closeErrorModalButton) {
    closeErrorModalButton.addEventListener("click", () => {
      if (errorModal) {
        errorModal.classList.remove("active")
      }
    })
  }

  if (acceptErrorButton) {
    acceptErrorButton.addEventListener("click", () => {
      if (errorModal) {
        errorModal.classList.remove("active")
      }
    })
  }

  // Inicializar el contador de notificaciones (simulando 3 notificaciones)
  if (notificationCountBadge) {
    notificationCountBadge.textContent = "3"
  }

  // Inicializar la página
  renderProducts()
  updateCart() // Asegurarse de que el carrito se actualice al cargar la página

  // Inicializar el producto destacado con el más añadido al carrito
  if (mostAddedProduct) {
    if (featuredProductImage) featuredProductImage.src = mostAddedProduct.image
    if (featuredProductTitle) featuredProductTitle.textContent = mostAddedProduct.name
    if (featuredProductDescription) featuredProductDescription.textContent = mostAddedProduct.description

    if (mostAddedProduct.originalPrice) {
      if (featuredProductOriginalPrice) {
        featuredProductOriginalPrice.textContent = `$${formatPrice(mostAddedProduct.originalPrice)}`
        featuredProductOriginalPrice.style.display = "inline"
      }
    } else {
      if (featuredProductOriginalPrice) featuredProductOriginalPrice.style.display = "none"
    }

    if (featuredProductCurrentPrice)
      featuredProductCurrentPrice.textContent = `$${formatPrice(mostAddedProduct.price)}`
  }

  // Guardar los productos actualizados en localStorage para que la página principal los use
  saveProductsToLocalStorage()
})

// Función para generar productos para la página principal
function getTopProductsForHomepage(products) {
  // Obtener los productos más añadidos, ordenados por cantidad
  return [...products]
    .sort((a, b) => b.addCount - a.addCount)
    .filter((product) => product.addCount > 0)
    .slice(0, 3)
}