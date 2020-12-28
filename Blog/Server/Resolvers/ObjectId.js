const {GraphQLScalarType, Kind} = require('graphql');
module.exports = {
    ObjectId: new GraphQLScalarType({
        name: 'ObjectId',
        description: 'ObjectId custom scalar type',
        parseValue(value) {
          return value; // value from the client
        },
        serialize(value) {
          return value.toString; // value sent to the client
        },
        parseLiteral(ast) {
          return null;
        },
  })
}