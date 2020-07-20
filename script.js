$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

// Turns on the modals

$(".js-modal-trigger").click(function() {
  var targetModal = $(this).next('div');
  $(targetModal).addClass("is-active");
});
$(".modal-background").click(function() {
  $(".modal").removeClass("is-active");
});
$(".modal-close").click(function() {
  $(".modal").removeClass("is-active");
});