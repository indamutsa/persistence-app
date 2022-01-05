const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

exports.UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The id of the user is generated in MongoDb",
    },
    username: {
      type: GraphQLString,
      description: "The username of the user",
    },
    email: {
      type: GraphQLString,
      description: "The email of the user",
    },
  }),
});
