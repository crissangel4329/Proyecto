//ejecutar funcion en el evento del click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//declaracion de variables

var inventario_menu = document.getElementById("menu_inventario");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//evento para mostrar y ocultar el menu
    function open_close_menu(){
        body.classList.toggle("body_move");
        inventario_menu.classList.toggle("menu_inventario_move");

    }
//si el ancho de la pagina es menor a 760px, ocultara el menu
if(window.innerWidth < 760){

    body.classList.add("body_move");
    inventario_menu.classList.add("menu_inventario_move");
}

//haciendo el menu adaptable

window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        body.classList.remove("body_move");
        inventario_menu.classList.remove("menu_inventario_move");
    }
    if(window.innerWidth < 760){
        body.classList.add("body_move");
        inventario_menu.classList.add("menu_inventario_move");
    }
});
