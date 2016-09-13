function sendMail(){
  var form = document.getElementById('emailForm');
  var mailFrom = form.elements['from'].value;
  var mailReturn = ", ".concat(form.elements['return'].value);
  var mailMessage = form.elements['message'].value;
  var mail = 'mailto:kevin.hugh93@gmail.com?subject='.concat(mailFrom).concat(mailReturn).concat('&body=').concat(mailMessage);
  window.location.href = mail;
}
