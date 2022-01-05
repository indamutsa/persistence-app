const mongoose = require("mongoose");
const Joi = require("joi");

// Create a schema
const TransformationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  sourceModel: {
    type: String, //mongoose.Schema.Types.ObjectId,
    ref: "Model",
  },
  sourceMetamodel: {
    type: String, //mongoose.Schema.Types.ObjectId,
    ref: "Metamodel",
  },

  targetMetamodel: {
    type: String, //mongoose.Schema.Types.ObjectId,
    ref: "Metamodel",
  },

  dsl: {
    type: String, //mongoose.Schema.Types.ObjectId,
    ref: "Dsl",
  },

  outcomeStatus: {
    type: String,
    enum: ["SUCCESS", "ERROR"],
  },
});

// Create the model
const Transformation = mongoose.model("Transformation", TransformationSchema);

const operationSchema = null;

const operationFactory = (type = "transformation") => {
  switch (type) {
    case "transformation":
      return Transformation;
  }

  return operationSchema;
};

exports.operationFactory = operationFactory;
