// Require mongoose
var  mongoose = require('mongoose');

// Make a schema for bokningar
  // Need to look how dates are sent from the form.
var BokningSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  tom: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  typ: {
    type: String,
    required: true
  },
  bil: {
    type: String,
    required: true
  }
})

// Turn the schema too a model
var BokningModel = mongoose.model('Bokningar', BokningSchema);

// Export the model
module.exports = BokningModel;
