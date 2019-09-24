$(document).ready(function() {
$(".top").click(function() {
  $(".popup").addClass("show-popup");
  $(".main").addClass("background-opacity");
});
  $(".close").click(function() {
    $(".popup").removeClass("show-popup");
     $(".main").removeClass("background-opacity");
});
});
