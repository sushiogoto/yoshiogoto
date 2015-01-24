Template.header.rendered = function () {
  $('.angle-down')
    .addClass('animated bounceInDown')
    .one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
      $(".angle-down").removeClass('animated bounceInDown');
    });
};

Template.header.events({
  'mouseover .angle-down': function (e) {
    $(e.currentTarget)
      .addClass('animated bounce')
      .one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".angle-down").removeClass('animated bounce');
      });
  }
});