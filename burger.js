    window.addEventListener("load", function(){

      //按漢堡出現menu 
      document.getElementById("btnBurger").onclick = function(){
        let menu = document.getElementById("menu");
        if (menu.className == "hidden"){
          menu.className = "";
        }else{
          menu.className = "hidden";
        }

        //按漢堡出現遮罩
        let mask = document.getElementById("mask");
        if (mask.className == "hidden-mask"){
          mask.className = "";
        }else{
          mask.className = "hidden-mask";
        }
      };
     
      //按遮罩收回menu
      document.getElementById("mask").onclick = function(){
        let menu = document.getElementById("menu");
        if (menu.className == "hidden"){
          menu.className = "";
        }else{
          menu.className = "hidden";
        }
        
        //按遮罩收回遮罩  
        let mask = document.getElementById("mask");
        if (mask.className == "hidden-mask"){
          mask.className = "";
        }else{
          mask.className = "hidden-mask";
        }

      };
      
    });