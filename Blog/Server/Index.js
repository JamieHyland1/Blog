const MongoClient = require('mongodb').MongoClient;
const variables = require('dotenv').config();
const assert = require('assert');
const uri = variables.parsed.MONGO_URI;
let client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

let db
client.connect(err => {assert.equal(null, err);});

const server = new ApolloServer({typeDefs, resolvers,tracing: true,context: async()=>{
  db = client.db("Blog")
  
  return{db};
}});

server.listen(4000).then(() => {
  console.log(`🚀 Server ready`);
});


