//personal challenge: have the forEach call a named function; that function will have paramaters; console.log the .name and .price values for each object in the array

/* 
http://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

*/

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

]

var nums = [10, 20, 30, 40, 50];


//groceryList.forEach(displayStuff); 
//groceryList.forEach(displayThings); 
nums.forEach(playWithNums);

/*
	paramater "element" is a reference to each of the elements in the array. 
	You have to set up the named function to receive the elements in the array in the 1st place.
	Doesn't matter what you name it: refer to displayThings () . 
	the order of the paramaters & values follow the paramaters of the forEach docs at MDN
*/

function displayStuff (element, index, array) { 
	console.log("the current element in the array being acted on : " + element); //shows the element currently being accessed
	console.log("the value of index is: " + index); //shows the index of the element currently being accessed
	console.log("the value of array is: " + array);

	console.log(element.name, element.price); // ----> I have access to the properties of the object that are inside the array at each index
}

function displayThings (beer) { 
	console.log("If I use 'beer' instad of 'element': " + beer);
	console.log("If I use 'beer' instad of 'element': " + beer.name, beer.price); 
}

function playWithNums (element, index) {
	console.log("The value of 'element' inside playingWithNums: " + element);
	console.log("The value of 'index' inside playingWithNums: " + index);

}