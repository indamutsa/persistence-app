const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { GET_USER } = require("./Queries/User");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUser: GET_USER,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = {
  schema,
};
