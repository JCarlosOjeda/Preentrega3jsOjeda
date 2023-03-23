class Adicional {
    constructor(nombre, precio, img, id) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.img = img;
        this.id = id;
    }
}



producto0=(new Adicional("Precio del Salon Fines de semana", "45000", "parque1", "1"))
producto1=(new Adicional("Precio del Salon Mediodias de L a V", "36000", "multiple", "2"))
producto2=(new Adicional("Precio del Salon Tarde y Noche L a V", "40500", "interiorV", "3"))
producto3=(new Adicional("Maquina de Helados", "12000", "helados", "4"))
producto4=(new Adicional("Cabina de Fotos", "9500", "fotocabina", "5"))
producto5=(new Adicional("Show de Magia", "6500", "animacion", "6"))
producto6=(new Adicional("Show de Burbujas", "3500", "burbujaR", "7"))
producto7=(new Adicional("Tatuajes", "4500", "tatuajes", "8"))
producto8=(new Adicional("Personajes", "10000", "personaje", "9"))
const adicionales = [producto0, producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]
mostrarProductos();


function mostrarProductos() {
    let productos = document.getElementById("productos");
    for (let item of adicionales) {
        productos.innerHTML +=
            `<div class="card bg-success bg-opacity-75 text-center titulosh2C" style="width: 18rem;">
            <img src=./images/${item.img}.jpg class=" w-100 img-fluid" alt="...">
                <div class="card-body">
                <h2 class="card-title">${item.nombre}</h2>
                <h3 class="card-text">$${item.precio}</h3>
                    <a id="btn ${item.id}" href="#" class="btn btn-warning" onclick= "agregarAlPresupuesto(${item.id})">Agregar</a>
                </div>
                </div>`
    }
}

function agregarAlPresupuesto(codigo) {

    let existe = false;

    let carrito = JSON.parse(localStorage.getItem('carritoPresupueto')) || [];

    for (let item of adicionales) {

        if (item.id == codigo) {
            existe = carrito.some(prod => prod.id == codigo);
            if (!existe) {
                carrito.push(item);

            } else {
                carrito.push(item);
            }
        }

        localStorage.setItem("carritoPresupuesto", JSON.stringify(carrito))
}
    }

/*alert("Bienvenido al presupuestador OnLine de Verde Manzana");

alert("Lunes a Viernes por la tarde 10% de descuento y los Mediodias un 20%");

let precioSdescuento = 45000;

let presupuestoTotal = 0;

let seleccioneDia = prompt("Seleccione 1 para Sabados o Domingos \nSeleccione 2 para los días de semana");
while (seleccioneDia != 1 && seleccioneDia != 2) {
    alert("El valor ingresado no es correcto : Seleccione 1 para Sabados o Domingos \nSeleccione 2 para días de semana")
    seleccioneDia = prompt("Seleccione 1 para Sabados o Domingos \nSeleccione 2 para días de semana");
}

if (seleccioneDia == "1") {
    presupuestoTotal = precioSdescuento
    alert(`El precio del Salon es de $${presupuestoTotal}`);
    pregunta();
}
else {
    descuento();
    pregunta();
}



function descuento() {
    let horario = prompt("Seleccione 1 para el mediodia \nSeleccione 2 para la tarde o  noche");

    while (horario != 1 && horario != 2) {
        alert("Seleccione 1 para el mediodia \nSeleccione 2 para la tarde o  noche");

        horario = prompt("Seleccione 1 para el mediodia \nSeleccione 2 para la tarde o  noche");
    }

    if (horario == 1) {
        presupuestoTotal = precioSdescuento - precioSdescuento * 0.20;

    } else {
        presupuestoTotal = precioSdescuento - precioSdescuento * 0.10;
    }

    alert(`El precio del Salon es de $ ${presupuestoTotal}`)
}



function pregunta() {
    let pregunta = prompt("¿Desea agregar adicionales? S/N").toLocaleUpperCase();

    while (pregunta != "S" && pregunta != "N") {
        pregunta = prompt("La opcion no es valida, ¿Desea agregar adicionales? S/N").toLocaleUpperCase();
    }

    if (pregunta == "S") {
        alert("Estos son nuestros Adicionales");
        let nuestrosAdicionales = adicionales.map(
            (adicional) => adicional.nombre + " $" + adicional.precio
        );
        alert(nuestrosAdicionales.join("\n"));

    } else
        if (pregunta == "N") {
            alert(`El precio del Salon es de $${presupuestoTotal}`);
        }



    while (pregunta === "S") {
        adicional = prompt("Escribí el Adicional que te gusta").toLocaleUpperCase();
        /*let precio = 0

        if (adicional == "MAQUINA DE HELADOS" || adicional == "CABINA DE FOTOS" || adicional == "SHOW DE MAGIA"
            || adicional == "SHOW DE BURBUJAS" || adicional == "TATUAJES" || adicional == "PROYECTOR Y PANTALLA") {

            switch (adicional) {
                case "MAQUINA DE HELADOS":
                    precio = 12000
                    break;
                case "CABINA DE FOTOS":
                    precio = 9500
                    break;
                case "SHOW DE MAGIA":
                    precio = 6500
                    break;
                case "SHOW DE BURBUJAS":
                    precio = 3500
                    break;
                case "TATUAJES":
                    precio = 4500
                    break;
                case "PROYECTOR Y PANTALLA":
                    precio = 3500
                    break;
                default:
                    break;
            }

            carrito.push({ adicional, precio })


        } else {
            alert("Elija un Adicional valido")
        }
} 
        agregarAlCarrito();
        pregunta = prompt("¿Desea agregar mas Adicionales? S/N").toLocaleUpperCase()

        while (pregunta == "N") {
            alert("Gracias por confiar en nosotros")
            carrito.forEach((carritoFinal) => {
                alert(` ${carritoFinal.adicional} el precio del Adicional es $${carritoFinal.precio}`)
            })
            break;
        }
    }


    console.log(adicional);


}


function agregarAlCarrito() {
    let existe = true;
    existe = adicionales.some(item => item.nombre === adicional);
    while (existe === false) {
        adicional = prompt("Elija un Adicional valido . Intente nuevamente");
        existe = adicionales.some(item => item.nombre === adicional);
    }
    for (let item of productos) {
        if (item.nombre === adicional) {
            carrito.push(item);
        }
    }
}


const carritoTotal = carrito.reduce((acc, item) => acc + item.precio, 0)
alert(`El total a pagar es $${carritoTotal + presupuestoTotal}`)*/


