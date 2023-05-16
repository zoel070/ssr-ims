const basicModel = require('./index.js');

class model extends basicModel {
    constructor(props = "customer") {
        super(props);
    }
}

module.exports = new model();
