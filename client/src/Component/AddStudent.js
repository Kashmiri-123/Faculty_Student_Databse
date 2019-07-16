// import React , {Component} from 'react';
// import { graphql,compose } from 'react-apollo';
// import {getFacultyQuery, addStudentMutation} from '../Queries/queries';

// class AddStudent extends Component{

//   constructor(props)
//   {
//     super(props);
//     this.state={
//          name: '',
//          age:'',
//      };
//   };

//     displayFaculty(){
//         var data = this.props.getFacultyQuery;
//         if (data.loading)
//         {
//           return(
//             <option disabled>
//               Loading....
//             </option>
//           );
//         }
//         else
//          {
//            return data.faculties.map(faculty =>{
//              return(
//                <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
//              );
//            })
//          }
//       }

//       submitForm(e){
//         e.preventDefault();
//         console.log(this.state);
//         this.props.addStudentMutation({
//           variables:{
//               name: this.state.name,
//               age: this.state.age,              
//           },
//        refetchQueries:[{ query:getFacultyQuery}]
//        });
//     }

//     render(){
//         return(
//             <form id="add-student"  onSubmit={this.submitForm.bind(this)}>
//                 <div className="field">
//                   <label>Student name: </label>
//                   <input type="text" onChange={(e) =>this.setState({name:e.target.value})} />
//                 </div>
    
//                 <div className="field">
//                   <label>Student age: </label>
//                   <input type="text" onChange={(e) =>this.setState({age:e.target.value})} />
//                 </div>

//                 {/* <div className="field">
//                   <label>Teacher </label>
//                   <select onChange={(e) =>this.setState({id:e.target.value})}>
//                       <option>
//                           Select Teacher
//                       </option>
//                       {this.displayFaculty()}
//                   </select>
//                 </div>
//                 <button>+</button> */}
//             </form>
//         );
//     }
// }

// export default compose(
//   graphql(getFacultyQuery, {name:"getFacultyQuery"}),
//   graphql(addStudentMutation,{name:"addStudentMutation"})
// )(AddStudent);