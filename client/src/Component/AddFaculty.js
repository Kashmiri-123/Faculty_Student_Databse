import * as React from 'react';
import { graphql,compose} from 'react-apollo';
import { getStudentQuery,addFacultyMutation, getFacultyQuery } from '../Queries/queries';

class AddFaculty extends React.Component{
 
    constructor(props)
  {
    super(props);
    this.state={
         name: "",
         address:"",
         studentId:"",
    };
  }


    displayStudent(){
        var data=this.props.getStudentQuery;
        console.log(this.props);
        if(data.loading)
        {
           return (<option disabled>Loading......</option>);
        }
        else
        {
            return data.students.map(student=>{
                return(
                    <option key={student.id} value={student.id}>{student.name}</option>
                );
            })
        }
    }

   submitForm(e){
       e.preventDefault();
       console.log(this.state);
       this.props.addFacultyMutation({
       variables:{
           name: this.state.name,
           address: this.state.address,
           studentId: this.state.studentId
           
       },
        refetchQueries:[{ query:getFacultyQuery}]
    });
   }

    render(){
        console.log(this.props);
        return(
            <form id="add-student" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <div>Select students for providing extra time</div>
                  <label>Faculty name: </label>
                  <input type="text" onChange={(e) =>this.setState({name:e.target.value})} />
                </div>
    
                <div className="field">
                  <label>Faculty address:</label>
                  <input type="text" onChange={(e) => this.setState({address:e.target.value})} />
                </div>

                 <div className="field">
                  <label>Student </label>
                  <select onClick={(e) =>this.setState({studentId:e.target.value})}>
                      <option>
                          Select Student
                      </option>
                      {this.displayStudent()}
                  </select>
                </div>
                <button type="submit">+</button>
            </form>
        );
    }
}
export default compose(
    graphql(getStudentQuery, {name:"getStudentQuery"}),
    graphql(addFacultyMutation,{name:"addFacultyMutation"})
  )(AddFaculty);