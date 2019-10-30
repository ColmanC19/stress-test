var newArray = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
$(document).ready(function(){
  $("#stress-factors").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=factor]:checked").each(function(){
      var userStress = parseInt($(this).val());

      newArray.push(userStress)

      // console.log(newArray)
        // if (userStress <= 5) {
        //   console.log()
        //   $("#posResult").show();
        //   $("negResult").hide();
        // } else if (userStress >5 && userStress <= 10) {
        //   $("#posResult").hide();
        //   $("negResult").show();
        // } else if (isNaN(userStress)) {
        //   alert("Please complete the survey");
        //   $("#posResult").hide();
        //   $("negResult").hide();
        // }



      })
      if (newArray.length == 0) {
      alert("Please complete the survey");
      $("#posResult").hide();
      $("#negResult").hide();

      } else {
      var totalStress = newArray.reduce(reducer);
      if (totalStress <= 5) {
      console.log("show positive result");
      $("#posResult").show();
      $("#negResult").hide();
      } else if (totalStress >5 && totalStress <= 10) {
      console.log("show neg result")
      $("#posResult").hide();
      $("#negResult").show();
      }

    }
  })
})
