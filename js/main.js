const stock = {
    "manzanas": 10,
    "bananas": 5,
    "naranjas": 0
};

let continuar = true;

do {
    const producto = prompt("Ingrese el nombre del producto (manzanas, bananas, naranjas) o escriba 'ESC' para salir:");
    
    if (producto === 'ESC') {
        continuar = false;
        alert("Saliendo del programa.");
    } else if (stock.hasOwnProperty(producto)) {
        const cantidadSolicitada = parseInt(prompt(`¿Cuántas ${producto} desea?`));
        
        if (cantidadSolicitada <= 0) {
            alert("La cantidad debe ser mayor que cero.");
        } else if (cantidadSolicitada <= stock[producto]) {
            alert(`Stock disponible de ${producto}: ${stock[producto]} unidades. Su pedido ha sido procesado.`);
            stock[producto] -= cantidadSolicitada; // Actualiza el stock
        } else {
            alert(`No hay suficiente stock de ${producto}. Solo quedan ${stock[producto]} unidades.`);
        }
    } else {
        alert("Producto no reconocido. Intente de nuevo.");
    }
} while (continuar);
