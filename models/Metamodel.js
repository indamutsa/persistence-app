const mongoose = require("mongoose");
const Joi = require("joi");

require("mongoose-double")(mongoose);
const { Schema } = mongoose;

var SchemaTypes = Schema.Types;

const EReference = new Schema({
  name: {
    type: String,
  },
});
exports.EReference = EReference;

const EAttribute = new Schema({
  eLiteral: {
    name: {
      type: String,
    },
    value: {
      type: String || Number || SchemaTypes.Double,
    },
  },
});

exports.EAttribute = EAttribute;

// Create a schema
const metamodelSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  type: {
    type: String,
    enum: ["ECORE", "MPS"],
  },
  models: [
    {
      type: Schema.Types.ObjectId,
      ref: "Model",
    },
  ],
  artifact: {
    type: Schema.Types.ObjectId,
    ref: "Artifact",
  },
  content: {
    type: String,
  },
  // Internal properties
  ePackage: {
    name: {
      type: String,
    },
    nsURI: {
      type: String,
    },
    nsPrefix: {
      type: String,
    },
  },
  eClass: [
    {
      name: { type: String },
    },
  ],
});

// Create the model
const Metamodel = mongoose.model("Metamodel", metamodelSchema);

// Export the model
exports.Metamodel = Metamodel;

//

// eClass: {
//   name: {
//     type: String,
//   },
//   eSuperType: {
//     type: String,
//   },
//   eAbstract: {
//     type: Boolean,
//   },
// },
// eStructuralFeratures: {
//   name: {
//     type: String,
//   },
//   eType: {
//     type: String,
//   },
//   xsiType: {
//     type: Schema.Types.Mixed,
//     enum: EAttribute || EReference,
//   },
// },
