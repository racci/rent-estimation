# Rent Estimation Application

A Rent Estimation app built with NodeJS, ExpressJS and AngularJS, Bootstrap an Karma PhantomJS unit testing. 

For demonstration purposes and a tutorial.

NodeJS provides the RESTful API. Angular provides the frontend and accesses the API.
Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.
Created and used also custom external CSS (style.css). 

Application created for the Landlord apartment search.
Application successfully and elegantly recommend price for Landlord's input.

Note: Square feet of apartment from the CSV files not included for calculation.

Frontend,
	1. User fills the form and submits.
	2. AngularJS controller uses POST request to NodeJS server.
	3. AngularJS controller gets responce to POST request and passes it to HTML side.
	4. Created Form input data validation.

Backend,
	1. Accepts requests over NodeJS RESTful API.
	2. Handler function, 	
		2.1. Initially retrieves data from CSV file using node module "csvtojson".
		2.2. Used Hash Table data structure to hash csv file data and their average prices per commons.
		2.3. Searchs user request data with data in Hash table and responces result back to Client side.

Unit Testing,	
	1. Successfully configured unit testing.
	2. Simple testing Angular controller $scope variable.	


## Requirements

- [Node and npm](http://nodejs.org)
- 

## Installation

1. Clone the repository: `git clone ...`
2. NodeJS need to be installed successfully.
3. Bower should be installed successfully.
4. Run `npm install`.
5. Run `bower install`.
6. Start the server: `node server.js`
7. View in browser at `http://localhost:3000`
8. For Unit testing, please run `karma start karma.conf.js`

Thank you


