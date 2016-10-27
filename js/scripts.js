//business logic
var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var thousands = ["", "M", "MM", "MMM"]
var output = ""
var tensNumeral = ""
var romanizer = function(userInput) {
  debugger;
  if (userInput < 1 || userInput > 3999) {
    output = "Please enter a valid number"
  } else if (isNaN(userInput)) {
    output = "Please enter a valid number"
  } else if ( userInput > 0 && userInput <10) {
    var num1 = onesFunction(userInput);
  } else if ( userInput > 9 && userInput <= 99) {
    var convertToString = userInput.toString();
    var splitToArray = convertToString.split("");
    var reverseArray = splitToArray.reverse();
    var num1 = onesFunction(reverseArray[0]);
    var num2 = tensFunction(reverseArray[1]);
    var toRoman = num2 + num1
    return toRoman
  } else if ( userInput >= 100 && userInput <= 999) {
    var convertToString = userInput.toString();
    var splitToArray = convertToString.split("");
    var reverseArray = splitToArray.reverse();
    var num1 = onesFunction(reverseArray[0]);
    var num2 = tensFunction(reverseArray[1]);
    var num3 = hundredsFunction(reverseArray[2]);
    var toRoman = num3 + num2 + num1
    return toRoman
  } else if ( userInput >= 1000 && userInput <= 3999) {
    var convertToString = userInput.toString();
    var splitToArray = convertToString.split("");
    var reverseArray = splitToArray.reverse();
    var num1 = onesFunction(reverseArray[0]);
    var num2 = tensFunction(reverseArray[1]);
    var num3 = hundredsFunction(reverseArray[2]);
    var num4 = thousandsFunction(reverseArray[3]);
    var toRoman = num4 + num3 + num2 + num1
    return toRoman
  }
  return output
}; //end of the romanizer function

var onesFunction = function(num1) {
  debugger;
  for (var index = 0; index < num1; index++) {
    output = ones[num1]

  }
  return output
};//end of the romanizer function

var tensFunction = function(num2) {
  debugger;
  for (var index = 0; index < num2; index++) {
    output = tens[num2]
  }
  return output
}//end of tens function

var hundredsFunction = function(num3) {
  debugger;
  for (var index = 0; index < num3; index++) {
    output = hundreds[num3]
  }
  return output
}//end of hundreds function

var thousandsFunction = function(num4) {
  debugger;
  for (var index = 0; index < num4; index++) {
    output = thousands[num4]
  }
  return output
}//end of thousands function

//user interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;
    var userInput = parseInt($("#input").val());
    var result = romanizer(userInput);
    $("#output").text(result);
  });
});
