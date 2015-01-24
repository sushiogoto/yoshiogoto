Meteor.startup(function() {
  Meteor.methods({
    emailContact: function (formAttributes) {
      // Add some security and check form inputs
      check(formAttributes, {
        nameStr: String,
        email: String,
        phone: String,
        message: String,
      });

      // Define the settings
      var postURL = process.env.MAILGUN_API_URL + '/' + process.env.MAILGUN_DOMAIN + '/messages';
      var options =   {
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
      };

      var NigerianPrinceGun = new Mailgun(options);

      return NigerianPrinceGun.send({
         'to': 'info@cratr.io',
         'from': 'postmaster@cratr.io',
         'html': '<html><head></head><body>Name: ' + formAttributes.nameStr + ' Email Address: ' + formAttributes.email + '\nPhone: ' + formAttributes.phone + '\nMessage: ' + formAttributes.message + '</body></html>',
         'text': 'Name: ' + formAttributes.nameStr + ' Email Address: ' + formAttributes.email + '\nPhone: ' + formAttributes.phone + '\nMessage: ' + formAttributes.message,
         'subject': '(cratr.io) Contact Form',
         'tags': [
           'lead',
           'homepage',
           'contact form'
         ]
       });
    },
  });


});