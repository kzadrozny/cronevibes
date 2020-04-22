$(document).ready(function(){ 
  $.get("navigation.html", function(data) {
    $("#headernav").html(data);
  });
}); 