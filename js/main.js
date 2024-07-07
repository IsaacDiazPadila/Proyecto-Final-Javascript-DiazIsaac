let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



//Array de productos// 

/*const productos = [
    {
        id: "moto-0km-01",
        titulo: "Bajaj rouser ns 125",
        imagen: "./img/rouser ns 125 negra.jpg.jpg",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 2400000
    },

    {
        id: "moto-usada-01",
        titulo: "Suzuki gn 125",
        imagen: "./img/suzuki-gn-125.jpf.jpg",
        categoria: {
            nombre: "Usados",
            id: "usados"
        },
        precio: 1700000
    },

    {
        id: "moto-0km-02",
        titulo: "Bajaj Boxer 150 BM",
        imagen: "./img/boxer-150.jpg.jpg",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 1900000
    },

    {
        id: "moto-0km-04",
        titulo: "Hero xpulse 200",
        imagen: "./img/Hero-XPulse-200.jpg.webp",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 3400000
    },

    {
        id: "moto-0km-05",
        titulo: "Vogue 300 DS",
        imagen: "./img/vogue-300-ds.jpg.jpg",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 5500000
    },


    {
        id: "moto-0km-06",
        titulo: "Vogue Rally",
        imagen: "./img/Vogue-Rally-AZUL.jpg.jpg",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 5800000
    },

    {
        id: "moto-usada-02",
        titulo: "Royale Himalayan",
        imagen: "./img/HIMALAYAN.jpg.jpg",
        categoria: {
            nombre: "Usados",
            id: "usados"
        },
        precio: 5300000
    },

    {
        id: "moto-usada-03",
        titulo: "Royale Interceptor",
        imagen: "./img/Interceptor.jpg.jpg",
        categoria: {
            nombre: "Usados",
            id: "usados"
        },
        precio: 6500000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");


// funcion que carga los productos en el main //
function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = ` 
        <img src="${producto.imagen}" class="producto-imagen" alt="${producto.titulo}">
        <div class="producto-detalles">
        <h4 class="producto-titulo">${producto.titulo}</h4>
        <p class="producto-precio">Precio: $ ${producto.precio}</p>
        <button href="#" class="producto-comprar" id="${producto.id}">Comprar</button>
        </div> `;

        contenedorProductos.append(div)
        
    })
} 

cargarProductos();*/