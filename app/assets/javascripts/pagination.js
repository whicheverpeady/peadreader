$(document).ready(function() {
  $("#items").on("click", ".pagination a", function() {
    $.get(this.href, null, null, "script");
    return false;
  });
})
