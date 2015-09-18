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

// RESET FIELDS METHOD
function resetFields() {
    $("input#new-number").val("");
    $("input#new-toppings").val("");
    $("input#new-size").val("");
    $(".removable").remove();
}

$(document).ready(function() {

    $("form#new-ticket").submit(function(event) {
        event.preventDefault();

        var movieCode = $("#new-pizza-pi option:selected").val();
        var timeCode = $("#new-movie-time option:selected").val();
        var ageCode = $("#new-age-bracket option:selected").val();

        var movieArrayObject = {
            danceswithwolves : "Dances With Wolves",
        };

        inputtedMovieName = movieArrayObject[movieCode];

        var timeArrayObject = {
            time1 : "1:30 pm",
        };

        inputtedMovieTime = timeArrayObject[timeCode];

        var ageArrayObject = {
            child : "Child",
        };

        inputtedAgeBracket = ageArrayObject[ageCode];

        var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedAgeBracket);

        $("ul#movie").append("<li>" + newTicket.movieTicket() + "</li>");

        resetFields();

    });
});
