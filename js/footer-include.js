$(document).ready(function(){ 
  $.get("footer.html", function(data) {
    $("#footernav").html(data);
  });
}); 