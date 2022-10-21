 
 var mess = document.getElementById("mensaje").value;
 var clave = document.getElementById("key").value;
  const seleccionado = document.querySelector(
    'input[name="keySelector"]:checked'
  );
  const seleccionadoFormat = document.querySelector(
    'input[name="arcSelector"]:checked'
  );
  const error = document.getElementById("error");
  var resultadoCifrado = document.getElementById("c");

console.log(mess);

console.log(clave)

document.getElementById("descargar").addEventListener("click", (e) => {


  if (mess == "") {
    alert("El texto no puede estar vacio");
  }

  if (clave == "") {
    alert("La clave no puede estar vacia");
  }

  if (seleccionado != null) {
    opcion = parseInt(seleccionado.value);
  } else {
    error.innerHTML = "No seleccionaste ninguna";
  }

  if (seleccionadoFormat != null) {
    formato = seleccionadoFormat.value;
  } else {
    error.innerHTML = "No seleccionaste ninguna";
  }

  var claveCaracteres = clave.length;

  if ((opcion = 128)) {
    if (claveCaracteres == 16) {
      var cif = CryptoJS.AES.encrypt(mess, clave);
      const archivoCif = new Blob([cif], {
        type: "application/x-www-form-urlencoded"
      });
      const url = URL.createObjectURL(archivoCif);
      const a = document.createElement("a");
      a.href = url;

      if (formato == "txt") {
        a.download = "ArchioCifrado" + ".txt";
        a.click();
        URL.revokeObjectURL(url);
      }

      if (formato == "doc") {
        a.download = "ArchioCifrado" + ".doc";
        a.click();
        URL.revokeObjectURL(url);
      }

      if (formato == "pdf") {
        let pdf = new jsPDF();
        pdf.setFontSize(12);

        pdf.text(cif.toString(), 20, 20);
        pdf.save("cifrado.pdf");
      }
    } else {
      alert("El numero de caracteres es incorrecto");
    }
  } else if ((opcion = 192)) {
    if (claveCaracteres == 24) {
      var cif = CryptoJS.AES.encrypt(mess, clave);
      const archivoCif = new Blob([cif], {
        type: "application/x-www-form-urlencoded"
      });
      const url = URL.createObjectURL(archivoCif);
      const a = document.createElement("a");
      a.href = url;

      if (formato == "txt") {
        a.download = "ArchioCifrado" + ".txt";
        a.click();
        URL.revokeObjectURL(url);
      }

      if (formato == "doc") {
        a.download = "ArchioCifrado" + ".doc";
        a.click();
        URL.revokeObjectURL(url);
      }

      if (formato == "pdf") {
        let pdf = new jsPDF();
        pdf.text(cif.toString(), 20, 20);
        pdf.save("cifrado.pdf");
      }
    } else {
      alert("El numero de caracteres es incorrecto");
    }
  } else if ((opcion = 256)) {
    if (claveCaracteres == 32) {
      var cif = CryptoJS.AES.encrypt(mess, clave);
      const archivoCif = new Blob([cif], {
        type: "application/x-www-form-urlencoded"
      });
      const url = URL.createObjectURL(archivoCif);
      const a = document.createElement("a");
      a.href = url;

      if (formato == "txt") {
        a.download = "ArchioCifrado" + ".txt";
        a.click();
        URL.revokeObjectURL(url);
      }

      if (formato == "doc") {
        a.download = "ArchioCifrado" + ".doc";
        a.click();
        URL.revokeObjectURL(url);
      }

      if (formato == "pdf") {
        let pdf = new jsPDF();
        pdf.text(cif.toString(), 20, 20);
        pdf.save("cifrado.pdf");
      }
    } else {
      alert("El numero de caracteres es incorrecto");
    }
  }

  document.getElementById("parteCifrado").style.display = "none";
  event.preventDefault();
  
});


