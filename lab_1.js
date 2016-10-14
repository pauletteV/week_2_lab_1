
var soup = {
	name: "chicken noodle",
	price: 1.50
};

var bread = {
	name: "whole wheat",
	price: 2.50
};

var milk = {
	name: "whole vitamin D",
	price: 1.75
};

var noodles = {
	name:"linguine",
	price: 1.50 
};

var sauce = {
	name:"alfredo",
	price: 1.75
};

var groceryList = [soup, bread, milk, noodles, sauce];
var total = 0;

/*another way to make the array of objects:

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
	}

]*/

//console.log(groceryList);

groceryList.forEach(function(element) {
	console.log(element.name + " " + "$" + element.price);
	total += element.price; //keep adding element.price on each iteration

});

console.log("total is: $" + total);

//personal challenge: make a local variable that holds the total & return it to total so the global variable isn't changed inside of a function