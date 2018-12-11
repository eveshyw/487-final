$(document).ready(function() {
  console.log('Ready to begin the test...');

  // Toggle with button
    $( ".mobile-btn" ).click(function() {
    $( "nav" ).toggle();
  });

  // Brenda function
  var student = {
    name: 'Brenda',
    age: 20,
    likeCoding: true
  }

  if (student.likeCoding){
    console.log(student.name+", "+student.age+" years old, loves coding.");
  }


  // Call JSON data
  $.ajax({
    type:"GET",
    url:
    "./js/refugees.json",
    dataType: "json",
    async:true,
    success:function(data){
      console.log(data);
      buildContent(data);
    },
    error:function(error){
      console.log(error);
    }
  })
});


function buildContent(data){
  for (var i=0; i<data.length; i++){
    console.log("Origin: "+data[i].Origin);
    console.log("Value: "+data[i].Value);
    $(".cards").append("<div class='card'><a class='ahover' href='#'></a><p class='country'>"+data[i].Origin+"</p><p class='value'>"+data[i].Value+" Requests</p></div>");
  }
}
