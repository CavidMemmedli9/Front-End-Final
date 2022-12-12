function Open(tapName) {
    var i;
    var x = document.getElementsByClassName("tap");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tapName).style.display = "block";  
  }
