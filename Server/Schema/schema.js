const graphql = require('graphql');
const _ = require('lodash');
const Student = require('../models/student');
const Faculty = require('../models/faculty');
const { GraphQLObjectType, GraphQLString,GraphQLList,GraphQLNonNull ,GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

// var faculties = [
//     {name:"AA", address:"A", id:'2', studentId:'1'},
//     {name:"BB", address:"B", id:'1', studentId:'3'},
//     {name:"CC", address:"C", id:'3', studentId:'2'},
// ];
//  var students = [
//      {name:"aa", age:'21', id:'1'},
//      {name:"bb", age:'23', id:'3'},
//      {name:"cc", age:'25', id:'2'},
//  ]
const StudentType = new GraphQLObjectType({  
    ///StudentType is an object
    name : 'Student',
    fields : () =>({
      id : {type:GraphQLID},
      name : {type:GraphQLString},
      age : {type:GraphQLInt},
      faculties:{     //facultyId linked..
          type:new GraphQLList(FacultyType),
          resolve(parent,args)
          {
              //return _.filter(faculties,{facultyId: parent.id});
              return Faculty.find({studentId:parent.id})
          }
      }
    
    }),
});

const FacultyType = new GraphQLObjectType({
    name: 'Faculty',
    fields:()=> ({
     id: {type:GraphQLID},
     name: {type:GraphQLString},
     address: {type: GraphQLString},
     students: {type:StudentType,//facultyId added in Faculty..
           resolve(parent,args)
           {
               //return _.find(students,{id:parent.facultyId});
               return Student.findById(parent.studentId);
           }
       }
    }),
});

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        student: {
        type : StudentType,
        args : {id: {type: GraphQLID}},

        resolve(parent, args)
        {
            //code to get data from db
            //return _.find(students,{id:args.id});
            return Student.findById(args.id);
        }
    },

        faculty: {
            type: FacultyType,
            args: {id: {type:GraphQLID}},

            resolve(parent,args)
            {
               // return _.find(faculties,{id:args.id});
               return Faculty.findById(args.id);
            }
        },

        students: {
            type:new GraphQLList(StudentType),
            resolve(parent,args)
            {
               // return students
               return Student.find({});
            }
        },

        faculties: {
            type:new GraphQLList(FacultyType),
            resolve(parents,args)
            {
                //return faculties
               return Faculty.find({});
            }
        }

    }

});


const Mutation =  new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addStudent:{
            type:StudentType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull( GraphQLInt)}
            
        },

        resolve(parent,args)
        {
            let student = new Student({
                name : args.name,
                age:args.age
            });
             return student.save();
        }
    },

    addFaculty:{
        type:FacultyType,
        args:{
            name:{type:  new GraphQLNonNull(GraphQLString)},
            address:{type:new GraphQLNonNull(GraphQLString)},
            studentId:{type:new GraphQLNonNull(GraphQLID)}
        
    },

    resolve(parent,args)
    {
        let faculty = new Faculty({
            name : args.name,
            address:args.address,
            studentId:args.studentId
        });
         return faculty.save();
    },
}

}
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
});