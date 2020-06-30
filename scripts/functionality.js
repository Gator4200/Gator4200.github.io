$(document).ready(function() {
  $(document).keydown(function(e) {
    if(e.which == 27) {
      $('#myNav').css('width', '100%');
    }
    else if (e.which == 13) {
      $('#myNav').css('width', '0%');
    }
  });
});
