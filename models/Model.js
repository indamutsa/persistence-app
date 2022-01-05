const mongoose = require("mongoose");
const Joi = require("joi");

// Create a schema
const modelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  metamodel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Metamodel",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  type: {
    type: String,
    enum: ["XMI", "XML", "MODEL"],
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
const Model = mongoose.model("Model", modelSchema);

// Export the model
exports.Model = Model;
