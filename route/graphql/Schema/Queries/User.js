const { UserType } = require("../TypeDefs/User");
const { GraphQLList, GraphQLString } = require("graphql");
const { User } = require("../../../../models/User");

exports.GET_USER = {
  type: new GraphQLList(UserType),
  args: {
    username: {
      type: GraphQLString,
    },
  },
  resolve: async (parent, args) => {
    return User.findOne({ username: args.username });
  },
};
