<?php
chmod('eventos.json', 0666);
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if (!empty($_POST['name']) && !empty($_POST['lugar']) && !empty($_POST['horario']) && !empty($_POST['descripcion'])) {
    $data = array(
      'name' => $_POST['name'],
      'lugar' => $_POST['lugar'],
      'horario' => $_POST['horario'],
      'descripcion' => $_POST['descripcion']
    );
    $json = json_encode($data);
    file_put_contents('eventos.json', $json);
  }
}
?>