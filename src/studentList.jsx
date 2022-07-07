import React from "react";
import Student from "./Student";

function studentList(props) {
  return (
    <>
      <h2>This is a Student list component!</h2>
      {props.students.map((Student) => (
        <Student
         key={Student.name} 
         Student={Student} />
      ))}
    </>
  );
}

export default studentList;
