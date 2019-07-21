import { gql } from 'apollo-boost';


const getFacultyQuery = gql`
  {
    faculties{
      name
      id
      address
    }
  }
`
 

const getStudentQuery = gql`
  {
      students{
          name
          id
          age
      }
    }
`

const addStudentMutation = gql`
   mutation($name:String!, $age:Int )
   {
    addStudent(name:$name,age:$age)
    {
      name
      age
      id
    }
   }

`

const addFacultyMutation = gql`
   mutation($name:String!, $address:String!, $studentId:ID!)
   {
     addFaculty(name:$name ,address:$address, studentId:$studentId)
    {
      name
      address
      id
    }
   }
 
`
const getFacultysQuery = gql`
   query($id: ID)
   {faculty(id:$id)
   {
     name
     address
     students{
       id
       name
       age
        faculties{
          name
          id
          address
        }
     }
   }
   }
`

// const getStudentsQuery = gql`
//    query($id: ID)
//    {student(id:$id)
//    {
//      id
//      name
//      age
     
//    }
//    }
// `

export {getFacultyQuery,getStudentQuery,addFacultyMutation,getFacultysQuery,addStudentMutation /*,getStudentsQuery*/};