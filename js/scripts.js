// CONSTRUCTOR
function PizzaOrder(numberOfPizzas, numberOfToppings, pizzaSize) {
    this.numberOfPizzas = numberOfPizzas;
    this.numberOfToppings = numberOfToppings;
    this.pizzaSize = pizzaSize;
}

// LIST PIZZA METHOD
PizzaOrder.prototype.listPizza = function() {
    return "Pizzas: " + this.numberOfPizzas + ", Toppings: " + this.numberOfToppings + ", Size: " + this.pizzaSize;
}

// CALCULATE PIZZA PRICE METHOD
PizzaOrder.prototype.calculatePrice = function() {
    var calcPrice = (this.numberOfPizzas * this.numberOfToppings * this.pizzaSize * Math.PI)/10;
    return Math.ceil(calcPrice);
}

// CALCULATE BITCOIN PIZZA PRICE METHOD
PizzaOrder.prototype.calculateBitCoinPrice = function() {
    var calcPrice = (this.numberOfPizzas * this.numberOfToppings * this.pizzaSize * Math.PI)/10;
    var roundPrice = Math.ceil(calcPrice);
    var bitPrice = roundPrice/233.40;
    return bitPrice;
}

// RESET FIELDS METHOD
function resetFields() {
    $("input#new-number").val("");
    $("input#new-toppings").val("");
    $("input#new-size").val("");
    $(".removable").remove();
}

// JQUERY
$(document).ready(function() {

    // SUBMIT EVENT
    $("form#new-order").submit(function(event) {
        event.preventDefault();

        var inputtedNumber = $("input#new-number").val();
        var inputtedToppings = $("input#new-toppings").val();
        var inputtedSize = $("input#new-size").val();
        var newPizza = new PizzaOrder(inputtedNumber, inputtedToppings, inputtedSize)

        resetFields();

        $("#show-pizza").append(
            "<p>" + newPizza.listPizza() + "</p>" +
            "<p> $ " + newPizza.calculatePrice() + "</p>" +
            "<p> BTC " + newPizza.calculateBitCoinPrice() + "<i> (Bit-Coin)</i></p>").show("slow");
    });
});
