// const express = require("express");
// const router = express.Router();
// const Joi = require("joi");
// const config = require("config");
// const { User, validate } = require("../models/User");
// const authorize = require("../middleware/authorize");
// const logger = require("../middleware/logger");
// const { operationFactory } = require("../models/Transformation");

// /**
//  * @swagger
//  * components:
//  *  schemas:
//  *      User:
//  *          type: object
//  *          required:
//  *              - username
//  *              - email
//  *          properties:
//  *              _id:
//  *                  type: string
//  *                  description: id of the operation
//  *              name:
//  *                  type: string
//  *                  description: The name of the operation
//  *              sourceModel:
//  *                  type: string
//  *                  description: The id of the metamodel
//  *              sourceMetamodel:
//  *                  type: string
//  *                  description: The id of the source metamodel
//  *              targetMetamodel:
//  *                  type: string
//  *                  description: The id of the target metamodel
//  *              dsl:
//  *                  type: string
//  *                  description: The id of the dsl
//  *              outcomeStatus:
//  *                  type: string
//  *                  description: the status of the operation
//  *              createdAt:
//  *                  type: string
//  *                  description: time of the operation
//  *              updatedAt:
//  *                  type: string
//  *                  description: Time the operation was updated
//  *          example:
//  *              _id: "tranfsformation_timestamp"
//  *              sourceModel: "sd1s2d54sd12s1d54dskjdisokds25"
//  *              sourceMetamodel: "sd1s2d54sd12s1d54dskjdisokds25"
//  *              targetMetamodel: "sd1s2d54sd12s1d54dskjdsdsds"
//  *              dsl: "sd1s2d54sd12s1d54dskjdisokds25"
//  *              outcomeStatus: "SUCCESS"
//  *
//  *
//  *  parameters:
//  *      idParam:
//  *          in: path
//  *          name: name
//  *          schema:
//  *              type: string
//  *          required: true
//  *          description: The operation id
//  *
//  *
//  */

// /**
//  * @swagger
//  * tags:
//  *  name: Transformation
//  *  description: The model operations API. This type of api is responsible of persisting model operations
//  *
//  */

// // Post the user
// /**
//  * @swagger
//  * /store/operation:
//  *  post:
//  *      summary: Persist a model operation
//  *      tags: [Transformation]
//  *      requestBody:
//  *          required: true
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      $ref: '#/components/schemas/Transformation'
//  *      responses:
//  *          200:
//  *              description: The operation was successfully persisted
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                          $ref: '#/components/schemas/Transformation'
//  *          404:
//  *               description: The tranformation was not found
//  *          500:
//  *              description: An error occurred on the server, check the logs!
//  */
// router.post("/", async (req, res) => {
//   const ModelOperation = operationFactory(req.body.type);

//   const name = req.body.type + "-" + Date.now();
//   req.body.name = name;

//   try {
//     const operation = await ModelOperation(req.body);
//     const persistedOperation = await operation.save();
//     logger.info("The operation was successful logged!");
//     res.status(200).json({
//       message: "The operation was successful logged!",
//       persistedOperation,
//     });
//   } catch (err) {
//     logger.error(err.toString());
//     res.status(500).json(err.toString());
//   }
// });

// /**
//  * @swagger
//  * /store/operation/{name}:
//  *  get:
//  *      summary: Returns
//  *      tags: [Transformation]
//  *      parameters:
//  *          - in: path
//  *            name: name
//  *            schema:
//  *              type: string
//  *            required: true
//  *            description: The name of the operation
//  *      responses:
//  *          200:
//  *              description: The operation was retrieved successfully!
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                          type: object
//  *                          items:
//  *                              $ref: '#/components/schemas/Transformation'
//  *                          example:
//  *                              message: 'The operation was successful logged!'
//  *                              persistedOperation:
//  *                                  _id: 61b9e68ef3f12cbbe3701411
//  *                                  sourceModel: wuyeqwe45qe784sd5qw78a5d458
//  *                                  sourceMetamodel: 324jhuaqdysuashd7823ythdu
//  *                                  targetMetamodel: 89hdsfidshf9sfhskhfsykfy7hj
//  *                                  dsl: kdsjfisoufqwu3iusakidjkahsdioa342
//  *                                  outcomeStatus: SUCCESS
//  *                                  name: transformation-1639573134432
//  *                                  __v: 0
//  *
//  *          404:
//  *               description: The operation was not found
//  */

// // Getting the operation
// router.get("/:name", async (req, res) => {
//   const ModelOperation = operationFactory(req.body.type);

//   try {
//     const operationData = await ModelOperation.findOne({
//       name: req.params.name,
//     });

//     if (!operationData)
//       return res.status(404).json({ message: "Operation data not found!" });
//     logger.info("Operation was retrieved successfully!");
//     res.status(200).json({
//       message: "Operation was retrieved successfully!",
//       operationData,
//     });
//   } catch (err) {
//     logger.error(err.toString());
//     res.status(500).json(err.toString());
//   }
// });

// // // Update the user
// // /**
// //  * @swagger
// //  * /store/user/{id}:
// //  *  put:
// //  *      summary: Update a user by id
// //  *      tags: [User]
// //  *      parameters:
// //  *          - in: path
// //  *            name: id
// //  *            schema:
// //  *              type: string
// //  *            required: true
// //  *            description: The user id
// //  *      requestBody:
// //  *          required: true
// //  *          content:
// //  *              application/json:
// //  *                  schema:
// //  *                      $ref: '#/components/schemas/User'
// //  *
// //  *      responses:
// //  *          200:
// //  *              description: The user was successfully updated!
// //  *              content:
// //  *                  application/json:
// //  *                      schema:
// //  *                          $ref: '#/components/schemas/User'
// //  *          404:
// //  *              description: The user was not found
// //  *          500:
// //  *              description: An error occurred on the server, check the logs
// //  *
// //  */
// // router.put("/:id", async (req, res) => {
// //   const user = await User.findById(req.params.id);

// //   if (user) {
// //     try {
// //       const updatedUser = await User.findByIdAndUpdate(
// //         req.params.id,
// //         {
// //           $set: req.body,
// //         },
// //         { new: true }
// //       );
// //       logger.info("User updated successfully!");
// //       res
// //         .status(200)
// //         .json({ message: "User updated successfully!", updatedUser });
// //     } catch (err) {
// //       logger.error(err.toString());
// //       res.status(500).json(err.toString());
// //     }
// //   } else {
// //     logger.warn("The user specified does not exist!");
// //     res.status(404).json("The user specified does not exist!");
// //   }
// // });

// // Delete the user
// /**
//  * @swagger
//  * /store/operation/{id}:
//  *  delete:
//  *      summary: Delete an operation data by id
//  *      tags: [Transformation]
//  *      parameters:
//  *          - $ref: "#/components/parameters/idParam"
//  *      responses:
//  *          200:
//  *              description: The operation data were successfully deleted
//  *          404:
//  *              description: The operation was not found!
//  */
// router.delete("/:id", async (req, res) => {
//   const ModelOperation = operationFactory(req.body.type);

//   const operation = await ModelOperation.findById(req.params.id);
//   if (operation) {
//     try {
//       await operation.delete();
//       logger.info("Operation data deleted successfully!");
//       res.status(200).json("Operation data  deleted successfully!");
//     } catch (err) {
//       logger.error(err.toString());
//       res.status(500).json(err.toString());
//     }
//   } else {
//     logger.warn("The operation data  specified does not exist!");
//     res.status(404).json("The operation data  specified does not exist!");
//   }
// });

// module.exports = router;
