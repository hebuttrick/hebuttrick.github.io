console.log("the app.js file is connected");
$("#name").on("mouseover", function () {
  $("#name").css("color", "red");
});

$("#name").on("mouseout", function (){
  $("#name").css("color","orange")});

$("#remove").on("click", function (){
  $("#harrison").fadeOut();
});

$("#add").on("click", function () {
$("#harrison").fadeIn()
});

function infoSubmit(){
  var formData =
  document.getElementById("mailing_list");
  console.log(formData);
  var firstName = formData["first_name"].value;
  console.log(firstName);
  var emailAddress =
  formData["email_address"].value;
  console.log(emailAddress);
  var known = formData["known"].value;
  console.log(known);

document.getElementById("confirmation_msg").innerHTML = "You have submitted the form, " + firstName;
};
