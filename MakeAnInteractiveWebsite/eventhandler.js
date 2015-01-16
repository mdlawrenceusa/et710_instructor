//original code
var main = function() {
  $(".btn").click(function() {


  });
};

$(document).ready(main);

//Sample working code 1
$('.social li').click(function() {
  $(this).toggleClass('active');
});

//Sample working code 2
var main = function() {
  $(".like-button").click(function() {
    $(this).toggleClass("active");
  });
};

$(document).ready(main);

//submission
var main = function() {
  $(".btn").click(function() {
    $(this).toggleClass("btn-like");
  });
};

$(document).ready(main);
