// Business Logic
function Pizza(size, veggies, meats){
  this.size = size;
  this.veggies = veggies;
  this.meats = meats;
  this.price = 0;
}

Pizza.prototype.getPrice = function() {

  this.veggies.forEach(function(veggies) {
    this.price += .50;
  })
  if(this.size === 10) {
    this.price += 9;
  }
  if(this.size === 14){
    this.price += 14;
  }

  return this.price;

}







// User Logic

$(document).ready(function() {

  $("input[name=pineapple]").hover(function() {
    $(".pineappleText").show();
    $(this).prop("disabled", true);

  })

});
