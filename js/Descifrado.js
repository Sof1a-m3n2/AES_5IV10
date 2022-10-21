var archivo = document.getElementById("file");

archivo.addEventListener("change", (e) => {
  e.preventDefault();

  if (
    document.getElementById("clav").value === 16 ||
    document.getElementById("clav").value === 24 ||
    document.getElementById("clav").value === 32
  ) {
    let lector = new FileReader();
    lector.readAsText(file.files[0]);

    lector.addEventListener("load", () => {
      var encriptado = lector.result;

      document.getElementById("t").innerHTML = "Encriptado: " + encriptado;

      var des = CryptoJS.AES.decrypt(
        encriptado.toString(),
        document.getElementById("clav").value
      );

      document.getElementById("r").innerHTML =
        "Descifrado: " + des.toString(CryptoJS.enc.Utf8);
      console.log(des.toString(CryptoJS.enc.Utf8));
      document.getElementById("parteCifrado").style.display = "none";
    });
  }
});
