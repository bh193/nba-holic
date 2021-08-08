//sort按鈕

  window.addEventListener("load", function(){
    //按sort button出現遮罩
    document.getElementById("sort-button").onclick = function(){
      let mask = document.getElementById("mask_team");
      if (mask.className == "hidden-mask"){
        mask.className = "";
      }

    //按sort button出現sort
      let menu_sort = document.getElementById("menu_sort");
      if (menu_sort.className == "hidden-sort"){
        menu_sort.className = "";
      }else{
        menu_sort.className = "hidden-sort";
      }
    };
    

      //按遮罩收回sort
    document.getElementById("mask_team").onclick = function(){
      let menu_sort = document.getElementById("menu_sort");
      if (menu_sort.className == ""){
        menu_sort.className = "hidden-sort";
      }

      //按遮罩收回遮罩  
      let mask = document.getElementById("mask_team");
      if (mask.className == "hidden-mask"){
        mask.className = "";
      }else{
        mask.className = "hidden-mask";
      }

    };
    
  });




// filter按鈕

window.addEventListener("load", function(){
  document.getElementById("filter-button").onclick = function(){
    //按filter button出現filter
    let menu_filter = document.getElementById("menu_filter");
    if (menu_filter.className == "hidden-filter"){
      menu_filter.className = "";
    }else{
      menu_filter.className = "hidden-filter";
    }
    //按filter button出現遮罩
    let mask = document.getElementById("filterbox-hidden");
    if (mask.className == "filterbox-hidden"){
      mask.className = "";
    }
  };

    //按遮罩收回filter
  document.getElementById("filterbox-hidden").onclick = function(){
    let menu_filter = document.getElementById("menu_filter");
    if (menu_filter.className == ""){
      menu_filter.className = "hidden-filter";
    }

    //按遮罩收回遮罩  
    let mask = document.getElementById("filterbox-hidden");
    if (mask.className == "filterbox-hidden"){
      mask.className = "";
    }else{
      mask.className = "filterbox-hidden";
    } 
  };

   //按X收回filter
  document.getElementById("letter-x").onclick = function(){
    let menu_filter = document.getElementById("menu_filter");
    if (menu_filter.className == ""){
      menu_filter.className = "hidden-filter";
    }

    //按X收回遮罩
    let mask = document.getElementById("filterbox-hidden");
    if (mask.className == "filterbox-hidden"){
      mask.className = "";
    }else{
      mask.className = "filterbox-hidden";
    } 
  };

});


$("#team-east").click(function(){
  var text = $(this).siblings("#text")
    if( text.css("display") == "none"){
      text.slideDown();
    }else{
      text.slideUp();
    }
});    