import * as React from 'react';
import { graphql } from 'react-apollo';
import {getFacultyQuery} from '../Queries/queries';
import FacultyDetails from './FacultyDetails';


class Faculty extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      selected:null,
    }
  }

  displayFaculty(){
    var data = this.props.data;
    if (data.loading)
    {
      return(
        <div>
          Loading Student list....
        </div>
      );
    }
    else
     {
       return data.faculties.map(faculty =>{
         return(
           <li key={faculty.id} onClick={(e) => {this.setState({selected:faculty.id})}} >{faculty.name}</li>
         );
       })
     }
  }

  render(){
    console.log(this.props);

  return (
    <div >
     <h1> FACULTY LIST</h1>
     <ul id="faculty-list">
        {this.displayFaculty()}
    </ul>
    <FacultyDetails facultyid={this.state.selected} />
    </div>
  );
}
}
export default graphql(getFacultyQuery)(Faculty);
