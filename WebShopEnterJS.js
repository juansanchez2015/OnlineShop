function showDiv(){

//    document.getElementById('welcomeDiv').style.display = "block";
    var x = document.getElementById("welcomeDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}