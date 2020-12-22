const { gql } = require('apollo-server');

const typeDefs = gql`
   type Query{
       posts: [Post]!
       post(id:ID!):Post
   }
    type Post{
       id: ID!
       author: String!
       tagline: String!
       paragraphs: [String]!
       date: String!
       tags: [String]!
    }`;

module.exports = typeDefs;