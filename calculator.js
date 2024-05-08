var display = document.getElementById("inputBox");
var buttons = document.querySelectorAll("button");

var btnArry = Array.from(buttons);

var string = "";

btnArry.forEach((bttn) => {
  bttn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML == "Ac") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
