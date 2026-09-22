let catalogo = [];
let carrito = JSON.parse(localStorage.getItem("carrito_neumotor")) || [];

async function cargarProductos() {
  try {
    const response = await fetch('productos.json');
    const data = await response.json();
    
    let inventarioLocal = JSON.parse(localStorage.getItem("inventario_neumotor"));
    if (!inventarioLocal || inventarioLocal.length === 0) {
      catalogo = data.map(item => ({ ...item, stock: 10 }));
      localStorage.setItem("inventario_neumotor", JSON.stringify(catalogo));
    } else {
      catalogo = inventarioLocal;
    }
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

function formatoMoneda(valor) {
  return "$ " + Number(valor).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function mostrarAlertaAgregado() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto agregado al carrito',
    showConfirmButton: false,
    timer: 1500,
    toast: true
  });
}

function actualizarBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  badges.forEach(b => b.textContent = totalItems);
}

function guardarCarrito() {
  localStorage.setItem("carrito_neumotor", JSON.stringify(carrito));
  actualizarBadge();
  renderizarCarritoUI();
}

function agregarAlCarrito(id) {
  const productoCatalogo = catalogo.find(p => p.id === id);
  if (!productoCatalogo) return;
  const itemEnCarrito = carrito.find(item => item.id === id);
  const cantidadActual = itemEnCarrito ? itemEnCarrito.cantidad : 0;
  
  if (cantidadActual + 1 > productoCatalogo.stock) {
    Swal.fire({
      icon: 'error',
      title: 'Sin stock',
      text: `Solo quedan ${productoCatalogo.stock} unidades de este neumático.`,
      confirmButtonColor: '#d8004f'
    });
    return;
  }
  
  if (itemEnCarrito) {
    itemEnCarrito.cantidad += 1;
  } else {
    carrito.push({ id: id, cantidad: 1 });
  }
  
  guardarCarrito();
  mostrarAlertaAgregado();
}

function cambiarCantidad(id, delta) {
  const itemEnCarrito = carrito.find(item => item.id === id);
  const productoCatalogo = catalogo.find(p => p.id === id);
  if (!itemEnCarrito || !productoCatalogo) return;
  const nuevaCantidad = itemEnCarrito.cantidad + delta;
  
  if (nuevaCantidad > productoCatalogo.stock) {
    Swal.fire({
      icon: 'warning',
      text: `Solo quedan ${productoCatalogo.stock} unidades.`,
      confirmButtonColor: '#d8004f'
    });
    return;
  }
  
  if (nuevaCantidad < 1) return;
  itemEnCarrito.cantidad = nuevaCantidad;
  guardarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(item => item.id !== id);
  guardarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
}

function renderizarCarritoUI() {
  const contenedorItems = document.getElementById("carrito-items");
  const contenedorFooter = document.getElementById("carrito-footer");
  if (!contenedorItems || !contenedorFooter) return;
  contenedorItems.innerHTML = "";
  
  if (carrito.length === 0) {
    contenedorItems.innerHTML = `<p class="text-center text-muted mt-4">Tu carrito está vacío.</p>`;
    contenedorFooter.innerHTML = "";
    return;
  }
  
  let totalPrecio = 0;
  carrito.forEach(item => {
    const producto = catalogo.find(p => p.id === item.id);
    if (!producto) return;
    const subtotal = producto.precio * item.cantidad;
    totalPrecio += subtotal;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${producto.imgSrc}" alt="${producto.titulo}">
      <div class="cart-item-info">
        <h6 class="mb-1" style="font-size: 0.85rem;">${producto.titulo}</h6>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <div class="cart-qty-controls">
            <button class="qty-btn btn-restar" data-id="${producto.id}" ${item.cantidad <= 1 ? 'disabled' : ''}><i class="bi bi-dash"></i></button>
            <span class="qty-value">${item.cantidad}</span>
            <button class="qty-btn btn-sumar" data-id="${producto.id}"><i class="bi bi-plus"></i></button>
            <button class="btn-eliminar-item" data-id="${producto.id}"><i class="bi bi-trash"></i></button>
          </div>
          <strong style="font-size: 0.9rem;">${formatoMoneda(subtotal)}</strong>
        </div>
      </div>
    `;
    contenedorItems.appendChild(div);
  });
  
  contenedorFooter.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="m-0">Total:</h5>
      <h4 class="m-0 text-dark fw-bold">${formatoMoneda(totalPrecio)}</h4>
    </div>
    <div class="d-flex flex-column gap-2">
      <a href="facturacion.html" class="btn btn-action-red w-100 py-2 fw-bold text-center text-decoration-none">FINALIZAR COMPRA</a>
      <button id="btn-vaciar-carrito" class="btn btn-outline-secondary w-100 py-2">Eliminar todos los productos</button>
    </div>
  `;
}

function renderizarTarjetas(lista) {
  const contenedor = document.getElementById("lista-articulos");
  if (!contenedor) return;
  contenedor.innerHTML = "";
  
  if (lista.length === 0) {
    contenedor.innerHTML = `
      <div class="col-12 py-5 text-center text-muted">
        <i class="bi bi-search fs-1 mb-2"></i>
        <h5>No encontramos neumáticos que coincidan con tu búsqueda.</h5>
      </div>
    `;
    return;
  }
  
  lista.forEach(item => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <article class="product-card position-relative p-3">
        <span class="card-badge-ship"><i class="bi bi-truck"></i> GRATIS</span>
        <a href="#" class="card-img-wrap text-decoration-none btn-ver-detalle" data-id="${item.id}">
          <img src="${item.imgSrc}" alt="${item.titulo}" loading="lazy">
        </a>
        <div class="card-body-content mt-2 flex-grow-1 d-flex flex-column justify-content-between">
          <div>
            <h6 class="text-secondary small mb-1">${item.categoria} &bull; ${item.rodado}</h6>
            <a href="#" class="product-title d-block mb-2 btn-ver-detalle" data-id="${item.id}">
              ${item.titulo}
            </a>
          </div>
          <div class="mt-2">
            <span class="price-crossed">${formatoMoneda(item.precioOriginal)}</span>
            <div class="d-flex align-items-center gap-2">
              <span class="price-main">${formatoMoneda(item.precio)}</span>
              <span class="discount-tag">${item.descuento}% OFF</span>
            </div>
            <p class="cuotas-text mb-1">${item.cuotas}</p>
            <p class="transfer-price mb-3">${formatoMoneda(item.precioTransferencia)} con Transferencia</p>
            <button class="btn-card-action btn-agregar-carrito" data-id="${item.id}">
              Agregar al carrito
            </button>
          </div>
        </div>
      </article>
    `;
    contenedor.appendChild(col);
  });
}

function abrirModalDetalle(id) {
  const producto = catalogo.find(p => p.id === id);
  if (!producto) return;
  
  const modalBody = document.getElementById("modal-body-content");
  modalBody.innerHTML = `
    <div class="row align-items-center">
      <div class="col-md-6 text-center mb-4 mb-md-0">
        <img src="${producto.imgSrc}" alt="${producto.titulo}" class="img-fluid" style="max-height: 280px; object-fit: contain;">
      </div>
      <div class="col-md-6">
        <span class="badge bg-secondary mb-2">${producto.categoria} | Rodado ${producto.rodado}</span>
        <h4 class="fw-bold mb-3">${producto.titulo}</h4>
        <p class="text-muted small mb-4">${producto.descripcion}</p>
        <div class="mb-3">
          <span class="price-crossed fs-6">${formatoMoneda(producto.precioOriginal)}</span>
          <div class="d-flex align-items-baseline gap-2">
            <span class="fs-2 fw-bold text-dark">${formatoMoneda(producto.precio)}</span>
            <span class="badge bg-danger">${producto.descuento}% OFF</span>
          </div>
          <p class="text-success fw-bold m-0"><i class="bi bi-wallet2"></i> ${formatoMoneda(producto.precioTransferencia)} con transferencia</p>
        </div>
        <p class="small text-muted mb-4"><i class="bi bi-box-seam"></i> Stock disponible: <strong>${producto.stock} unidades</strong>.</p>
        <button class="btn btn-action-red w-100 py-3 btn-agregar-carrito fw-bold" data-id="${producto.id}" data-bs-dismiss="modal">
          <i class="bi bi-cart-plus"></i> AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  `;
  
  const modal = new bootstrap.Modal(document.getElementById('productoModal'));
  modal.show();
}

function inicializarFiltros() {
  const inputBusqueda = document.getElementById("filtro-input");
  const btnBuscar = document.getElementById("btn-buscar");
  const selectOrden = document.getElementById("orden-select");
  const botonesSubnav = document.querySelectorAll(".btn-cat");
  const linksFiltroLateral = document.querySelectorAll(".filter-link");
  const checksRodado = document.querySelectorAll(".filter-rodado");
  let textoBusqueda = "";
  let categoriaActual = "todos";
  let ordenActual = "";

  function aplicarFiltros() {
    let filtrados = catalogo.filter(item => {
      const coincideTexto = item.titulo.toLowerCase().includes(textoBusqueda) ||
                            item.categoria.toLowerCase().includes(textoBusqueda) ||
                            item.rodado.toLowerCase().includes(textoBusqueda);
      const coincideCat = (categoriaActual === "todos") || (item.categoria.toLowerCase() === categoriaActual.toLowerCase());
      const rodadosSeleccionados = Array.from(checksRodado).filter(c => c.checked).map(c => c.value);
      const coincideRodado = rodadosSeleccionados.length === 0 || rodadosSeleccionados.includes(item.rodado);
      return coincideTexto && coincideCat && coincideRodado;
    });
    
    switch (ordenActual) {
      case "precio-asc":
        filtrados.sort((a, b) => a.precio - b.precio);
        break;
      case "precio-desc":
        filtrados.sort((a, b) => b.precio - a.precio);
        break;
      case "nombre-asc":
        filtrados.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
      default:
        break;
    }
    renderizarTarjetas(filtrados);
  }

  if (inputBusqueda) {
    inputBusqueda.addEventListener("input", (e) => {
      textoBusqueda = e.target.value.trim().toLowerCase();
      aplicarFiltros();
    });
  }
  if (btnBuscar && inputBusqueda) {
    btnBuscar.addEventListener("click", () => {
      textoBusqueda = inputBusqueda.value.trim().toLowerCase();
      aplicarFiltros();
    });
  }
  if (selectOrden) {
    selectOrden.addEventListener("change", (e) => {
      ordenActual = e.target.value;
      aplicarFiltros();
    });
  }

  function setCategoria(cat) {
    categoriaActual = cat;
    botonesSubnav.forEach(b => b.classList.toggle("active", b.dataset.categoria.toLowerCase() === cat.toLowerCase()));
    linksFiltroLateral.forEach(l => l.classList.toggle("active", l.dataset.categoria.toLowerCase() === cat.toLowerCase()));
    aplicarFiltros();
  }
  botonesSubnav.forEach(btn => btn.addEventListener("click", () => setCategoria(btn.dataset.categoria)));
  linksFiltroLateral.forEach(link => link.addEventListener("click", () => setCategoria(link.dataset.categoria)));
  checksRodado.forEach(chk => chk.addEventListener("change", aplicarFiltros));
}

function inicializarFacturacion() {
  const form = document.getElementById("form-facturacion");
  const listaDetalle = document.getElementById("facturacion-detalle");
  const totalElem = document.getElementById("facturacion-total");
  
  if (!form || !listaDetalle || !totalElem) return;
  
  if (carrito.length === 0) {
    listaDetalle.innerHTML = "<p class='text-muted'>Tu carrito está vacío.</p>";
    totalElem.textContent = "$ 0.00";
    form.querySelector("button[type='submit']").disabled = true;
    return;
  }
  
  let total = 0;
  carrito.forEach(item => {
    const producto = catalogo.find(p => p.id === item.id);
    if (producto) {
      const subtotal = producto.precio * item.cantidad;
      total += subtotal;
      const div = document.createElement("div");
      div.className = "d-flex justify-content-between mb-2 pb-2 border-bottom";
      div.innerHTML = `
        <span>${item.cantidad}x ${producto.titulo}</span>
        <span class="fw-bold">${formatoMoneda(subtotal)}</span>
      `;
      listaDetalle.appendChild(div);
    }
  });
  totalElem.textContent = formatoMoneda(total);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let error = "";
    carrito.forEach(item => {
      const prod = catalogo.find(p => p.id === item.id);
      if (prod.stock < item.cantidad) {
        error += `Stock insuficiente para ${prod.titulo}. Disponible: ${prod.stock}.<br>`;
      }
    });
    
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Problema con el stock',
        html: error,
        confirmButtonColor: '#d8004f'
      });
    } else {
      carrito.forEach(item => {
        const prod = catalogo.find(p => p.id === item.id);
        prod.stock -= item.cantidad;
      });
      localStorage.setItem("inventario_neumotor", JSON.stringify(catalogo));
      vaciarCarrito();
      window.location.href = "compra_lista.html";
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await cargarProductos();
  
  const listaArticulos = document.getElementById("lista-articulos");
  if (listaArticulos) {
    renderizarTarjetas(catalogo);
    inicializarFiltros();
  }
  
  actualizarBadge();
  renderizarCarritoUI();
  inicializarFacturacion();

  document.addEventListener("click", e => {
    const btnVerDetalle = e.target.closest(".btn-ver-detalle");
    if (btnVerDetalle) {
      e.preventDefault();
      abrirModalDetalle(btnVerDetalle.dataset.id);
      return;
    }
    
    const btnAgregar = e.target.closest(".btn-agregar-carrito");
    if (btnAgregar) {
      agregarAlCarrito(btnAgregar.dataset.id);
      return;
    }
    
    const btnSumar = e.target.closest(".btn-sumar");
    if (btnSumar) {
      cambiarCantidad(btnSumar.dataset.id, 1);
      return;
    }
    
    const btnRestar = e.target.closest(".btn-restar");
    if (btnRestar) {
      cambiarCantidad(btnRestar.dataset.id, -1);
      return;
    }
    
    const btnEliminar = e.target.closest(".btn-eliminar-item");
    if (btnEliminar) {
      eliminarDelCarrito(btnEliminar.dataset.id);
      return;
    }
    
    if (e.target.closest("#btn-vaciar-carrito")) {
      vaciarCarrito();
      return;
    }
  });
});