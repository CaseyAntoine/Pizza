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
  this.meats.forEach(function(meats) {
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

  $("#orderForm").submit(function(ev) {
    ev.PreventDefault();

    var veggieInputs = $("input[name=veggies] :checked");
    var meatInputs = $("input[name=meats] :checked");
    var sizeInput = $(".pizzaSize").val();
    var veggieToppings = [];
    var meatToppings = [];

    veggieInputs.forEach(function(veggieInputs) {
      veggieToppings.push(veggieInputs);
    });

    meatInputs.forEach(function(meatInputs) {
      meatToppings.push(meatInputs);
    })

    let myPizza = new Pizza(sizeInput, veggieInputs, meatInputs);

    let price = myPizza.getPrice();

    console.log(veggieToppings);
    console.log(meatToppings);
    console.log("this is myPizza: " + myPizza);



  });

});
