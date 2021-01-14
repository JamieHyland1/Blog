const { gql } = require('apollo-server');
//const Date = require('./Resolvers/Date');
const typeDefs = gql`
   scalar Date
   scalar ObjectId

   type Query{
       posts: [Post]
       post(_id:ObjectId!):Post!
   }
    type Post{
       _id: ObjectId!
       Title: String!
       Tagline: String!
       paragraphs: [String]!
       date: Date!
       tags: [String]!
       photoIDs: [String]
    }`;

module.exports = typeDefs;
