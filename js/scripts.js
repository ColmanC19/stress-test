var newArray = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
$(document).ready(function(){
  $("#stress-factors").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=factor]:checked").each(function(){
      var userStress = parseInt($(this).val());

      newArray.push(userStress)

      // console.log(newArray)
        if (userStress <= 5) {
          $("#posResult").show();
          $("negResult").hide();
        } else if (userStress >5 && userStress <= 10) {
          $("#posResult").hide();
          $("negResult").show();
        } else if (isNaN(userStress)) {
          alert("Please complete the survey");
          $("#posResult").hide();
          $("negResult").hide();
        }



    })
    console.log(newArray.reduce(reducer))
  })
})
