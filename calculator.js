const input = document.getElementById("input");
const button = document.querySelectorAll("button");
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "=") {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
    } else if (btn.value === "C") {
      input.value = "";
    } else if (btn.value === "DEL") {
      input.value = input.value.slice(0, -1);
      if (input.value === "") {
        input.value = "";
      }
    } else if (btn.value === "()") {
      handelParentheses();
    }
    else {
      input.value += btn.value; 
    }
  });
  function handelParentheses() {
    const value = input.value;
    const openParenthesesCount = (value.match(/\(/g) || []).length;
    const closeParenthesesCount = (value.match(/\)/g) || []).length;  
    if (openParenthesesCount === closeParenthesesCount) {
      input.value += "(";
    } else {
      input.value += ")";
    } 
    }
}); 