import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import {getStudentsQuery} from '../Queries/queries';


class StudentDetails extends Component {

    render(){
    return (
      <div >
       <ul id="facultyDetails">
           <p>
                Output the details of faculty.
           </p>
      </ul>
      </div>
    );
  }
  }

  export default graphql(getStudentsQuery)(StudentDetails);