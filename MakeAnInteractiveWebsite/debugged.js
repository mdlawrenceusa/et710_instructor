//Correct Sample
var main = function() {
  $(".dropdown-toggle").click(function() {
    $(".dropdown-menu").toggle();
  });
};

$(document).ready(main);

//To Be Debugged
var main = function() {
  (".dropdown-toggle").click( {
   (".dropdown-menu").toggle();
  });
};

(document).ready(main);

//Debugged Code
var main = function() {
  $(".dropdown-toggle").click (function() {
   $(".dropdown-menu").toggle();
  });
};

$(document).ready(main);


