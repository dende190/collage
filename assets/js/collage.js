(function() {
  (
    document
    .querySelectorAll('.jsImagenContenedor')
    .forEach(
      (dImagenContenedor) => {
        dImagenContenedor
        .addEventListener(
          'click',
          function() {
            const mensaje = dImagenContenedor.dataset.mensaje;
            document.querySelector('.jsMensaje').textContent = mensaje;
            (
              document
              .querySelector('.jsVentanaEmergente')
              .classList
              .add('-visible')
            );
          }
        );
      }
    )
  );
  (
    document
    .querySelector('.jsVentanaEmergenteBotonCerrar')
    .addEventListener(
      'click',
      function() {
        (
          document
          .querySelector('.jsVentanaEmergente')
          .classList
          .remove('-visible')
        );
      }
    )
  );
})();
