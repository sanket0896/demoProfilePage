var clicked=false;

window.addEventListener("DOMContentLoaded", function(){
  window.onscroll = function() {
    if(document.body.scrollTop > 80)
    {
      document.getElementById("navi-bar").className = "navbar navbar-default navBar dark";
      if(window.innerWidth < 992){
        document.getElementById("navbar-toggle").style.cssText = "background-color : rgba(0,0,0,0.962);";
      }
    }

    else
    {
       document.getElementById("navi-bar").className = "navbar navbar-default navBar"; 
       document.getElementById("navbar-toggle").style.cssText = "background-color : transparent;";
    }
        document.getElementById("row1Content1").className = "row-content";
        $("#navbar-toggle").collapse('hide');
        clicked = false;
  };

  document.getElementById("collapse-btn").addEventListener("click", function(){

    if(clicked == false){
      clicked=true;
      console.log("clicked is "+clicked);
      document.getElementById("row1Content1").className = "row-content come-down";
    }

    else{
      clicked=false;
      console.log("clicked is "+clicked);
      document.getElementById("row1Content1").className = "row-content";
    }

    // if(clicked==true){
    //     // console.log("clicked is "+clicked);
    //     window.onscroll=function() {
    //       if(document.body.scrollTop<100){
    //       document.getElementById("row1Content1").className = "row-content";
    //       $("#navbar-toggle").collapse('hide');
    //       clicked = false;
    //       }
    //     };
    //  }
  });  

  document.getElementById("collapse-btn").addEventListener("blur", function(){
    var scWidth = window.innerWidth;
    if(scWidth<768){
      $("#navbar-toggle").collapse('hide');
      document.getElementById("row1Content1").className = "row-content";
      clicked = false;
    }
  });

});


  
  
