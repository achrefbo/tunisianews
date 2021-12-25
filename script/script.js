function menu() {
    var x = document.getElementById("header-nav-items");
    if (x.className === "menu") {
      x.className = " navigation-items";
      x.classList.add("header-show")
    } else {
      x.className = "menu";
    }}