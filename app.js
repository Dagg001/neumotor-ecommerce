const catalogoNeumaticos = [
  {
    id: "1",
    titulo: "Neumático 175/65 R14 Fate Maxisport 2 82T",
    categoria: "Auto",
    rodado: "R14",
    precioOriginal: 114136,
    precio: 95235,
    descuento: 17,
    cuotas: "6 x $15.872,50 sin interés",
    precioTransferencia: 82854.45,
    imgSrc: "Img local/1.png",
    stock: 12,
    descripcion: "Excelente rendimiento kilométrico y adherencia en piso mojado. Ideal para vehículos compactos y uso urbano diario."
  },
  {
    id: "2",
    titulo: "Neumático 165/70 R13 Aptany RP203 79T",
    categoria: "Auto",
    rodado: "R13",
    precioOriginal: 146526,
    precio: 77952,
    descuento: 47,
    cuotas: "6 x $12.992,00 sin interés",
    precioTransferencia: 67818.24,
    imgSrc: "Img local/2.png",
    stock: 8,
    descripcion: "Diseño optimizado para bajo consumo de combustible y marcha silenciosa en carretera y ciudad."
  },
  {
    id: "3",
    titulo: "Neumático 185/65 R15 Kumho ES31 88H",
    categoria: "Auto",
    rodado: "R15",
    precioOriginal: 167542,
    precio: 158484,
    descuento: 5,
    cuotas: "6 x $26.414,00 sin interés",
    precioTransferencia: 137881.08,
    imgSrc: "Img local/3.png",
    stock: 15,
    descripcion: "Compuesto ecológico de sílice que asegura un frenado óptimo y alta resistencia al desgaste irregular."
  },
  {
    id: "4",
    titulo: "Neumático 205/55 R16 Kumho Ecsta PS31 91V",
    categoria: "Deportivo",
    rodado: "R16",
    precioOriginal: 216496,
    precio: 156740,
    descuento: 27,
    cuotas: "6 x $26.123,33 sin interés",
    precioTransferencia: 136363.80,
    imgSrc: "Img local/4.png",
    stock: 6,
    descripcion: "Diseñado para brindar precisión de maniobra y estabilidad direccional a altas velocidades con drenaje rápido de agua."
  },
  {
    id: "5",
    titulo: "Neumático 215/65 R16 Pirelli Scorpion ATR 98T",
    categoria: "SUV",
    rodado: "R16",
    precioOriginal: 260000,
    precio: 215800,
    descuento: 17,
    cuotas: "6 x $35.966,66 sin interés",
    precioTransferencia: 187746.00,
    imgSrc: "Img local/5.png",
    stock: 10,
    descripcion: "Neumático todo terreno versátil, ofrece confort acústico en asfalto y gran tracción en caminos de tierra o ripio."
  },
  {
    id: "6",
    titulo: "Neumático 265/65 R17 Bridgestone Dueler A/T 112T",
    categoria: "Camioneta",
    rodado: "R17",
    precioOriginal: 390000,
    precio: 325000,
    descuento: 16,
    cuotas: "6 x $54.166,67 sin interés",
    precioTransferencia: 282750.00,
    imgSrc: "Img local/6.png",
    stock: 4,
    descripcion: "Construcción reforzada para pick-ups medianas y pesadas. Máxima resistencia a perforaciones y cortes en condiciones severas."
  },
  {
    id: "7",
    titulo: "Neumático 195/65 R15 Michelin Primacy 4 91V",
    categoria: "Auto",
    rodado: "R15",
    precioOriginal: 245000,
    precio: 199900,
    descuento: 18,
    cuotas: "6 x $33.316,66 sin interés",
    precioTransferencia: 173913.00,
    imgSrc: "Img local/7.png",
    stock: 9,
    descripcion: "Referencia en durabilidad y seguridad. Distancia de frenado reducida en piso húmedo hasta el último milímetro de dibujo."
  },
  {
    id: "8",
    titulo: "Neumático 225/45 R17 Goodyear Eagle F1 94W",
    categoria: "Deportivo",
    rodado: "R17",
    precioOriginal: 298000,
    precio: 245000,
    descuento: 17,
    cuotas: "6 x $40.833,33 sin interés",
    precioTransferencia: 213150.00,
    imgSrc: "Img local/8.png",
    stock: 7,
    descripcion: "Neumático de ultra alto rendimiento. Agarre superior en curvas y respuesta inmediata al volante."
  },
  {
    id: "9",
    titulo: "Neumático 195/70 R15C Continental VanContact 104R",
    categoria: "Utilitario",
    rodado: "R15",
    precioOriginal: 230000,
    precio: 189000,
    descuento: 18,
    cuotas: "6 x $31.500,00 sin interés",
    precioTransferencia: 164430.00,
    imgSrc: "Img local/9.png",
    stock: 14,
    descripcion: "Especial para utilitarios y furgones de carga. Flancos robustecidos y resistencia adicional contra roces de cordón."
  },
  {
    id: "10",
    titulo: "Neumático 225/60 R18 Yokohama Bluearth RV-02 100V",
    categoria: "SUV",
    rodado: "R18",
    precioOriginal: 340000,
    precio: 289000,
    descuento: 15,
    cuotas: "6 x $48.166,67 sin interés",
    precioTransferencia: 251430.00,
    imgSrc: "Img local/10.png",
    stock: 5,
    descripcion: "Confort premium y estabilidad anti-bamboleo desarrollada específicamente para crossovers y SUVs modernas."
  },
  {
    id: "11",
    titulo: "Neumático 175/70 R13 Firestone F-700 82T",
    categoria: "Auto",
    rodado: "R13",
    precioOriginal: 120000,
    precio: 98000,
    descuento: 18,
    cuotas: "6 x $16.333,33 sin interés",
    precioTransferencia: 85260.00,
    imgSrc: "Img local/11.png",
    stock: 20,
    descripcion: "Equilibrio justo entre economía, durabilidad y tracción en suelo seco y mojado."
  },
  {
    id: "12",
    titulo: "Neumático 235/75 R15 Hankook Dynapro AT2 109T",
    categoria: "Camioneta",
    rodado: "R15",
    precioOriginal: 310000,
    precio: 259000,
    descuento: 16,
    cuotas: "6 x $43.166,67 sin interés",
    precioTransferencia: 225330.00,
    imgSrc: "Img local/12.png",
    stock: 8,
    descripcion: "Tecnología de bordes escalonados para tracción constante en barro y nieve, con excelente durabilidad en asfalto."
  }
];

function formatoMoneda(valor) {
  return "$ " + Number(valor).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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
        <a href="articulo.html?id=${item.id}" class="card-img-wrap text-decoration-none">
          <img src="${item.imgSrc}" alt="${item.titulo}" loading="lazy">
        </a>
        <div class="card-body-content mt-2 flex-grow-1 d-flex flex-column justify-content-between">
          <div>
            <h6 class="text-secondary small mb-1">${item.categoria} &bull; ${item.rodado}</h6>
            <a href="articulo.html?id=${item.id}" class="product-title d-block mb-2">
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
            <a href="articulo.html?id=${item.id}" class="btn-card-action">
              Ver detalles
            </a>
          </div>
        </div>
      </article>
    `;
    contenedor.appendChild(col);
  });
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
    let filtrados = catalogoNeumaticos.filter(item => {
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
  botonesSubnav.forEach(btn => {
    btn.addEventListener("click", () => setCategoria(btn.dataset.categoria));
  });
  linksFiltroLateral.forEach(link => {
    link.addEventListener("click", () => setCategoria(link.dataset.categoria));
  });
  checksRodado.forEach(chk => {
    chk.addEventListener("change", aplicarFiltros);
  });
}

function generarDetalleDeArticulo() {
  const contenedor = document.getElementById("detalle-articulo");
  if (!contenedor) return;
  const urlParams = new URLSearchParams(window.location.search);
  const idArticulo = urlParams.get("id");
  const neumático = catalogoNeumaticos.find(item => item.id === idArticulo);
  if (!neumático) {
    contenedor.innerHTML = `
      <div class="text-center py-5">
        <h3 class="text-danger">Neumático no encontrado</h3>
        <p class="text-muted">El código solicitado no corresponde a ningún producto disponible.</p>
        <a href="Index.html" class="btn btn-dark">Volver a la tienda</a>
      </div>
    `;
    return;
  }
  document.title = `Neumotor - ${neumático.titulo}`;
  contenedor.innerHTML = `
    <div class="row align-items-center">
      <div class="col-md-6 text-center">
        <div class="detail-img-container p-4 border rounded">
          <img src="${neumático.imgSrc}" alt="${neumático.titulo}" class="img-fluid">
        </div>
      </div>
      <div class="col-md-6 mt-4 mt-md-0">
        <span class="badge bg-secondary mb-2">${neumático.categoria} | Rodado ${neumático.rodado}</span>
        <h2 class="fw-bold mb-3">${neumático.titulo}</h2>
        <p class="text-muted">${neumático.descripcion}</p>
        <div class="mb-3">
          <span class="price-crossed fs-6">${formatoMoneda(neumático.precioOriginal)}</span>
          <div class="d-flex align-items-baseline gap-2">
            <span class="fs-2 fw-bold text-dark">${formatoMoneda(neumático.precio)}</span>
            <span class="badge bg-danger">${neumático.descuento}% OFF</span>
          </div>
          <p class="text-success fw-bold m-0"><i class="bi bi-wallet2"></i> ${formatoMoneda(neumático.precioTransferencia)} con transferencia bancaria</p>
          <small class="text-muted">${neumático.cuotas}</small>
        </div>
        <p class="small text-muted mb-4"><i class="bi bi-box-seam"></i> Stock disponible: <strong>${neumático.stock} unidades</strong> en depósito.</p>
        <div class="d-flex gap-2">
          <button class="btn btn-action-red px-4 py-2" disabled title="Carrito deshabilitado">
            <i class="bi bi-cart-plus"></i> Agregar al carrito
          </button>
          <a href="Index.html" class="btn btn-outline-secondary px-4 py-2">Seguir explorando</a>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const listaArticulos = document.getElementById("lista-articulos");
  if (listaArticulos) {
    renderizarTarjetas(catalogoNeumaticos);
    inicializarFiltros();
  }
  const detalleContainer = document.getElementById("detalle-articulo");
  if (detalleContainer) {
    generarDetalleDeArticulo();
  }
});