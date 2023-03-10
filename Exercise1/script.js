function ChangeName(){
    let name = prompt("What's your name?");
    alert("Hello, " + name );
    document.getElementById("inputName").textContent = "Hello, " + name ;
  }