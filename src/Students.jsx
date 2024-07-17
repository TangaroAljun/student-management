import React from 'react';
import Student from './Student';
import './App.css';

const Students = () => {
  const students = [
    { name: "Kean", department: "Science", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
    { name: "Shan", department: "Arts", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
    { name: "Degams", department: "Commerce", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
    { name: "Rolando", department: "Science", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
    { name: "Ate", department: "Arts", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
    { name: "Megas", department: "Commerce", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
    { name: "Pisot", department: "Science", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
    { name: "Welin", department: "Arts", finalGrade: Math.floor(Math.random() * 41) + 60, status: "Pass" },
    { name: "Jaime", department: "Commerce", finalGrade: 59, status: "Fail" },
    { name: "Jhonry", department: "Science", finalGrade: 40, status: "Fail" }
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} index={index + 1} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
