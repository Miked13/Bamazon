// Required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon_db'
});


//Prompt the user to enter the chosen item and quantity they would to purchase
function toPurchase() {
	inquirer.prompt([
		{
			name: 'item_id',
			type: 'input',
			message: 'Would you like to make a purchase? If so, please enter the id of the item of your choice.'
		},
		{
			name: 'quantity',
			type: 'input',
			message: 'How many units of the product would you like to buy?  '
		}
	]).then(function (input) {
		var item = input.item_id;
		var quantity = input.quantity;
		var query = 'SELECT item_id, stock_quantity, price FROM products';

		connection.query(query, function (err, results) {
			if (err) throw err;
			if (results.length === 0) {
				console.log('ERROR: The chosen ID is incorrect, please select a valid ID.');
				showInventory();

			} else {
				var itemInfo = results[0];
				// If the quantity of the item ordered is in stock
				if (quantity <= itemInfo.stock_quantity) {
					console.log('the item you have selected is in stock, your order is being processed!');
					// Updating the query
					var queryUpdate = 'UPDATE products SET stock_quantity = ' + (itemInfo.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					// Updating the inventory
					connection.query(queryUpdate, function (err, results) {
						if (err) throw err;
						console.log("\n---------------------------------------------------------------------\n");
						showInventory();
						console.log('Your oder has been placed! Your total is $' + itemInfo.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the connection to database
						connection.end();
					})
				} else {
					console.log('Sorry, your item is out of stock, please choose another item');
					console.log("\n---------------------------------------------------------------------\n");
					showInventory();
				}
			}

		})
	})
};
// Dsiplay inventory interface
function showInventory() {
	query = 'SELECT * FROM products';
	connection.query(query, function (err, results) {
		if (err) throw err;
		console.log('Existing Inventory: ');
		console.log('...................\n');

		var output = '';
		for (var i = 0; i < results.length; i++) {
			output = '';
			output += 'Item ID: ' + results[i].item_id + '  |  ';
			output += 'Product Name: ' + results[i].product_name + '  |  ';
			output += 'Department: ' + results[i].department_name + '  |  ';
			output += 'Price: $' + results[i].price + '  |  ';
			output += 'Quantity: ' + results[i].stock_quantity + '\n';

			console.log(output);
		}

		console.log("---------------------------------------------------------------------\n");

		toPurchase();
	})
}

showInventory();
