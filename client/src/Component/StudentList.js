// import React , {Component} from 'react';
// import { graphql } from 'react-apollo';
// import {getStudentQuery} from '../Queries/queries';
// import StudentDetails from './StudentDetails';

// class Student extends Component {
//   displayStudent()
//   {
//     var data=this.props.data;
//     if(data.loading)
//     {
//       return(<div>Loading Student List.....</div>);
//     }
//     else
//     {return data.students.map(student=>{
//       return(<li key={student.id}>{student.name } ,AGE: {student.age}</li>);
//     })}
//   }
//   render(){
//     console.log(this.props);

//   return (
//     <div >
//       STUDENT LIST
//      <ul id="student-list">
//         {this.displayStudent()}
//     </ul>
//     <StudentDetails/>
//     </div>
//   );
// }
// }
// export default graphql (getStudentQuery) (Student);
