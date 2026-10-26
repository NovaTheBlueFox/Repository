onEvent("Order", "click", function( ) {
  setScreen("OrderPlacement");
});
onEvent("About", "click", function( ) {
  setScreen("AboutUs");
});
onEvent("Menu", "click", function( ) {
  setScreen("WeeklyMenu");
});
onEvent("Funds", "click", function( ) {
  setScreen("Funding");
});
onEvent("Help", "click", function( ) {
  setScreen("Support");
});
onEvent("History", "click", function( ) {
  setScreen("OrderHistory");
});
onEvent("Back", "click", function( ) {
  setScreen("Homepage");
});
onEvent("ReturnToHome","click", function( ) {
  setScreen("Homepage");
});
onEvent("Back2", "click", function( ) {
  setScreen("Homepage");
});
onEvent("Back3", "click", function( ) {
  setScreen("Homepage");
});
onEvent("Back4", "click", function( ) {
  setScreen("Homepage");
});
onEvent("Back5", "click", function( ) {
  setScreen("Homepage");
});
onEvent("AddMoney", "click", function() {
  var number = Number(getText("text_input14"));
  var increasedNumber = (number * 1.05).toFixed(2);

  setText("text_area8", "Your total comes to $" + increasedNumber+". Confirm?");
});
var amountAdded = false;

onEvent("AddMoney", "click", function() {
  var number = Number(getText("text_input14"));

  if (isNaN(number) || number < 0) {
    setText("text_area8", "What do you think this is? Some sort of infinite money glitch?");
    amountAdded = false;
    return;
  }

  var increasedNumber = (number * 1.05).toFixed(2);

  setText("text_area8", increasedNumber);
  amountAdded = true;
});

onEvent("Confirm", "click", function() {
  if (amountAdded) {
    setText("text_area8", "Payment Confirmed");
    setText("text_input14", "");
    amountAdded = false;
  } else {
    setText("text_area8", "Insert a valid amount first");
  }
});

onEvent("Deny", "click", function() {
  if (amountAdded) {
    setText("text_area8", "Payment Denied");
    setText("text_input14", "");
    amountAdded = false;
  } else {
    setText("text_area8", "Insert a valid amount first");
  }
});
