//Converter Class
var Converter = require("csvtojson").Converter;

// Check price for given form inputs
exports.checkPrice = function (req, res){

	// request parameters
	var bed = req.body.bedroom;
	var bath = req.body.bathroom;

	// hash tables
	var price = {};
	var count = {};
	var avg_price = {};
	var key ="";

	// retrieve data from csv file
	var converter = new Converter({});
    converter.fromFile("./data/rent_data.csv",function(err, result){

		// if there is an error retrieving
		if (err)
			return err;

		// Compare request data with CSV file data
		res.json(compare(bed, bath, result)); 
	});

	// Compares request data with exist data
	function compare(bed, bath, result){

		// create key for hash
		var key = bed + '-' + bath;

		// retrieve data from hash table
		var hasdData = hashingCsvData(result);

		// if request data exist in hash table, then return it 
		if(hasdData[key]){
			return hasdData[key];
		}else{
			return -1;
		}
	}

	// Hashing CSV data
	function hashingCsvData(result){

		for(var i=0; i < result.length; i++){

			// create key for hashtable
			var key = result[i].bedrooms + '-' + result[i].bathrooms;

			// price sum of common bedrooms and bathrooms
			price[key] = (price[key] || 0) + result[i].price;

			// count of common bedrooms and bathrooms
			count[key] = (count[key] || 0) + 1; 

			// average price for per common bedrooms and bathrooms sets
			avg_price[key] = parseInt(price[key] / count[key]);
		}	
		return avg_price;
	};		
}