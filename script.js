function validateForm() {
  
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  if (name == "Tade" && password == "toto") {
    //alert("usuario y contrasena validos")
    window.open('content.html');
  } else {
    alert("Deja de chismear");
  }
  
};