import * as React from 'react';
import { graphql } from 'react-apollo';
import {getFacultysQuery} from '../Queries/queries';


class FacultyDetails extends  React.Component {
 
   
        displayFacultyDetails(){
            const { faculty } = this.props.data;
            if(faculty)
            {
                return(
                    <div>
                        <h2>{faculty.name}</h2><br/>
                        <p>{faculty.address}</p><br/>
                        <p>{faculty.students.name}</p><br/>
                        <p>All faculties of this student </p><br/>
                        <ul>
                            {
                                faculty.students.faculties.map(item => {
                                    return <li key={item.id}>{item.name}</li>
                                })
                            }
                        </ul>
                    </div>
                )
            }
            else{
                return (<div>No faculty selected...</div>)
            }
        }
        render(){
    return (
      <div >
       <ul id="facultyDetails">
           <li>
                {this.displayFacultyDetails()}
           </li>
      </ul>
      </div>
    );
  }
  }

  export default graphql(getFacultysQuery,{
    options:(props) =>{
      return {
        variables:{
          id:props.facultyid
        }
      }
    }
  })(FacultyDetails);