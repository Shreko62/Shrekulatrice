let input = "";


    let buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", showValue);
    }

    let clear = document.getElementById("reset");
    clear.addEventListener("click", reset);

    let skip = document.getElementById("remove");
    skip.addEventListener("click", remove);

    let equal = document.getElementById("result");
    equal.addEventListener("click", domaths);
    

    function showValue() {
      input = input + this.value;
    
      document.getElementById("output").innerHTML = input;
    }
    
    function domaths() {
      document.getElementById("output").innerHTML = eval(input);
      input = eval(input);
    }
    
    function reset() {
      document.getElementById("output").innerHTML = " ";
      input = "";
    }
    
    function remove() {
      input = input.replace(input.slice(-1), "");
      document.getElementById("output").innerHTML = input;
    }
    