import React from 'react';
import Faculty from './Component/FacultyList';
//import Student from './Component/StudentList';
import ApolloClient from'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//import AddStudent from './Component/AddStudent';
import AddFaculty from './Component/AddFaculty';


const clients = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={clients}>
       <div className="App">
         <h1>WELCOME</h1>
          <Faculty/>
         <AddFaculty/>

         {/* <Student/>
         <AddStudent/> */}
       </div>
    </ApolloProvider>
  );
}

export default App;
 