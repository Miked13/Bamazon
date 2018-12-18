# Bamazon
## Overview
Bamazon is an node application where the user has the possibilty to purchase items stored in a database. The database stores the item ID, the price of an item, the quantity of an item and the name of an item. Whenever the user purchases an item, the app will update the quantity of that item in the database.
## Requirements
These tools need to be installed to run "Bamazon" :
* [Node](https://nodejs.org/en/)
* [Mysql](https://www.npmjs.com/package/mysql)
* [Inquirer](https://www.npmjs.com/package/inquirer)
## Setup
After installing the requirements, to execute "Bamazon" the user need to navigate to the path where the app is located and type in terminal: ```npm install```(it installs the dependencies required). Then type: ```node javascript bamazonCustomer.js```.
To close the application, the user can hit the "Control C" buttons at the same time.
## Demonstration
![](https://github.com/Miked13/Bamazon/blob/master/assets/bamazon%20demo/bamazon_demo.gif)
The demonstration above shows us the existing inventory of the store after typing the command: `node bamazonCustomer.js`. The application asks the user to choose an item available in the inventory by typing the ID number of that item. After the transaction, the command-line interface displays the total price of the purchased item and updates the quantity left of that item in the inventory.
