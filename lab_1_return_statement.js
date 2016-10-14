
//personal challenge: do the calculating of the grand total in a local variable & then pass that to the global variable;

/* problems: in order += the prices to a variable, THAT variable somehow has to be initalized to 0... once
*/
var total;

var groceryList = [

	{
		name: "chicken noodle",
		price: 1.50
	},

	{
		name: "whole wheat",
		price: 2.50
	},

	 {
		name: "whole vitamin D",
		price: 1.75
	},

 	{
		name:"linguine",
		price: 1.50 
	},

	 {
		name:"alfredo",
		price: 1.75
	},

]

//console.log(groceryList);

groceryList.forEach(function(element) {
	//console.log(element.name + " " + "$" + element.price);
	/*total += element.price;*/
	calcTotal(element.price);
});

//console.log("total is: $" + total);


// the function below does not work because itemPrice will ALWAYS be undefined... the variable gets created each time we are calling the function
function calcTotal (price) {
	var itemPrice;
	console.log("item price is: " + itemPrice);

	//if item price is undefined give it the value of the passed in value for price
	if (!itemPrice) {   
		itemPrice = price;
		console.log("if itemPrice was not defined " + itemPrice);
	} 
	else {
		itemPrice += price;
		console.log("running total itemPrice: " + itemPrice);
	}

}