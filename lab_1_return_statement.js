
//personal challenge: make a local variable that holds the total & return it to total so the global variable isn't changed inside of a function
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
	console.log(element.name + " " + "$" + element.price);
	var innerTotal;
	innerTotal += element.price;
	console.log("The value of innerTotal is: " + innerTotal); //returning NaN
	//return innerTotal;
});

//console.log("total is: $" + total);

