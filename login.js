$(document).ready(function () {
    let username = localStorage.getItem("un");
    let password = localStorage.getItem("pass");
    if (username) {
      $("#un").val(username);
    }
    if (password) {
      $("#pass").val(password);
    }
    let rememberMe = localStorage.getItem("rememberMe");
if (rememberMe) {
  $("#rememberMe").prop("checked", true);
}
$("#userForm").submit(function (event) {
  event.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();
  rememberMe = $("#rememberMe").prop("checked");
  if (username == "admin" && password == "admin123") {
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", true);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }
    window.location.href = "./home.html";
  }
});
  });
  
  