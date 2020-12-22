const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const server = new ApolloServer({typeDefs});

const assert = require('assert');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Jamie_Hyland95:6Kj6AgFQ3K7Ntlbl@cluster0.wzcf9.mongodb.net/MyDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology:true, useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Blog").collection("Post");
  assert.equal(null, err);
  var testPost = {
    Title: "Jamie Hyland the greatest programmer ever!", 
    Tagline: "He's so good we can't believe hes not elon musk!",
    Date: new Date(),
    tags: ["Code","Test","Awesome"],
    paragraphs: ["Omg hope this pure works dying so much itd be deadly if i got this one working","If i get this far I'm pretty sure it works, I gotta just iron out any small kinks then deploy it"]
  };

  collection.deleteMany({Title:"Jamie Hyland the greatest programmer ever!"}).then(res=>console.log("documents deleted")).catch(err=>console.log(err))
  collection.insertOne(testPost).then(res=>console.log(res)).catch(err=>console.error(err));
  const test = collection.find({}).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    client.close();
});        
 
});


server.listen().then(() => {
  console.log(`🚀 Server ready`);
});
