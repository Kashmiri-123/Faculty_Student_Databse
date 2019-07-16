const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./Schema/schema');
const mongoose = require('mongoose');
const app = express();

//alowing cross-origin requests...
//allows requests from graphiql to go to the front end
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://katlic:kaku0001@cluster0-6xzs1.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open',() => {
    console.log('connected to database');
}
);

app.use('/graphql', graphqlHTTP({
 schema,
 graphiql:true
}));

app.listen(4000,() =>{
    console.log("Listening for requests on port 4000. ");
});