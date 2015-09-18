describe('PizzaOrder', function() {
    it("creates a new Pizza with the given specifications", function() {
        var testPizza = new PizzaOrder(4, 7, 12);
        expect(testPizza.numberOfPizzas).to.equal(4);
        expect(testPizza.numberOfToppings).to.equal(7);
        expect(testPizza.pizzaSize).to.equal(12);
    });
});


describe('listPizza', function() {
    it("lists the pizza just inputted", function() {
        var testPizza = new PizzaOrder(4, 7, 12);
        expect(testPizza.listPizza()).to.equal("Pizzas: 4, Toppings: 7, Size: 12");
    })
})
