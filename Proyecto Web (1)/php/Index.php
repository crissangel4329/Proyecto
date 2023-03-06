<?php
 include("BaseDatos.php");
 session_start();
 ?>
<html>
<head>
 <!-- BOOTSTRAP 4 -->
 <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css">
<!-- FONT AWESOEM -->
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

</head>
<body>
<nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="index.php">PHP MySQL CRUD</a>
      </div>
 </nav>
<main class="container p-4">
    <div class="row">
        <div class="col-md-4">  
            <!-- mensajes -->
            <?php if (isset($_SESSION['message'])) { ?>
                <div class="alert alert-<?= $_SESSION['message_type']?> alert-dismissible fade show" role="alert">
                        <?= $_SESSION['message']?>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                </div>
            <?php session_unset(); } ?>    

            <!-- formulario -->
            <div class="card card-body">
                <form action="guardar.php" method="POST">
                    <div class="form-group">
                        <input type="text" name="titulo" class="form-control" placeholder="agenda titulo" autofocus>
                    </div>
                    <div class="form-group">
                        <textarea name="descripcion" rows="2" class="form-control" placeholder="agenda descripcion"></textarea>
                    </div>
                    <input type="submit" name="save_agenda" class="btn btn-success btn-block" value="Guardar agenda">
                </form>
            </div>
        </div>
        <div class="col-md-8">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>descripcion</th>
                        <th>Fecha creacion</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody> 
                <?php
                 $query = "SELECT * FROM agenda";
                 $result = mysqli_query($conn ,  $query);
                 
                 while($row = mysqli_fetch_assoc( $result))
                 {
                ?>           
                    <tr>
                        <td><?php echo $row["titulo"] ?></td>
                        <td><?php echo $row["descripcion"] ?></td>
                        <td><?php echo $row["fecha_creacion"] ?></td>
                        <td>
                        <a href="actualizar.php?id=<?php echo $row["id"] ?>" class="btn btn-secondary">
                            <i class="fas fa-marker"></i>
                        </a>
                        <a href="eliminar.php?id=<?php echo $row["id"] ?> " class="btn btn-danger">
                            <i class="far fa-trash-alt"></i>
                        </a>
                        </td>
                    </tr>
                <?php }?>
                </tbody>
            </table>
        </div>
    </div>
</main>

<!-- BOOTSTRAP 4 SCRIPTS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>
