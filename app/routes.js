var api = require("./api");

module.exports = function(app) {
    app.post('/api/check_price', api.checkPrice);
};




