const basicModel = require('./index.js');

class model extends basicModel {
    constructor(props = "kind") {
        super(props);
    }
}

module.exports = new model();
