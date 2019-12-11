const mongoose = require("mongoose");
const config = require("../config/database");

const ViewSchema = mongoose.Schema({
  name: {
    type: String
  },
  content: {
    type: String,
    required: true
  }
});

const View1 = mongoose.model("View", ViewSchema);

View1.addView = function(newView, callback) {
  newView.save(callback);
};

View1.getAll = function(callback) {
  View1.find(callback);
};

module.exports = View1;
