// const textBox = document.getElementById("myTextBox");

// function register() {
//     if (eMail == null){
//         alert("Please fill in required fields")
//     }

// }

// Instead of alert a text should stating the Please fill in requried fields.

const textBox = document.getElementById("myTextBox");
const errorMessage = document.getElementById("errorMessage");

textBox.addEventListener("blur", function register() {
  if (textBox.value === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});
