//LEE EL PARAMETRO ID DESDE LA URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//BUSCA EL PRODUCTO SEGUN EL ID
const producto = productos.find(p => p.id === id);

//MOSTRAR SI EL PRODUCTO EXISTE
if(producto){
    document.getElementById("producto-nombre").textContent = producto.nombre;

    //IMAGEN
    const imagen = document.querySelector(".detalle-imagen img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    //ESPECIFICACIONES
    const listaEspecificaciones = document.getElementById("prodcuto-especificaciones").querySelector("ul");
    listaEspecificaciones.innerHTML = "";
    producto.especificaciones.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaEspecificaciones.appendChild(li);
    });

    //METODOS DE ENTREGA
    const listaEntrega = document.getElementById("producto-entrega").querySelector("ul");
    listaEntrega.innerHTML = "";
    producto.entrega.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaEntrega.appendChild(li);
    });

    //PRECIO
    document.getElementById("producto-precio").querySelector("p").textContent = `$${producto.precio.toFixed(2)}`;


    //BANCOS
    const listaBancos = document.querySelector(".detalle-bancos ul");
    listaBancos.innerHTML = "";
    producto.bancos.forEach(banco => {
        const li = document.createElement("li");
        li.textContent = banco;
        listaBancos.appendChild(li);
    });

    //DESCRIPCION
    document.getElementById("producto-descripcion").querySelector("p").textContent = producto.descripcion;
} else{
    document.querySelector(".detalle-container").innerHTML = "<h2>Producto no encontrado</h2>";
}