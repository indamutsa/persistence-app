const mongoose = require("mongoose");
const Joi = require("joi");

// Create a schema
const dslSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  type: {
    type: String,
    enum: ["ETL", "EOL", "EML", "ECL", "EVL", "ATL"],
  },
  artifact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artifact",
  },
  content: {
    type: String,
  },
});

// Create the model
const Dsl = mongoose.model("Dsl", dslSchema);
// Export the model
exports.Dsl = Dsl;
