<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carta</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <div class="container-letter">
      <div class="cover"></div>
      <div class="diamond"></div>
      <div class="paper" id="mainMessage">
        <button id="imageButton">
          <img src="INVITAR.jpg" alt="Imagen especial">
        </button>
      </div>
      <div class="letter"></div>
    </div>
    <div class="options">
      <button id="open">Abrir</button>
      <button id="close">Cerrar</button>
    </div>
  </main>

  <!-- Modal -->
  <div id="modal" class="modal">
    <div class="modal-content">
      <p>¡Has sido invitado!</p>
      <button id="modal-close">Ver</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
