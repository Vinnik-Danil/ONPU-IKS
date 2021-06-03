function login() {
  let log = document.getElementById("login").value;
  let pass = document.getElementById("pass").value;
  if(log=='opu.ua'&&pass=='test'){
    document.location.href = "perscab.html";  
  }
}
