/* pizzaPizza replicates components of an online Pizza order management system. It takes user input for pizza quantity, size, toppings and calculates the service fee, subtotals and total order price. See bottom of code for summary comments */

var customerName = "";
customerName = prompt("Welcome to Pizza World! Home of New Yorks greatest Pizza Pies. \n What is your name?", "name");

var pieCount = "";
pieCount = prompt("How many Pizzas would you like to order, " + customerName + " ?", "amount");
pieCount = parseInt(pieCount, 10);

var serviceFee = 0;
if (pieCount <=2){
    serviceFee = pieCount *3;
}
else if (pieCount <=4){
    serviceFee = pieCount *2;
}
else {
    serviceFee = 0;
}

alert(customerName + " , you're ordering " + pieCount + " pizzas and the order Service Fee will be $" + serviceFee + ".00.");

var pizzaSize = "";
var pieSize = "";
pizzaSize = prompt("What size of Pizza would you like? Please enter (S)mall, (M)edium, or (L)arge.", "small");
pizzaSize = pizzaSize.toLowerCase();

if (pizzaSize == "s"){
    perPizzaPrice = 8;
    pieSize = "small";
}
else if (pizzaSize == "m"){
    perPizzaPrice = 12;
    pieSize = "medium";
}
else if (pizzaSize == "l"){
    perPizzaPrice = 16;
    pieSize = "large";
}
else { perPizzaPrice = 8; 
      pieSize = "small";
     }

var subTotalPrice = 0;
subTotalPrice = (perPizzaPrice * pieCount) + serviceFee;

alert("OK, " + customerName + " you're ordering " + pieCount + " " + pieSize + " pies. The order SubTotal is: $" + subTotalPrice + ".00.");

alert("Now lets customize your Pizza pie.");

var ingredients = ["Mozzarella Cheese", "Parmesan Cheese", "Goats Cheese", "Gorgonzona", "Fresh Basil", "Oregano", "Thyme", "Olives", "Capers", "Chilli Oil", "Beef Tomato", "Sun-dried Tomato", "Porcini Mushroom", "Chanterelles",];

var orderIngredients = [];
var pizzaToppingStatus = "";
var ingredientsText = "Enter a Topping: ";

for(var i = 0; i < ingredients.length; i++){
    //ingredientsText = ingredientsText + ingredients[i];
    if (i < ingredients.length -1){
    ingredientsText = ingredientsText + ingredients[i] + ", ";
    }
    else {
    ingredientsText = ingredientsText + ingredients[i] + ".";
    }
}

var createPizza = true;
while (createPizza){
    var toppingToAdd = prompt(ingredientsText, "Mozarella Cheese").toLowerCase();
    orderIngredients.push(toppingToAdd);
    var addAnother = prompt("Would you like to add another topping? Enter (Y)es or (N)o.", "Y");
    addAnother = addAnother.toLowerCase();
    if (addAnother === "y" || addAnother === "yes"){
        createPizza = true;
    }
    else {
        createPizza = false;
    }
}

for(var a = 0; a < orderIngredients.length; a++){
    pizzaToppingStatus = pizzaToppingStatus + ", " + orderIngredients[a];
}

alert("Nice! Your Pizza will be topped with " + pizzaToppingStatus + ".");

var toppingFee = 0;
for (var b = 0; b < orderIngredients.length; b++){
    var toppingCharge = 0;
    switch (orderIngredients[b]){
        case "capers": toppingCharge = 0.50; break;
        case "olives": toppingCharge = 0.50; break;
        case "beef tomato": toppingCharge = 0.50; break;
        case "sun-dried tomato": toppingCharge = 2.00; break;
        case "porcini mushroom": toppingCharge = 2.00; break;
        case "chanterelles": toppingCharge = 2.00; break;            
        default: toppingCharge = 1.00;  
    }
            toppingFee = toppingFee + toppingCharge;    
}

var subPizzaPrice = 0;
var totalPrice = 0;            
            
subPizzaPrice = (toppingFee + perPizzaPrice) * pieCount;
totalPrice = subPizzaPrice + serviceFee;
            
totalPrice = totalPrice.toFixed(2);

alert("Lookin' Good, " + customerName + "!");
alert("You ordered " + pieCount + " " + pieSize + " " + pizzaToppingStatus + " pizza(s).");
alert("Your Total Order $" + totalPrice);

/* Summary of application:
Asks user for their name, set to customerName
Asks user for no. of Pizzas, set to pieCount
Converts pieCount to integer
Sets serviceFee for pizzas as follows: for 1,2 pizzas, fee is $3 per Pizza; for 3/4 pizzas, fee is $2 per Pizza; for 5 or more, fee is $0.
Confirms users name, no. of Pizzas, serviceFee
Sets price of pizza by size as follows: s / small $8, m / medium $12, l / large $16.
Prompts users for desired size, set to pizzaSize
Convert pizzaSize to lowercase
Sets logic for calculating subTotalPrice, using size, no. of, and serivceFee of order
Confirm subTotalPrice to user
Create list of available toppings, set to ingredients
Use for loop to create string of topping options
Create array to store user choice of toppings, set to orderIngredients
Create string to contain toppings chosen, set to pizzaToppingStatus
Create bool createPizza, set to true
Use while statement to prompt user to enter topping choice, using ingredientsText string. Save choice to variable toppingToAdd, pushing toppingToAdd to orderIngredients array.
Prompt user to decide Y/N to addAnother topping
Set createPizza to true / false, depending on addAnother decision
Fill string pizzaToppingStatus with items in the orderIngredients array using a for loop
Confirm toppings to user
Sets logic for calculating price of each topping's toppingCharge, based on the item selected
Use switch statement to pass each item in orderIngredients through logic, set total to toppingFee
Set logic to calculate the total order value. First calculate cost per pizza including size and toppings; times by pieCount, set to subPizzaPrice. Next, calculate totalPrice by including serviceFee, set to two decimal points
Confirm order summary to user
Confirm totalPrice to user */
