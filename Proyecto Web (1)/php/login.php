<?php

$usuario_c = "admin";
$clave_c = "admin";

$usuario_c1 = "empleado";
$clave_c1 = "empleado";

$usuario_c2 = "cliente";
$clave_c2 = "cliente";

$usuario = $_POST["txtusuario"];
$clave = $_POST["txtpsw"];


if (($usuario == $usuario_c && $clave == $clave_c)) {

    $rol="admin";
}
else {

    echo "El usuario o la contraseña son incorrectos";
}


if (($usuario == $usuario_c1 && $clave == $clave_c1)) {

    $rol="emp";
}
else {

    echo "El usuario o la contraseña son incorrectos";
}


if (($usuario == $usuario_c2 && $clave == $clave_c2)) {

    $rol="cli";
}
else {

    echo "El usuario o la contraseña son incorrectos";
}

switch ($rol) {
    case 'admin':
        session_start();
        $_SESSION["txtusuario"] = $usuario;
        header("location:../html/Amdin.html");
        break;
    case 'emp':
        session_start();
        $_SESSION["txtusuario"] = $usuario;
        header("location:../html/inventario.html");
        break;
    case 'cli':
        session_start();
        $_SESSION["txtusuario"] = $usuario;
        header("location:../html/index.html");
        break;
    default:
        header("Location: ../index.html");
        break;
}
    
    
