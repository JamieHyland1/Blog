import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './App';
import reportWebVitals from './Testing/reportWebVitals';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
const variables = require('dotenv').config();
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});
// client.query({
//     query: gql`
//       query posts {
//         posts{
//           _id
//           Title
//           Tagline
//           paragraphs
//           tags
//           date
//         }
//       }
//     `
//   }).then(result=>console.log(result))
//   .catch(err=>console.log("err"))

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
