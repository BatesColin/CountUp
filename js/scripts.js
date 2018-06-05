$(document).ready(function(){
  $("#count-up").submit(function(event){
    event.preventDefault();
    var inputtedMultiple = parseInt($("input#multiple").val());
    var inputtedDestination = parseInt($("input#destination").val());
    if (inputtedMultiple > 0 && inputtedDestination > 0 && inputtedMultiple < inputtedDestination) {
      var totals = [];
      for (var currentNumber = inputtedMultiple; currentNumber <= inputtedDestination; currentNumber += inputtedMultiple){
        totals.push(currentNumber);
      }
    } else {
      $("#img-hidden").fadeIn();
    }
  });
});
