let productos = [
  { codigo: 1, nombreproducto: "Abrillantador", precio: 15, cantidad: 1 },
  { codigo: 2, nombreproducto: "Alcohol Elitico", precio: 12, cantidad: 1 },
  { codigo: 3, nombreproducto: "Alcohol Gel", precio: 13, cantidad: 1 },
  { codigo: 4, nombreproducto: "Amoniaco", precio: 5, cantidad: 1 },
  { codigo: 5, nombreproducto: "Cloro", precio: 1.25, cantidad: 1 },
  { codigo: 6, nombreproducto: "Desengrasante", precio: 8, cantidad: 1 },
  { codigo: 7, nombreproducto: "Desinfectante", precio: 6, cantidad: 1 },
  { codigo: 8, nombreproducto: "Jabón Liquido para manos", precio: 9, cantidad: 1 },
  { codigo: 9, nombreproducto: "Shampoo para auto", precio: 7, cantidad: 1 },
  { codigo: 10, nombreproducto: "Suavizante de ropa", precio: 6, cantidad: 1 },
 

];

let total=0;

function crearTabla(lista) {
 total=0

  let Tabla = `
                        <thead>
                        <tr>
                            <th style="width: 200px; text-align: center;">Productos</th>
                            <th style="width: 200px; text-align: center;">Precio</h>
                            <th style="width: 200px; text-align: center;">Cantidad</th>
                            <th style="width: 200px; text-align: center;">Total</th>
                            <th style="width: 200px; text-align: center;">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        `;
  lista.forEach((p) => {
    let fila = " <tr>";

    fila += `<td>${p.nombreproducto}</td>`;

    fila += `<td style= "text-align: center;">$${p.precio}</td>`;

    fila += `<td style="text-align: center;">`;
    fila +=
      '<a  onclick="agregarCantidad(' +
      JSON.stringify(p.codigo) +
      ')" > <span class="material-icons"> arrow_upward </span></a>  ';
    fila += `<span style="font-size: 20px;">${p.cantidad}</span>`;
    fila +=
      '   <a onclick="quitarCantidad(' +
      JSON.stringify(p.codigo) +
      ')" > <span class="material-icons"> arrow_downward</span></a>  ';

    fila += `<td style= "text-align: center;">$${p.precio * p.cantidad}</td>`;

    fila += `<td style="text-align: center;">`;
    fila +=
      '<button  onclick="eliminar(' +
      JSON.stringify(p.codigo) +
      ')" ><span class="material-icons">delete </span></button> </td></tr>';

    Tabla += fila;
    total += p.precio*p.cantidad;
  });
  Tabla += "</tbody>";

  return Tabla;
}

function mostrar() {
  document.getElementById("listacarrito").innerHTML = crearTabla(productos);
  document.getElementById("total").innerHTML ="TOTAL $"+ total;
}

function agregarCantidad(codigo) {
  total=0
  productos.forEach((p) => {
    p.cantidad = p.codigo === codigo ? p.cantidad + 1 : p.cantidad;
  });
  mostrar();
}
function quitarCantidad(codigo) {
  total=0
  productos.forEach((p) => {
    p.cantidad = p.codigo === codigo && p.cantidad > 0 ? p.cantidad - 1 : p.cantidad;
  });
  mostrar();
}
function eliminar(codigo) {
  if (confirm("Está seguro de eliminar el producto")) {
    const copiaProductos = productos.filter((p) => p.codigo != codigo);
    productos = copiaProductos;
  
    document.getElementById("listacarrito").innerHTML = crearTabla(productos);
    document.getElementById("total").innerHTML ="TOTAL $"+ total;

  }


}
function pagar(){
  
  if(productos.length == 0){
    alert("El carrito está vacío");
  }
  else{

    if (confirm("Desea realizar la compra")) {
      alert("Gracias por su compra");
      productos = []
      document.getElementById("listacarrito").innerHTML = crearTabla(productos);
      document.getElementById("total").innerHTML = "TOTAL $"+ total +"";
    } 
 

  }


}

