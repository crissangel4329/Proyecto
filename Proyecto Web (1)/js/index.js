
let productos = [
    {  nombreproducto: "Cloro", precio: 15, descripcion: "Desinfecta tan bien, que es necesario utilizar una concentración muy baja para poder limpiar adecuadamente.", imgen:"../resource/images/CLORO.jpg"},
    {  nombreproducto: "Desinfectante", precio: 5, descripcion: "Productos utilizado para la destrucción de los microorganismos que habitan sobre una superficie inanimada.", imgen:"../resource/images/DESINFECTANTE.jpg"},
    {  nombreproducto: "Alcohol Etilico", precio: 12, descripcion: "Productos utilizado para la destrucción de los microorganismos que habitan sobre una superficie inanimada.", imgen:"../resource/images/ACOHOL-HETILICO.jpg"},

    {  nombreproducto: "Alcohol en Gel", precio: 13, descripcion: "El alcohol mata entre un 99,99% y un 99,999% de las bacterias en un minuto, y es un efectivo viricida y fungicida. Se caracteriza por la rapidez del comienzo de su acción (unos 15 segundos).", imgen:"../resource/images/ALCOHOL-GEL.jpg"},
    {  nombreproducto: "Jabón Líquido", precio: 1.25, descripcion: "El Jabón Líquido para Manos está diseñado para la limpieza y humectación de las manos, sin provocar resequedad después de su aplicación.", imgen:"../resource/images/JABON-LIQUIDO.jpg"},
    {  nombreproducto: "Suavizante de Ropa", precio: 6, descripcion: "El suavizante se usa para conseguir una colada suave, esponjosa, con volumen y perfumada. Gracias a sus tensioactivos catiónicos, que se adhieren a las fibras del tejido, la ropa es suave.", imgen:"../resource/images/SUAVIZANTE-ROPA.jpg"},

    
    {  nombreproducto: "Shampoo para Auto", precio: 13, descripcion: "es ideal para el cuidado rápido de la pintura durante el lavado, ya que elimina la suciedad a fondo y cubre la pintura con una película protectora de cera de carnauba.", imgen:"../resource/images/SHAMPOO-AUTO.jpg"},
    {  nombreproducto: "Desengrasante", precio: 1.25, descripcion: "Desinfectante que mata el 99.9% de virus y bacterias y además corta la grasa más difícil.", imgen:"../resource/images/DESENGRASANTE.jpg"},
    {  nombreproducto: "Amonio Cuaternario", precio: 6, descripcion: "Amplio espectro bactericida, fungicida y virucida. Su mecanismo de actuación, penetrando y rompiendo la membrana citroplasmática, degradando proteínas y ácidos nucleicos y, finalmente, provocando la lisis celular, le confiere excelentes propiedades frente a todo tipo de microorganismos.", imgen:"../resource/images/AMONIO-CUATERNARIO.jpg"},
    {  nombreproducto: "Abrillantador para Paneles de Carros", precio: 13, descripcion: "Protege contra los rayos UV, no es pegajoso, sirve par sacar el brillo los asientos del auto", imgen:"../resource/images/ABRILLANTADOR-AUTOS.jpg"},

  ];

  function AgregadoCar(){
    alert ("Producto Agregado al Carrito")
  }

  function CargarProductos(){
  let producto=""

  productos.forEach(p =>{
     producto +=
                        `
                        <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                          <img src="${p.imgen}">
                          <div class="card-body mt-5">
                            <h4 class="card-title"><b>${p.nombreproducto} <code>$${p.precio}</code></b></h4>
                              <div class="text-justify" >
                                  <p class="card-text">${p.descripcion}</p>
                              </div>
                            <br></br>
                           
                           <button  class="btnadd" onclick="AgregadoCar()" ><b>Agregar al Carrito</b></button>
                        </div>
                        </div>

                      </div>
                        `
  })
  document.getElementById("cardProductos").innerHTML= producto;
  }