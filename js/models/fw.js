const { Schema, model } = require('../connections/conn');
const FwSchema = new Schema({
  "title": {
    "type": "String",
  },
  "votes": {
    "type": "Number",
  },
  "index": {
    "type": "Number",
  },
},
);	
const Fw = model('Framework', FwSchema);
module.exports = { Fw };
