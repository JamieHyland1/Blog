const { gql } = require('apollo-server');
const Obj = require('mongodb').ObjectId
const resolvers = {
    Query: {
      posts(_user, _args, _context, _info){
        var cursor = _context.db.collection("Post")
                    .find({})
                    .toArray()
                    .then(data=>{return data;});
        return cursor;
      },
      post(_user,_args,_context,_info){
        var cursor = _context.db.collection('Post')
                    .findOne({_id: Obj(_args._id)})
                    .then(data=>{return data})
                    .catch(err=>console.log(err));
        return cursor;
      }
    },
  };
  module.exports = resolvers;