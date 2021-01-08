function sails() {

  if (userName == 'CoderMichelle') {
    document.write('<h3>' + 'Welcome HOME Honey' + '</h3>');
  } else if (userName != 'CoderMichelle') {
    document.write('<h3>' + 'Welcome Guest' + '</h3>');
  }
}
sails();