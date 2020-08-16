function openFunction(){
    document.getElementById("menu") .style.width="300px";
 
  } 
  function closeFunction(){
    document.getElementById("menu") .style.width="0px";
  }
 
 /* sticky center java -->*/
 
   window.onscroll = function() {myFunction()};
  
  var navbar = document.getElementById("bar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
    }