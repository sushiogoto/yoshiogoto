Template.contact.events({
  'submit form': function(event) {
    event.preventDefault();
    var formAttributes = {
      nameStr: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      message: $('#message').val()
    };

    Meteor.call('emailContact', formAttributes, function (error, result) {
      if(result.response.message === "Queued. Thank you.") {
        $('.contact-status').html("Your email has been sent! We'll be in touch soon!");
        $('#message').val('');
      }
    });
  }

});