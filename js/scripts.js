$(document).ready(function() {
  console.log('Ready to begin the test...');

    $( ".mobile-btn" ).click(function() {
    $( "nav" ).toggle();
  });

  var student = {
    name: 'Brenda',
    age: 20,
    likeCoding: true
  }

  if (student.likeCoding){
    console.log(student.name+", "+student.age+" years old, loves coding.");
  }
});
