
//Array de productos// 

const productos = [
    {
        id: "moto-0km-01",
        titulo: "Moto-0km-Bajaj",
        imagen: "./img/rouser ns 125 negra.jpg.jpg",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 2400000
    },

    {
        id: "moto-usada-01",
        titulo: "Moto-Usada-Suzuki",
        imagen: "./img/suzuki-gn-125.jpf.jpg",
        categoria: {
            nombre: "Usados",
            id: "usados"
        },
        precio: 1700000
    },

    {
        id: "moto-0km-02",
        titulo: "Moto-0km-Boxer",
        imagen: "./img/boxer-150.jpg.jpg",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 1900000
    },

    {
        id: "moto-0km-04",
        titulo: "Moto-0km-Hero",
        imagen: "./img/Hero-XPulse-200.jpg.webp",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 3400000
    },

    {
        id: "moto-0km-05",
        titulo: "Moto-0km-Vogue",
        imagen: "./img/vogue-300-ds.jpg.jpg",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 5500000
    },


    {
        id: "moto-0km-06",
        titulo: "Moto-0km-Vogue-Rally",
        imagen: "./img/Vogue-Rally-AZUL.jpg.jpg",
        categoria: {
            nombre: "0Km",
            id: "0km"
        },
        precio: 5800000
    },

    {
        id: "moto-usada-02",
        titulo: "Moto-Usada-Himalayan",
        imagen: "./img/HIMALAYAN.jpg.jpg",
        categoria: {
            nombre: "Usados",
            id: "usados"
        },
        precio: 5300000
    },

    {
        id: "moto-usada-03",
        titulo: "Moto-Usada-Interceptor",
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

cargarProductos();


