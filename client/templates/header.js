Template.header.rendered = function () {
  $('.angle-down').addClass('animated bounceInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.angle-down').removeClass('animated bounceInDown');
  });
};

Template.header.events({
  'mouseover .angle-down': function (e) {
    $(e.currentTarget).addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.angle-down').removeClass('animated bounce');
  });
  }
});